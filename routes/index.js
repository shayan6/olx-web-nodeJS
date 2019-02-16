var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
 
var upload = multer({ storage: storage });

var url = 'mongodb://localhost:27017/olx';

/* GET Home Page. */
router.get('/', function(req, res, next) {
  req.session.successFile = false;
  res.render('home', {user:req.session.user});
});

/* GET About Page. */
router.get('/about', function(req, res, next) {
  res.render('about', {user:req.session.user});
});

/* GET Users signup. */
router.get('/signup', function(req, res, next) {
  res.render('signup', {success:req.session.success, error:req.session.error});
});

/* GET Users login. */
router.get('/login', function(req, res, next) {
  req.session.success = false;
  req.session.error = null;
  res.render('login', {user:req.session.user});
});

/* GET Users Posting. */
router.get('/posting', function(req, res, next) {
  res.render('post', {user:req.session.user, successFile:req.session.successFile });
});


/* GET Account. */
router.get('/account', function(req, res, next) {
  res.render('account', {user:req.session.user});
});

/* GET products. */
router.get('/products/:type', function(req, res, next) {
  var resultArray = [];
  mongo.connect(url,{ useNewUrlParser: true }, function(error, db){
    assert.equal(null,error);
    console.log(req.params.type);
    if(req.params.type === 'properties'){
      var cursor = db.db('olx').collection('products').find({category: 'Properties'});
      callCursor();
    }
    if(req.params.type === 'used-cars'){
      var cursor = db.db('olx').collection('products').find({category: 'Used Cars'});
      callCursor();
    }
    if(req.params.type === 'furnitures'){
      var cursor = db.db('olx').collection('products').find({category: 'Furnitures'});
      callCursor();
    }
    if(req.params.type === 'jobs'){
      var cursor = db.db('olx').collection('products').find({category: 'Jobs'});
      callCursor();
    }
    if(req.params.type === 'electronic-appliances'){
      var cursor = db.db('olx').collection('products').find({category: 'Electronic Appliances'});
      callCursor();
    }
    if(req.params.type === 'mobiles'){
      var cursor = db.db('olx').collection('products').find({category: 'mobiles'});
      callCursor();
    }
    if(req.params.type === 'bikes'){
      var cursor = db.db('olx').collection('products').find({category: 'Bikes'});
      callCursor();
    }
    if(req.params.type === 'books'){
      var cursor = db.db('olx').collection('products').find({category: 'Books, Sports & Hobies'});
      callCursor();
    }
    if(req.params.type === 'fashion'){
      var cursor = db.db('olx').collection('products').find({category: 'Fashion'});
      callCursor();
    }
    function callCursor(){
      cursor.forEach(function(doc, error){
        assert.equal(null,error);
        resultArray.push(doc);
      },function(){
        db.close();
        console.log(resultArray);
        res.render('products', {product: resultArray, user:req.session.user});
      });
    }
  });
});

/* GET my ads. */
router.get('/manage-ads', function(req, res, next) {
  if(req.session.user){
    var resultArray = [];
    mongo.connect(url, function(error, db){
      assert.equal(null,error);
      var cursor = db.db('olx').collection('products').find({user:req.session.user});
      cursor.forEach(function(doc, error){
        assert.equal(null,error);
        resultArray.push(doc);
      },function(){
        db.close();
        console.log(resultArray);
        res.render('manage-ads', {user:req.session.user, userAd:resultArray});
      });
    });
  }
  else{
    res.redirect('/login');
  }
});

/* POST user form. */
router.post('/user-submit', function(req, res, next) {
  req.check('password', 'invalid Password').isLength({min:4}).equals(req.body.confirm_password);
  var error = req.validationErrors();
  if(error){
    req.session.error = error;
    req.session.success = false;
  }
  else{
    req.session.success = true;
    var userRecord = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      password: req.body.password,
      city: req.body.city
    };
    mongo.connect(url, function(error, db){
      assert.equal(null,error);
      db.db('olx').collection('users').insertOne(userRecord, function(error, result){
        assert.equal(null, error);
        console.log('inserted data');
        db.close();
      });
    });
  }
  res.redirect('/signup');
});


/* POST user data. */
router.post('/user-login', function(req, res, next) {
    var resultArray = [];
    var userRecord = {
      phone: req.body.phone,
      password: req.body.password
    };
    mongo.connect(url, function(error, db){
      assert.equal(null,error);
      var cursor = db.db('olx').collection('users').find(userRecord);
      cursor.forEach(function(doc, error){
        assert.equal(null,error);
        resultArray.push(doc);
      },function(){
        db.close();
        req.session.user = resultArray[0];
        console.log(resultArray);
        res.redirect('/');
      });
    });
});

/* POST user ad. */
router.post('/user-submit-post', upload.single('imagePath'), function(req, res, next) {
    if(req.session.user){
      var postRecord = {
        imagePath: req.file.filename,
        title: req.body.title,
        description: req.body.discription,
        price: req.body.price,
        category: req.body.category,
        user:req.session.user
      };

    }
    else{

      var postRecord = {
        imagePath: req.file.filename,
        title: req.body.title,
        description: req.body.discription,
        price: req.body.price,
        category: req.body.category,
        user:{
          first_name: req.body.name,
          phone: req.body.phone,
          city: req.body.city
        }
      };

    }
    mongo.connect(url, { useNewUrlParser: true }, function(error, db){
      assert.equal(null,error);
      db.db('olx').collection('products').insertOne(postRecord, function(error, result){
        assert.equal(null, error);
        console.log('inserted data');
        req.session.successFile = true;
        db.close();
      });
    });

  res.redirect('/posting');
});


/* POST update user data. */
router.post('/user-update', function(req, res, next) {
    req.session.success = true;
    var userRecord = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      city: req.body.city
    };
    var id = req.session.user._id;
    mongo.connect(url, function(error, db){
      assert.equal(null,error);
      db.db('olx').collection('users').updateOne({_id:objectId(id)}, {$set:userRecord} , function(error, result){
        assert.equal(null, error);
        console.log('updated data');
        db.close();
      });
    });

    var resultArray = [];
    mongo.connect(url, function(error, db){
      assert.equal(null,error);
      var cursor = db.db('olx').collection('users').find(userRecord);
      cursor.forEach(function(doc, error){
        assert.equal(null,error);
        resultArray.push(doc);
      },function(){
        db.close();
        req.session.user = resultArray[0];
        console.log(resultArray);
        res.redirect('/account');
      });
    });
});

/* POST update user post. */
router.post('/post-update', function(req, res, next) {
  var userRecord = {
    first_name: req.body.first_name,
    phone: req.body.phone,
    city: req.body.city,
    title: req.body.title,
    price: req.body.price,
    discription: req.body.discription
  };
  var id = req.body.id;
  mongo.connect(url, function(error, db){
    assert.equal(null,error);
    db.db('olx').collection('products').updateOne({_id:objectId(id)}, {$set:userRecord} , function(error, result){
      assert.equal(null, error);
      console.log('updated post');
      db.close();
      res.redirect('/manage-ads');
    });
  });
});

router.get('/logout', function(req, res) {
  console.log(req.session);
  req.session.destroy(function(err){
     if(err){
        console.log(err);
     }else{
         console.log(req.session);
         res.redirect('/login');
     }
  });
});

module.exports = router;

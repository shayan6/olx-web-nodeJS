<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<style>
    .btn-file {
    position: relative;
    overflow: hidden;
}
.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
}

#img-upload{
    width: 100%;
}

.btn.active.focus,
.btn.active:focus,
.btn.focus,
.btn.focus:active,
.btn:active:focus,
.btn:focus {
  outline: 0 !important;
  outline-offset: 0  !important;
  background-image: none  !important;
  -webkit-box-shadow: none !important;
  box-shadow: none  !important;
}
</style>
<div class="content-box">
    <div class="element-wrapper">
        <h3 class="element-header">
            Posting
        </h3>
    <div class="element-box">
    <h5 class="form-header">
      Submit a Free Classified Ad
    </h5>
    <div class="form-desc">
    </div>
        <div class="table-responsive">
        <form action="/user-submit-post" method="post" enctype="multipart/form-data">
        <table class="table table-striped table-bordered">
            <tbody>
            <tr>
                <td>
                    <div class="form-group row">
                        <label class="col-form-label col-sm-3 text-right" for=""> Ad Title</label>
                        <div class="col-sm-5">
                        <input class="form-control" name="title" placeholder="Enter Title" type="text" required="required">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-form-label col-sm-3 text-right" for=""> Price </label>
                        <div class="col-sm-5">
                            <div class="input-group">
                                <div class="input-group-addon btn btn-primary">
                                    Rs.
                                </div>
                                <input class="form-control" name="price" placeholder="Enter Price" type="text" required="required">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-form-label col-sm-3 text-right" for="">Category</label>
                        <div class="col-sm-5">
                        <select name="category" class="form-control" required="required">
                            <option value="">
                            Select State
                            </option>
                            <option>
                            Properties
                            </option>
                            <option>
                            Used Cars
                            </option>
                            <option>
                            Furnitures
                            </option>
                            <option>
                            Jobs
                            </option>
                            <option>
                            Electronic Appliances
                            </option>
                            <option>
                            Mobiles
                            </option>
                            <option>
                            Bikes
                            </option>
                            <option>
                            Books, Sports & Hobies
                            </option>
                            <option>
                            Fashion
                            </option>
                        </select>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                <div class="form-group row">
                <label class="col-sm-3 col-form-label text-right">Discription</label>
                <div class="col-sm-5">
                    <textarea class="form-control" name="discription" rows="3" placeholder="Enter Some Discriptions here..." required="required"></textarea>
                </div>
                </div>
                <div class="form-group row">
                <label class="col-sm-3 col-form-label text-right">Upload Photo</label>
                <div class="col-sm-5">
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-btn">
                                <span class="btn btn-secondary btn-file">
                                    Browse… <input name="imagePath" type="file" id="imagePath" required="required">
                                </span>
                            </span>
                            <input type="text" class="form-control"  placeholder="Upload Photo" readonly>
                        </div>
                        <img id='img-upload'/>
                    </div>
                </div>
                </div>
                </td>
            </tr>           
            {{#if user}}
            {{else}}
            <tr>
                <td>
                    <div class="form-group row">
                        <label class="col-form-label col-sm-3 text-right" for=""> Name</label>
                        <div class="col-sm-5">
                        <input class="form-control" name="name" placeholder="Enter Name" type="Name" required="required">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-form-label col-sm-3 text-right" for=""> Phone</label>
                        <div class="col-sm-5">
                        <input class="form-control" name="phone" placeholder="Enter Phone" type="number" required="required">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-form-label col-sm-3 text-right" for=""> City</label>
                        <div class="col-sm-5">
                        <input class="form-control" name="city" placeholder="Enter City" type="text" required="required">
                        </div>
                    </div>
                </td>
            </tr> 
            {{/if}} 
            <tr>
                <td>
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <button class="mr-2 mb-2 btn btn-primary btn-rounded" type="submit" style="padding:1% 3% 1% 2%; box-shadow:2px 2px 5px gray">
                                <i class="picons-thin-icon-thin-0317_send_post_paper_plane" style="margin-right:20%"></i>
                                Submit
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        </form>
        </div>
    </div>
    </div>
</div>
<script>
    $("#home").removeClass("active");
    $(".top-bar").hide();
    $(document).ready( function() {
    	$(document).on('change', '.btn-file :file', function() {
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [label]);
		});

		$('.btn-file :file').on('fileselect', function(event, label) {
		    
		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;
		    
		    if( input.length ) {
		        input.val(log);
		    } else {
		        if( log ) alert(log);
		    }
	    
		});
		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();
		        
		        reader.onload = function (e) {
		            $('#img-upload').attr('src', e.target.result);
		        }
		        
		        reader.readAsDataURL(input.files[0]);
		    }
		}

		$("#imagePath").change(function(){
		    readURL(this);
		}); 	
	});
    {{#if successFile}} 
        swal('Success','You Successfully Posted','success'); 
        setTimeout(function(){ window.location = '/properties'; }, 2000);
    {{/if}}
</script>
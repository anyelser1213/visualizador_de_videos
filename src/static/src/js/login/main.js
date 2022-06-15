$(document).ready(function()
{
    $(function() {
        $ ('[maxlength]').keydown ( function (e) {
            var keys = [8, 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];
            var maxLength = $(this).attr('maxlength');
            if( $.inArray(e.keyCode, keys) == -1) {
                if (checkMaxLength (this.value, maxLength)) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        });

        function checkMaxLength (text, max) {
            return (text.length >= max);
        }
    });
})

function ShowModal(content, width, title)
{
    var content = typeof content !== 'undefined' ? content : '';
    var width = typeof width !== 'undefined' ? width : 'none';
    var title = typeof title !== 'undefined' ? title : '&nbsp;';

    if(content == '')
    {
        var modalBox = '<div class="modal show-modal"><div class="modal-content-wrapper" style="max-width:'+ width +'"><div class="modal-header"><h4>'+title+'</h4><a class="modal-close"><i class="material-icons">close</i></a></div><div class="modal-content"><div class="center" style="padding: 80px 0"><img src="/images/loader.gif"><br>Loading...</div></div></div></div>';
    }
    else
    {
        var modalBox = '<div class="modal show-modal"><div class="modal-content-wrapper" style="max-width:'+ width +'"><div class="modal-header"><h4>'+title+'</h4><a class="modal-close"><i class="material-icons">close</i></a></div><div class="modal-content">'+content+'</div></div></div>';
    }

    if($('.show-modal').length == 0)
    {
        $('body').append(modalBox);

        $('.show-modal').modal({
            dismissible: false,
            onOpenEnd: function() {
                $('.show-modal .modal-content').find('[focus]').focus(); 
            },
            onCloseEnd:  function() {
                $('.show-modal').remove(); 
            },
        });
        $('.show-modal').modal('open');   
    }
    else
    {
        $('.show-modal .modal-header h4').html(title);
        $('.show-modal .modal-content').html(content);
        $('.show-modal').modal('open');

        setTimeout( function(){ 
                                    $('.show-modal .modal-content').find('[focus]').focus(); 
                                    $('.material-select').formSelect(); 
                            } , 300);
    }
}

function CloseModal()
{
    $('.show-modal').modal('close');
    setTimeout( function(){ $('.show-modal').remove(); } , 300);
}

function  ToggleMobileSearch() 
{
    var ele = $('.search_wrapper_mobile');

    if(ele.hasClass('hide'))
    {
        ele.removeClass('hide');
    }
    else
    {
        ele.addClass('hide');
    }
}

// function LoadCropModal(options)
// {
//     /*-----------------------------------------------
//     Dependencies:
//     1. ShowModal function declared in common.js
//     2. Require jFiler.min.js
//     3. Require croppie.js
//     -----------------------------------------------*/

//     var content = '<div class="img-container" id="croppieImg"></div><div class="attach_btn"><input type="file" id="imageInput" name="imageInput" data-jfiler-changeInput=\'<div class="btn btn-primary"><div><i class="material-icons left white-text">attach_file</i>Attach Image</div></div>\' data-jfiler-extensions="jpg,jpeg,png" data-jfiler-limit="1" data-jfiler-caption="Only JPG & PNG files are allowed to be uploaded."></div><div class="croppie_action_buttons"><a class="btn btn-outline" onclick="CloseModal()">Cancel</a>&nbsp;&nbsp;<button type="button" class="btn btn-primary" id="CropperCropBtn">&nbsp;Save&nbsp;</button></div>';
//     var modalWidth = typeof options.modalWidth !== 'undefined' ? options.modalWidth : '';

//     //var modalBox = '<div class="modal show-modal"><div class="modal-content-wrapper" style="max-width:'+modalWidth+';width:50%"><div class="modal-header"><h4>'+options.modalTitle+'</h4><a class="modal-close"><i class="material-icons">close</i></a></div><div class="modal-content">'+content+'</div></div></div>';
    
//     ShowModal(content, modalWidth, options.modalTitle);

//     $('input[name=imageInput]').filer();

//     var type = typeof options.type !== 'undefined' ? options.type : 'rectangle';

//     var cropBoxWidth = options.minCropBoxWidth;
//     var cropBoxHeight = options.minCropBoxHeight;
//     var modalContentWidth = $('.modal .modal-content').width();
//     if(cropBoxWidth > modalContentWidth)
//     {
//         cropBoxWidth = Math.round((modalContentWidth * 90) / 100);
//         cropBoxHeight = Math.round((modalContentWidth * cropBoxHeight) / options.minCropBoxWidth);
//     }

//     $uploadCrop = $('#croppieImg').croppie({
//                     enableExif: true,
//                     showZoomer: true,
//                     url: '',
//                     viewport: {
//                         width: cropBoxWidth,
//                         height: cropBoxHeight,
//                         type: type,
//                     },
//                     boundary: {
//                         width: '100%',
//                         height: 250,
//                     },
//                     enableOrientation: true,
//                 });

//     $('#imageInput').on('change', function () {readFile(this, $uploadCrop); });

//     // $('#CropperCropBtn').on('click', function (ev) {
//     //     $uploadCrop.croppie('result', {
//     //         type: 'canvas',
//     //         format: 'jpeg',
//     //         quality: 0.8,
//     //         size: {width: options.minImageWidth, height: options.minImageHeight}
//     //     }).then(function (resp) {
//     //         $(options.hiddenInput).val(resp);
//     //         $(options.resultImage).css('background-image', 'url(' + resp + ')');
//     //         $.ajax({
//     //           type:'post',
//     //           url:'saveProfileImage.php',
//     //           data:{
//     //             description : description,
//     //             user_id : user_id,
//     //             StartDate : StartDate,
//     //             University : University,
//     //             EndDate : EndDate,
//     //             Degree : Degree
//     //           },
//     //           success:function(response) {   
//     //             if(response == "success")
//     //             { 
//     //                 window.location.href = "user-profile.php";
                     
//     //             }
                  
//     //           }
//     //         });
//     //         CloseModal();

//     //     });
//     // });
// }

function LoadCropModal1(options)
{
    /*-----------------------------------------------
    Dependencies:
    1. ShowModal function declared in common.js
    2. Require jFiler.min.js
    3. Require croppie.js
    -----------------------------------------------*/

    var content = '<div class="img-container" id="croppieImg"></div><div class="attach_btn"><input type="file" id="imageInput" name="imageInput" data-jfiler-changeInput=\'<div class="btn btn-primary"><div><i class="material-icons left white-text">attach_file</i>Attach Image</div></div>\' data-jfiler-extensions="jpg,jpeg,png" data-jfiler-limit="1" data-jfiler-caption="Only JPG & PNG files are allowed to be uploaded."></div><div class="croppie_action_buttons"><a class="btn btn-outline" onclick="CloseModal()">Cancel</a>&nbsp;&nbsp;<button type="button" class="btn btn-primary" id="CropperCropBtn1">&nbsp;Save&nbsp;</button></div>';
    var modalWidth = typeof options.modalWidth !== 'undefined' ? options.modalWidth : '';

    //var modalBox = '<div class="modal show-modal"><div class="modal-content-wrapper" style="max-width:'+modalWidth+';width:50%"><div class="modal-header"><h4>'+options.modalTitle+'</h4><a class="modal-close"><i class="material-icons">close</i></a></div><div class="modal-content">'+content+'</div></div></div>';
    
    ShowModal(content, modalWidth, options.modalTitle);

    $('input[name=imageInput]').filer();

    var type = typeof options.type !== 'undefined' ? options.type : 'rectangle';

    var cropBoxWidth = options.minCropBoxWidth;
    var cropBoxHeight = options.minCropBoxHeight;
    var modalContentWidth = $('.modal .modal-content').width();
    if(cropBoxWidth > modalContentWidth)
    {
        cropBoxWidth = Math.round((modalContentWidth * 90) / 100);
        cropBoxHeight = Math.round((modalContentWidth * cropBoxHeight) / options.minCropBoxWidth);
    }

    $uploadCrop = $('#croppieImg').croppie({
                    enableExif: true,
                    showZoomer: true,
                    url: '',
                    viewport: {
                        width: cropBoxWidth,
                        height: cropBoxHeight,
                        type: type,
                    },
                    boundary: {
                        width: '100%',
                        height: 250,
                    },
                    enableOrientation: true,
                });

    $('#imageInput').on('change', function () {readFile(this, $uploadCrop); });

    $('#CropperCropBtn').on('click', function (ev) {
        $uploadCrop.croppie('result', {
            type: 'canvas',
            format: 'jpeg',
            quality: 0.8,
            size: {width: options.minImageWidth, height: options.minImageHeight}
        }).then(function (resp) {
            $(options.hiddenInput).val(resp);
            $(options.resultImage).css('background-image', 'url(' + resp + ')');
            $.ajax({
              type:'post',
              url:'save.php',
              data:{
                description : description,
                user_id : user_id,
                StartDate : StartDate,
                University : University,
                EndDate : EndDate,
                Degree : Degree
              },
              success:function(response) {   
                if(response == "success")
                { 
                    window.location.href = "user-profile.php";
                     
                }
                  
              }
            });
            CloseModal();

        });
    });
}

// function AddPersonalBrandModal()
// {
//     var content =   '<form id="AddPersonalBrandForm">'+
//                         '<div class="form-group">'+
//                             '<div class="input-label">Description</div>'+
//                             '<div class="input-field mg-t-0">'+
//                                 '<textarea class="browser-default" name="Description" placeholder="Describe yourself here so people can find out more about you."></textarea>'+
//                             '</div>'+
//                         '</div>'+
//                         '<div class="row mg-t-20">'+
//                             '<div class="col l12 m12 s12">'+
//                                 '<div class="right">'+
//                                     '<button class="btn btn-outline" onclick="CloseModal()" type="button">Cancel</button>&nbsp;&nbsp;&nbsp;'+
//                                     '<button class="btn btn-primary" type="button">Save</button>'+
//                                 '</div>'+
//                             '</div>'+
//                         '</div>'+
//                     '</form>';

//     ShowModal(content, 'auto', 'Add Personal Brand');
// }

// function AddExperienceModal()
// {
//     var content =   '<form id="AddExperienceForm">'+
//                         '<div class="form-group">'+
//                             '<div class="input-label">Job Title</div>'+
//                             '<div class="input-field mg-t-0">'+
//                                 '<i class="material-icons-outlined prefix" style="left: 0.8rem">business_center</i>'+
//                                 '<input type="text" class="browser-default" name="JobTitle" placeholder="Enter job title">'+
//                             '</div>'+
//                         '</div>'+
//                         '<div class="form-group">'+
//                             '<div class="input-label">Company Name</div>'+
//                             '<div class="input-field mg-t-0">'+
//                                 '<i class="material-icons-outlined prefix" style="left: 0.8rem">business</i>'+
//                                 '<input type="text" class="browser-default" name="CompanyName" placeholder="Enter Company Name">'+
//                             '</div>'+
//                         '</div>'+
//                         '<div class="form-group">'+
//                             '<div class="input-label">Job Start Date</div>'+
//                             '<div class="input-field mg-t-0">'+
//                                 '<i class="material-icons-outlined prefix" style="left: 0.8rem">date_range</i>'+
//                                 '<input type="text" class="browser-default" id="StartDate" name="StartDate" placeholder="Choose Start Date">'+
//                             '</div>'+
//                         '</div>'+
//                         '<div class="form-group">'+
//                             '<div class="input-label">Job End Date</div>'+
//                             '<div class="input-field mg-t-0">'+
//                                 '<i class="material-icons-outlined prefix" style="left: 0.8rem">date_range</i>'+
//                                 '<input type="text" class="browser-default" id="EndDate" name="EndDate" placeholder="Choose End Date">'+
//                             '</div>'+
//                         '</div>'+
//                         '<div class="row mg-t-20">'+
//                             '<div class="col l12 m12 s12">'+
//                                 '<div class="right">'+
//                                     '<button class="btn btn-outline" onclick="CloseModal()" type="button">Cancel</button>&nbsp;&nbsp;&nbsp;'+
//                                     '<button class="btn btn-primary" type="button">Save</button>'+
//                                 '</div>'+
//                             '</div>'+
//                         '</div>'+
//                     '</form>';

//     ShowModal(content, '500px', 'Add Experience');

//     setTimeout(function(){ 
//         $('#StartDate').flatpickr({
//             dateFormat: 'd-M-Y',
//             maxDate: 'today'
//         });
//         $('#EndDate').flatpickr({
//             dateFormat: 'd-M-Y',
//             maxDate: 'today'
//         });
//     }, 500);
// }

function AddEducationModal()
{
    var content =   '<form id="AddEducationForm">'+
                        '<div class="form-group">'+
                            '<div class="input-label">School / University</div>'+
                            '<div class="input-field mg-t-0">'+
                                '<i class="material-icons-outlined prefix" style="left: 0.8rem">business</i>'+
                                '<input type="text" class="browser-default" name="University">'+
                            '</div>'+
                        '</div>'+
                        '<div class="row">'+
                            '<div class="col l6 m6 s12 pd-0">'+
                                '<div class="form-group">'+
                                    '<div class="input-label">Start Date</div>'+
                                    '<div class="input-field mg-t-0">'+
                                        '<i class="material-icons-outlined prefix" style="left: 0.8rem">date_range</i>'+
                                        '<input type="text" class="browser-default" id="StartDate" name="StartDate">'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col l6 m6 s12 pd-r-0">'+
                                '<div class="form-group">'+
                                    '<div class="input-label">End Date</div>'+
                                    '<div class="input-field mg-t-0">'+
                                        '<i class="material-icons-outlined prefix" style="left: 0.8rem">date_range</i>'+
                                        '<input type="text" class="browser-default" id="EndDate" name="EndDate">'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<div class="input-label">Degree</div>'+
                            '<div class="input-field mg-t-0">'+
                                '<i class="material-icons-outlined prefix" style="left: 0.8rem">local_police</i>'+
                                '<input type="text" class="browser-default" name="Degree">'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<div class="input-label">Description</div>'+
                            '<div class="input-field mg-t-0">'+
                                '<textarea class="browser-default" name="Description"></textarea>'+
                            '</div>'+
                        '</div>'+
                        '<div class="row mg-t-20">'+
                            '<div class="col l12 m12 s12">'+
                                '<div class="right">'+
                                    '<button class="btn btn-outline" onclick="CloseModal()" type="button">Cancel</button>&nbsp;&nbsp;&nbsp;'+
                                    '<button class="btn btn-primary" type="button">Save</button>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</form>';

    ShowModal(content, '500px', 'Add Education Details');

    setTimeout(function(){ 
        $('#StartDate').flatpickr({
            dateFormat: 'd-M-Y',
            maxDate: 'today'
        });
        $('#EndDate').flatpickr({
            dateFormat: 'd-M-Y',
            maxDate: 'today'
        });
    }, 500);
}

function RecommendationRequestModal()
{
    var content =   '<form id="RecommendationRequestForm">'+
                        '<div class="screen1">'+
                            '<div class="form-group">'+
                                '<div class="input-label">Email ID</div>'+
                                '<div class="input-field mg-t-0">'+
                                    '<i class="material-icons-outlined prefix" style="left: 0.8rem">email</i>'+
                                    '<input type="email" class="browser-default" name="EmailID">'+
                                '</div>'+
                            '</div>'+
                            '<div class="form-group">'+
                                '<div class="input-label">Job Description</div>'+
                                '<div class="input-field mg-t-0">'+
                                    '<textarea class="browser-default" name="JobDescription"></textarea>'+
                                '</div>'+
                            '</div>'+
                            '<div class="row mg-t-20">'+
                                '<div class="col l12 m12 s12">'+
                                    '<div class="right">'+
                                        '<button class="btn btn-outline" onclick="AnimateDivs(\'.screen1\', \'.screen2\')" type="button">Next <i class="material-icons right">east</i></button>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="screen2 hide">'+
                            '<div class="row">'+
                                '<div class="col l12 m12 s12">'+
                                    '<div class="form-group">'+
                                        '<label>'+
                                            '<input type="checkbox" class="filled-in" name="Strengths">'+
                                            '<span>What are the Vishwajeet\'s greatest strengths? If we can personalize</span>'+
                                        '</label>'+
                                    '</div>'+
                                    '<div class="form-group mg-t-30">'+
                                        '<label>'+
                                            '<input type="checkbox" class="filled-in" name="WorkWith">'+
                                            '<span>What was it like to work with Vishwajeet?</span>'+
                                        '</label>'+
                                    '</div>'+
                                    '<div class="form-group mg-t-30">'+
                                        '<label>'+
                                            '<input type="checkbox" class="filled-in" name="Accomplishments">'+
                                            '<span>What was one of Vishwajeet\'s biggest accomplishments while you worked together?</span>'+
                                        '</label>'+
                                    '</div>'+
                                    '<div class="form-group mg-t-30">'+
                                        '<label>'+
                                            '<input type="checkbox" class="filled-in" name="HandleChallenges">'+
                                            '<span>How did Vishwajeet handled challenges?</span>'+
                                        '</label>'+
                                    '</div>'+
                                    '<div class="form-group mg-t-30">'+
                                        '<label>'+
                                            '<input type="checkbox" class="filled-in" name="WorkEnvironment">'+
                                            '<span>What type of work environment do you think Vishwajeet would be most likely to thrive in, and why?</span>'+
                                        '</label>'+
                                    '</div>'+
                                '</div>'+

                                '<div class="col l12 m12 s12 mg-t-30">'+
                                    '<div>'+
                                        '<button class="btn btn-outline" onclick="AnimateDivs(\'.screen2\', \'.screen1\')" type="button"><i class="material-icons left">west</i> Prev</button>&nbsp;&nbsp;&nbsp;'+
                                        '<button class="btn btn-outline right" type="button">Save</button>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        
                        
                        
                    '</form>';

    ShowModal(content, '600px', 'Add Recommendation');

    setTimeout(function(){ 
        $('#StartDate').flatpickr({
            dateFormat: 'd-M-Y',
            maxDate: 'today'
        });
        $('#EndDate').flatpickr({
            dateFormat: 'd-M-Y',
            maxDate: 'today'
        });
    }, 500);
}

// function AddSkillsModal()
// { 
//     var content =   '<form id="AddSkillsForm">'+
//                         '<div class="form-group">'+
//                             '<div class="input-label">Type-in the "skills" you want to add to your profile <br> <span class="red-text">(type-in your strongest "skills" and press enter)</span></div>'+
//                             '<div class="input-field mg-t-0">'+
//                                 '<textarea name="Skills"></textarea>'+
//                             '</div>'+
//                         '</div>'+
//                         '<div class="row mg-t-20">'+
//                             '<div class="col l12 m12 s12">'+
//                                 '<div class="right">'+
//                                     '<button class="btn btn-outline" onclick="CloseModal()" type="button">Cancel</button>&nbsp;&nbsp;&nbsp;'+
//                                     '<button class="btn btn-primary" type="button" id="addskillsbutton">Save</button>'+
//                                 '</div>'+
//                             '</div>'+
//                         '</div>'+
//                     '</form>';

//     ShowModal(content, '500px', 'Add Skills');

//     setTimeout(function(){ 
//         $('#AddSkillsForm').find('[name="Skills"]').selectize({
//               delimiter: ",",
//               persist: false,
//               create: function (input) {
//                 return {
//                   value: input,
//                   text: input,
//                 };
//               },
//             });
//     }, 500);
// }

// function AddLanguageModal()
// {
//     var content =   '<form id="AddLanguageForm">'+
//                         '<div class="form-group">'+
//                             '<div class="input-label">Type-in the "languages" you want to add to your profile <br> <span class="red-text">(type-in your "language" and press enter)</span></div>'+
//                             '<div class="input-field mg-t-0">'+
//                                 '<textarea name="Languages"></textarea>'+
//                             '</div>'+
//                         '</div>'+
//                         '<div class="row mg-t-20">'+
//                             '<div class="col l12 m12 s12">'+
//                                 '<div class="right">'+
//                                     '<button class="btn btn-outline" onclick="CloseModal()" type="button">Cancel</button>&nbsp;&nbsp;&nbsp;'+
//                                     '<button class="btn btn-primary" type="button">Save</button>'+
//                                 '</div>'+
//                             '</div>'+
//                         '</div>'+
//                     '</form>';

//     ShowModal(content, '500px', 'Add Languages');

//     setTimeout(function(){ 
//         $('#AddLanguageForm').find('[name="Languages"]').selectize({
//               delimiter: ",",
//               persist: false,
//               create: function (input) {
//                 return {
//                   value: input,
//                   text: input,
//                 };
//               },
//             });
//     }, 500);
// }



function PersonalDetailsModal()
{
    var content =   '<form id="AddPersonalDetailsForm">'+
                        '<div class="form-group">'+
                            '<div class="input-label">Email ID</div>'+
                            '<div class="input-field mg-t-0">'+
                                '<i class="material-icons-outlined prefix" style="left: 0.8rem">email</i>'+
                                '<input type="email" class="browser-default" name="EmailID">'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<div class="input-label">Mobile</div>'+
                            '<div class="input-field mg-t-0">'+
                                '<i class="material-icons-outlined prefix" style="left: 0.8rem">phone_iphone</i>'+
                                '<input type="tel" class="browser-default" name="Mobile">'+
                            '</div>'+
                        '</div>'+
                        '<div class="row mg-t-20">'+
                            '<div class="col l12 m12 s12">'+
                                '<div class="right">'+
                                    '<button class="btn btn-outline" onclick="CloseModal()" type="button">Cancel</button>&nbsp;&nbsp;&nbsp;'+
                                    '<button class="btn btn-primary" type="button">Save</button>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</form>';

    ShowModal(content, '500px', 'Add Personal Details');
}

function AnimateDivs(div1, div2)
{
    $(div1).addClass('hide');
    $(div2).removeClass('hide');
}


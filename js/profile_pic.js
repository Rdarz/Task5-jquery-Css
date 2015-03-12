$(document).ready(function() {
    var $ = jQuery.noConflict();
    $('.change_img').on('change', function(event) {
        /* Act on the event */
        var filePath = URL.createObjectURL(event.target.files[0]);

        var temp1 = $('.cropper-container img').attr('src');
        var temp2 = $('.img-preview img').attr('src');
        $('.cancel_img').click(function(event) {
            /* Act on the event */
            $('.cropper-container img').attr('src', temp1);
            $('.img-preview img').attr('src', temp2);
        });
        if (filePath != null) {
            $('.cropper-container img').attr('src', filePath);

            $('.img-preview img').attr('src', filePath);
        }

        $('.img-container').css('display', 'block');

    });


    $('.save_img').click(function(event) {
        /* Act on the event */

        $('.img-container').css('display', 'none');

    });





    $(".trigger").click(function() {
        $(".change_img").trigger('click');
    });




});
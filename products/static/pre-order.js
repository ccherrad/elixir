
(function($) {

    "use strict";

    /*
    ================================================
    jQuery Validate - Reset Defaults
    ================================================
    */

    $.validator.setDefaults({
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorPlacement: function(error, element) {}
    });

    /*
    ================================================
    jQuery Validate - Reset Defaults
    ================================================
    */

    $.validator.setDefaults({
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'p',
        errorClass: 'help-block text-danger',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                element.parent().addClass('animated shake');
                setTimeout(function() {
                    element.parent().removeClass('animated shake');
                }, 1000);

            } else if (element.parent('label').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    // Go to second Step
    $('#next-personal-1').on('click', function() {
        $('#js-product-info-1').addClass('slide-out-left');
        $('#js-personal-info-1').addClass('slide-in-right');
    });
    // back to first Step
    $('#prev-product-info-1').on('click', function() {
        $('#js-personal-info-1').removeClass('slide-in-right');
        $('#js-product-info-1').removeClass('slide-out-left');
    });

    // Go to second Step
    $('#next-personal-2').on('click', function() {
        $('#js-product-info-2').addClass('slide-out-left');
        $('#js-personal-info-2').addClass('slide-in-right');
    });
    // back to first Step
    $('#prev-product-info-2').on('click', function() {
        $('#js-personal-info-2').removeClass('slide-in-right');
        $('#js-product-info-2').removeClass('slide-out-left');
    });

    // Go to second Step
    $('#next-personal-3').on('click', function() {
        $('#js-product-info-3').addClass('slide-out-left');
        $('#js-personal-info-3').addClass('slide-in-right');
    });
    // back to first Step
    $('#prev-product-info-3').on('click', function() {
        $('#js-personal-info-3').removeClass('slide-in-right');
        $('#js-product-info-3').removeClass('slide-out-left');
    });

    // Go to second Step
    $('#next-personal-4').on('click', function() {
        $('#js-product-info-4').addClass('slide-out-left');
        $('#js-personal-info-4').addClass('slide-in-right');
    });
    // back to first Step
    $('#prev-product-info-4').on('click', function() {
        $('#js-personal-info-4').removeClass('slide-in-right');
        $('#js-product-info-4').removeClass('slide-out-left');
    });

    // Go to second Step
    $('#next-personal-5').on('click', function() {
        $('#js-product-info-5').addClass('slide-out-left');
        $('#js-personal-info-5').addClass('slide-in-right');
    });
    // back to first Step
    $('#prev-product-info-5').on('click', function() {
        $('#js-personal-info-5').removeClass('slide-in-right');
        $('#js-product-info-5').removeClass('slide-out-left');
    });

    // Go to second Step
    $('#next-personal-6').on('click', function() {
        $('#js-product-info-6').addClass('slide-out-left');
        $('#js-personal-info-6').addClass('slide-in-right');
    });
    // back to first Step
    $('#prev-product-info-6').on('click', function() {
        $('#js-personal-info-6').removeClass('slide-in-right');
        $('#js-product-info-6').removeClass('slide-out-left');
    });

    // Go to second Step
    $('#next-personal-7').on('click', function() {
        $('#js-product-info-7').addClass('slide-out-left');
        $('#js-personal-info-7').addClass('slide-in-right');
    });
    // back to first Step
    $('#prev-product-info-7').on('click', function() {
        $('#js-personal-info-7').removeClass('slide-in-right');
        $('#js-product-info-7').removeClass('slide-out-left');
    });

    // Go to second Step
    $('#next-personal-8').on('click', function() {
        $('#js-product-info-8').addClass('slide-out-left');
        $('#js-personal-info-8').addClass('slide-in-right');
    });
    // back to first Step
    $('#prev-product-info-8').on('click', function() {
        $('#js-personal-info-8').removeClass('slide-in-right');
        $('#js-product-info-8').removeClass('slide-out-left');
    });

    // Go to second Step
    $('#next-personal-9').on('click', function() {
        $('#js-product-info-9').addClass('slide-out-left');
        $('#js-personal-info-9').addClass('slide-in-right');
    });
    // back to first Step
    $('#prev-product-info-9').on('click', function() {
        $('#js-personal-info-9').removeClass('slide-in-right');
        $('#js-product-info-9').removeClass('slide-out-left');
    });

    // Go to second Step
    $('#next-personal-10').on('click', function() {
        $('#js-product-info-10').addClass('slide-out-left');
        $('#js-personal-info-10').addClass('slide-in-right');
    });
    // back to first Step
    $('#prev-product-info-10').on('click', function() {
        $('#js-personal-info-10').removeClass('slide-in-right');
        $('#js-product-info-10').removeClass('slide-out-left');
    });

    // Go to second Step
    $('#next-personal-11').on('click', function() {
        $('#js-product-info-11').addClass('slide-out-left');
        $('#js-personal-info-11').addClass('slide-in-right');
    });
    // back to first Step
    $('#prev-product-info-11').on('click', function() {
        $('#js-personal-info-11').removeClass('slide-in-right');
        $('#js-product-info-11').removeClass('slide-out-left');
    });

    // Go to second Step
    $('#next-personal-12').on('click', function() {
        $('#js-product-info-12').addClass('slide-out-left');
        $('#js-personal-info-12').addClass('slide-in-right');
    });
    // back to first Step
    $('#prev-product-info-12').on('click', function() {
        $('#js-personal-info-12').removeClass('slide-in-right');
        $('#js-product-info-12').removeClass('slide-out-left');
    });


    /*   jQuery Validate - Reset Defaults */

    $.validator.setDefaults({
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorPlacement: function(error, element) {}
    });

})(jQuery);

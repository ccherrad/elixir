/* ------------------------------------------------

Page    : Main JS
Version : 1.0
Author  : Surjith S M
URI     : http://themeforest.net/user/surjithctly

Copyright © All rights Reserved
Surjith S M / @surjithctly

-------------------------------------------------- */
// blog list


(function($) {

    "use strict";

    $(window).load(function () {
        $('.preloader').fadeOut('slow', function () {
          $(this).remove();
        });
      });
    /* ------------ PAGE LOADING ------------ */

    // hide header first
    $('.fadeInOnLoad').css('opacity', 0);

    // closing loading section on click
    // useful for bored users
    $('#loading').on('click', function() {
        $("#loading").fadeOut();
    });
    /*On Page Load, Fadecout Loading, Start Scroll Animation*/
    $(window).load(function() {
        $("#loading").fadeOut();
        $("#loading .object").delay(700).fadeOut("slow");
        // Show header on load
        $('.fadeInOnLoad').delay(700).fadeTo("slow", 1);

        /*Iniitate Scroll Animation*/
        bodyScrollAnimation()
    })


    /* ------------ ON SCROLL ANIMATION ------------ */


    function bodyScrollAnimation() {
        var scrollAnimate = $('body').data('scroll-animation');
        if (scrollAnimate === true) {
            new WOW({
                mobile: false
            }).init()
        }
    }


    /* ------------ TOOLTIP ------------ */

	$('[data-toggle="tooltip"]').tooltip();

    /* ------------ SCROLL SPY ------------ */


    /*Scroll Spy*/
    $('body').scrollspy({
        target: '#main-navbar',
        offset: 100
    });


	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');

		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}


    /* ================================================
       Scroll Functions
       ================================================ */


    $('nav.navbar-default a[href^="#"]:not([href="#"]), .back_to_top, .explore').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 1500);
        event.preventDefault();
    });


    /* ---------- Back to Top ---------- */

    $(window).scroll(function() {
        if ($(window).scrollTop() > 1000) {
            $('.back_to_top').fadeIn('slow');
        } else {
            $('.back_to_top').fadeOut('slow');
        }
    });


    /* ---------- Background Video ---------- */

    if ($('#BGVideo').length) {
        $("#BGVideo").mb_YTPlayer({useOnMobile : true});
    }


    /* ---------- Play Video POPUP ---------- */

    if ($('.video').length) {
        $('.video').magnificPopup({
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

                patterns: {
                    youtube: {
                        index: 'youtube.com/', // String that detects type of video

                        id: 'v=', // String that splits URL in a two parts, second part should be %id%
                        // Or null - full URL will be returned
                        // Or a function that should return %id%, for example:
                        // id: function(url) { return 'parsed id'; }

                        src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }


                },

                srcAction: 'iframe_src',
            }
        });

    }



    /* ---------- QUANTITY TOUCHSPIN ---------- */

    if ($('.quanity').length) {

        $('.quanity').TouchSpin({
            verticalbuttons: true,
            verticalupclass: 'glyphicon glyphicon-plus',
            verticaldownclass: 'glyphicon glyphicon-minus'
        });

    }

    /* ---------- SELECTPICKER ---------- */

    if ($('.selectpicker').length) {
        $('.selectpicker').selectpicker();
    }


    /*Feature Notes*/
    $('.feature-note.note-type-1 .plus-icon .plus').on('click', function() {
        if ($(this).parents('.feature-note').hasClass('show-cont')) {
            $(this).parents('.feature-note').removeClass('show-cont')
        } else {
            $(this).parents('.feature-note').addClass('show-cont')
        }
    });


    /* ---------- CONTACT FORM FLIPBOX ---------- */

    $('.flip-contact-box').on('click', function() {
        if (!$('.flip-box-container').hasClass('show-form')) {
            $('.flip-box-container').addClass('show-form')
        }
    });

    $('.js-close-flip').on('click', function() {
        $('.flip-box-container').removeClass('show-form');
    });

    /* ================================================
   jQuery Validate - Reset Defaults
   ================================================ */

    if ($.fn.validator) {

        $.validator.setDefaults({
            highlight: function(element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function(element) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            errorPlacement: function(error, element) {}
        });
    }

    if ($.fn.validator) {
        // validate Registration Form
        $("#paypal-regn").validate({
            rules: {
                first_name: "required",
                last_name: "required",
                email: {
                    required: true,
                    email: true
                },
                os0: "required",
                quantity: "required",
                agree: "required"
            },
            messages: {
                first_name: "Your first name",
                last_name: "Your last name",
                email: "We need your email address",
                os0: "Choose your Pass",
                quantity: "How many seats",
                agree: "Please accept our terms and privacy policy"
            },
            submitHandler: function(form) {
                $("#reserve-btn").attr("disabled", true);
                form.submit();
                //console.log($(form).serialize())
            }
        });
    }

    /* ---------- INITIATE EXIT MODAL ---------- */

    var dataexitpopuop = $('body').data('exit-modal');

    if ($('#exit-modal').length && dataexitpopuop === true) {

        var _ouibounce = ouibounce($('#exit-modal')[0], {
            aggressive: true, // use false here to hide message once shown
            timer: 0,
            callback: function() { // if you need to do something, write here
            }
        });
        $('body').on('click', function() {
            $('#exit-modal').hide();
        });
        $('#exit-modal .modal-footer').on('click', function() {
            $('#exit-modal').hide();
        });
        $('#exit-modal .exit-modal').on('click', function(e) {
            e.stopPropagation();
        });

    }

	// hide collapse menu on mobile when click on menu items
	$('.nav li:not(.item-has-children) a').on('click', function () {
		$('.navbar .navbar-collapse').collapse('hide');
	});



})(jQuery);

/* ------------------------------------------------

Page    : Main JS
Version : 1.0
Author  : Surjith S M
URI     : http://themeforest.net/user/surjithctly

Copyright © All rights Reserved
Surjith S M / @surjithctly

-------------------------------------------------- */

(function($) {

    "use strict";

    /* ---------- Nav BG ON Scroll---------- */

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 99) {
            $(".navbar-default").addClass("is-scrolling");
        } else {
            $(".navbar-default").removeClass("is-scrolling");
        }
    });
    
})(jQuery);

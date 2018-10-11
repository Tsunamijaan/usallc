(function ($) {
    "use strict";
    
    
    
    // =====  PRELOADER  ====

    $(window).on('load', function () {
        $('.preloader').fadeOut();
    });
    
    
//=====sticky-menu-activtation
 
 /* TOP Menu Stick  */
$("#sticky-header").sticky({topSpacing:0});
 
// =====Wow-animation-active-style-heree
 new WOW().init();
 
 
 
 
$('.slider-active').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        nav: false,
        dots:true,
        items: 1

    });

  

//=======mobile-menu-active-start-here==========
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile-menu'
    });





/* ====scroll-up-jquiry-plugin-start==== */

   $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 300,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',           // Fade, slide, none
        animationSpeed: 200,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required.
        scrollImg: false,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
    });

})(jQuery);	
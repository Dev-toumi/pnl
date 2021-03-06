/************* Main Js File ************************
    Template Name:  - Portfolio Template
    Author: 
    Version: 1.0
    Copyright 2018
*************************************************************/


/*------------------------------------------------------------------------------------
    
JS INDEX
=============

01 - Ripple Setup
02 - Animated Headline Setup
03 - Portfolio Image
04 - Testimonial Slider


-------------------------------------------------------------------------------------*/


(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {}(jQuery));
    /* 
    =================================================================
    01 - Ripple Setup
    =================================================================	
    */

    

    /* 
    =================================================================
    02 - Animated Headline Setup
    =================================================================	
    */


    $(function () {
        $('.caption-inner').animatedHeadline({
            animationType: 'clip'
        });
    })


    /* 
    =================================================================
    03 - Portfolio Image
    =================================================================	
    */

    $('.zoom-img').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* 
    =================================================================
    04 - Testimonial Slider
    =================================================================	
    */

    $(".owl-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 30,
        touchDrag: true,
        mouseDrag: true,
        items: 1,
        autoplayTimeout: 6000,
        autoplaySpeed: 1200,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });
});

(function($){
	"use strict";
	jQuery(document).on('ready', function () {

		// Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
        });

        //Tooltip
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })

		jQuery('.single-item .yith-wcwl-add-to-wishlist a').each(function(){
			envytheme(jQuery(this), 'html');
        });
        jQuery('.et-cart a').each(function(){
			envytheme(jQuery(this), 'html');
		});
        jQuery('.tf-cart').each(function(){
			envytheme_tf(jQuery(this), 'html');
        });
        jQuery('.top-header .left-nav ul li a').each(function(){
			envytheme_menu(jQuery(this), 'html');
		});

        // Mean Menu
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "767"
        });

        // Search Popup JS
        $('.close-btn').on('click',function() {
            $('.search-overlay').fadeOut();
            $('.search-btn').show();
            $('.close-btn').removeClass('active');
        });
        $('.search-btn').on('click',function() {
            $(this).hide();
            $('.search-overlay').fadeIn();
            $('.close-btn').addClass('active');
        });

        // Related item slider
        $('.related-item-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            smartSpeed: 750,
            margin: 30,
            navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-arrow-pointing-to-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                }
            }
        });

        // Tabs
        $('.items-tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('.items-tab ul.tabs li a').on('click', function (g) {
            var tab = $(this).closest('.items-tab'),
            index = $(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });

        // WOW
        new WOW().init();

        // Select JS
        $('select').niceSelect();

		// // FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function(){
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');
            });
        });

		// Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 300) $('.go-top').fadeIn('slow');
                if (scrolled < 300) $('.go-top').fadeOut('slow');
            });
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });
	});


	// Preloader
	jQuery(window).on('load', function() {
		$('.preloader').fadeOut();
    });

    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {
            // Banner item slider
            $('.home-slider').owlCarousel({
                nav: false,
                loop: true,
                margin: 30,
                dots: false,
                autoplay: false,
                smartSpeed: 750,
                autoplayHoverPause: true,
                navText: [
                    "<i class='flaticon-left-arrow'></i>",
                    "<i class='flaticon-arrow-pointing-to-right'></i>"
                ],
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });

            $('.testimonials-slider').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                dots: true,
                autoplayHoverPause: true,
                autoplay: true,
                smartSpeed: 750,
                responsive:{
                    0:{
                        items:1,
                    },
                    768:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            });

            $('.partner-slides').owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                autoplayHoverPause: true,
                autoplay: true,
                smartSpeed: 750,

                responsive: {
                    0: {
                        items: 3,
                        margin: 30,
                    },
                    768: {
                        items: 4,
                    },
                    576: {
                        items: 5,
                        margin: 30,
                    },
                    1200: {
                        items: 6,
                        margin: 20,
                    }
                }
            });

            $('.product-item-slider').owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                autoplayHoverPause: true,
                autoplay: true,
                smartSpeed: 750,
                margin: 30,
                navText: [
                    "<i class='flaticon-left-arrow'></i>",
                    "<i class='flaticon-arrow-pointing-to-right'></i>"
                ],
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    }
                }
            });
        });
    });

    function envytheme(element, content) {
        if(content=='html'){
            var tipText = element.html();
        } else {
            var tipText = element.attr('title');
        }
        element.on('mouseover', function(){
            if(jQuery('.envytheme').length == 0) {
                element.before('<span class="envytheme" style="display: none;">'+tipText+'</span>');
                var tipWidth = jQuery('.envytheme').outerWidth();
                var tipPush = -(tipWidth/2 - element.outerWidth()/2);
                jQuery('.envytheme').css('margin-left', tipPush);
                jQuery('.envytheme').fadeIn();
            }
        });
        element.on('mouseleave', function(){
            jQuery('.envytheme').fadeOut();
            jQuery('.envytheme').remove();
        });
    }

    function envytheme_tf(element, content) {
        if(content=='html'){
            var tipText = element.attr('title');
        }
        element.on('mouseover', function(){
            if(jQuery('.envytheme').length == 0) {
                element.before('<span class="envytheme" style="display: none;">'+tipText+'</span>');
                var tipWidth = jQuery('.envytheme').outerWidth();
                var tipPush = -(tipWidth/2 - element.outerWidth()/2);
                jQuery('.envytheme').css('margin-left', tipPush);
                jQuery('.envytheme').fadeIn();
            }
        });
        element.on('mouseleave', function(){
            jQuery('.envytheme').fadeOut();
            jQuery('.envytheme').remove();
        });
    }

    function envytheme_menu(element, content) {
        if(content=='html'){
            var tipText = element.attr('data-title');
        }
        element.on('mouseover', function(){
            if(jQuery('.envytheme').length == 0) {
                element.before('<span class="envytheme" style="display: none;">'+tipText+'</span>');
                var tipWidth = jQuery('.envytheme').outerWidth();
                var tipPush = -(tipWidth/2 - element.outerWidth()/2);
                jQuery('.envytheme').css('margin-left', tipPush);
                jQuery('.envytheme').fadeIn();
            }
        });
        element.on('mouseleave', function(){
            jQuery('.envytheme').fadeOut();
            jQuery('.envytheme').remove();
        });
    }

    $('#etModal').modal();

    function afterModalTransition(e) {
    e.setAttribute("style", "display: none !important;");
    }
    $('#etModal').on('hide.bs.modal', function (e) {
        setTimeout( () => afterModalTransition(this), 200);
    })

}(jQuery));



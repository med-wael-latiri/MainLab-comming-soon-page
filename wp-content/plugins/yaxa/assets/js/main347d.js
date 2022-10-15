(function($){
	"use strict";

    // WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',    
            animateClass: 'animated', 
            offset:       20,         
            mobile:       true,       
            live:         true,       
          });
          wow.init();
        }
	});

    // Preloader JS
    $(window).on ('load', function (){
        $('.preloader').fadeOut();
    });
    
    // Load JS on elementor
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {

            // Sidebar Modal
            $(".navbar-menu .burger-menu").on('click',  function() {
                $('.sidebar-modal').toggleClass('active');
            });
            $(".sidebar-modal-close-btn").on('click',  function() {
                $('.sidebar-modal').removeClass('active');
            });

            // Subscribe Modal
            $(".notify-btn").on('click',  function() {
                $('.subscribe-modal').toggleClass('active');
            });
            $(".subscribe-modal-close-btn").on('click',  function() {
                $('.subscribe-modal').removeClass('active');
            });

            // First Word Color JS
            $(".restaurant-one .main-banner-content h5").html(function(){
                var text= $(this).text().trim().split(" ");
                var first = text.shift();
                return (text.length > 0 ? "<span>"+ first + "</span> " : first) + text.join(" ");
            });
            
            // Subscribe Modal
            $(".restaurant-one .navbar-menu .burger-menu").on('click',  function() {
                $('.restaurant-one .subscribe-modal').toggleClass('active');
            });
            $(".restaurant-one .subscribe-modal-close-btn").on('click',  function() {
                $('.restaurant-one .subscribe-modal').removeClass('active');
            });

            // Particles JS
            if(document.getElementById("particles-js")) particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value":260, "density": {
                            "enable": true, "value_area": 800
                        }
                    }
                    , "color": {
                        "value": "#ffffff"
                    }
                    , "shape": {
                        "type":"circle", "stroke": {
                            "width": 0, "color": "#000000"
                        }
                        , "polygon": {
                            "nb_sides": 5
                        }
                        , "image": {
                            "src": "img/github.svg", "width": 100, "height": 100
                        }
                    }
                    , "opacity": {
                        "value":1, "random":true, "anim": {
                            "enable": true, "speed": 1, "opacity_min": 0, "sync": false
                        }
                    }
                    , "size": {
                        "value":3, "random":true, "anim": {
                            "enable": false, "speed": 4, "size_min": 0.3, "sync": false
                        }
                    }
                    , "line_linked": {
                        "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
                    }
                    , "move": {
                        "enable":true, "speed":1, "direction":"none", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                            "enable": false, "rotateX": 600, "rotateY": 600
                        }
                    }
                }
                , "interactivity": {
                    "detect_on":"canvas", "events": {
                        "onhover": {
                            "enable": true, "mode": "bubble"
                        }
                        , "onclick": {
                            "enable": true, "mode": "repulse"
                        }
                        , "resize":true
                    }
                    , "modes": {
                        "grab": {
                            "distance":400, "line_linked": {
                                "opacity": 1
                            }
                        }
                        , "bubble": {
                            "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3
                        }
                        , "repulse": {
                            "distance": 400, "duration": 0.4
                        }
                        , "push": {
                            "particles_nb": 4
                        }
                        , "remove": {
                            "particles_nb": 2
                        }
                    }
                }
                , "retina_detect":true
            });

            // Sidebar Modal
            $(".get-more-info-btn").on('click',  function() {
                $('.sidebar-modal').toggleClass('active');
            });
            $(".sidebar-modal-close-btn").on('click',  function() {
                $('.sidebar-modal').removeClass('active');
            });
            
        });
    });
    
}(jQuery));
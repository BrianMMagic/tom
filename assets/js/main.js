/********************************************************
  1. Custom mouse cursor
  2. Animsition preloader
  3. Swiper slider
  4. Isotope filter
  5. Midnight
  6. Navigation open/close
  7. Drop-down menu
  8. Change menu background
  9. ScrollAnimations
  10. Headroom
  11. Magnific popup
  12. Scroll to id
  13. Touch, no touch
  14. fixed footer
  15. Progress bar
  16. Contact form
********************************************************/

$(function() {
    "use strict";
    
	$(document).ready(function() {
	
		/* 2. Page init */
		$('body').addClass('active').addClass('in');
		setTimeout(function () {
		    $("body").addClass("anim");
		}, 1000);
			
			/* 3. Swiper slider */
			var interleaveOffset = 0.5;

			if ($('.home-slider').length) {
				var mySwiper = new Swiper ('.home-slider', {
					spaceBetween: 0,
				  	speed: 1500,
				    autoplay: {
				        delay: 5000
				    },
				    autoHeight: true,
				  	watchSlidesProgress: true,
				  	pagination: {
						el: '.swiper-pagination',
				    	type: 'bullets',
				       	clickable: true
					},
				  	navigation: {
				    	nextEl: ".swiper-button-next",
				    	prevEl: ".swiper-button-prev"
				  	},
				  	on: {
					    progress: function() {
					      	var swiper = this;
						  	for (var i = 0; i < swiper.slides.length; i++) {
					        	var slideProgress = swiper.slides[i].progress;
								var innerOffset = swiper.width * interleaveOffset;
								var innerTranslate = slideProgress * innerOffset;
								swiper.slides[i].querySelector(".slide-bg").style.transform =
					          	"translate3d(" + innerTranslate + "px, 0, 0)";
					      	}
					    },
					    touchStart: function() {
					      	var swiper = this;
						  	for (var i = 0; i < swiper.slides.length; i++) {
					        	swiper.slides[i].style.transition = "";
					      	}
					    },
					    setTransition: function(speed) {
					      	var swiper = this;
						  	for (var i = 0; i < swiper.slides.length; i++) {
					        	swiper.slides[i].style.transition = speed + "ms";
								swiper.slides[i].querySelector(".slide-bg").style.transition =
								speed + "ms";
					      	}
					    }
				  	}
				});
			}

			if ($('.testimonials-slider').length) {
				var swiper = new Swiper ('.testimonials-slider', {
				  	speed: 1200,
				    autoplay: {
				        delay: 5000
				    },
				    spaceBetween: 30,
				    loop: true,
				    autoHeight: true,
			      	pagination: {
			        	el: '.swiper-pagination',
						clickable: true
			      	}
			    });
			}

			if ($('.about-slider').length) {
			    var swiper = new Swiper ('.about-slider', {
				  	slidesPerView: 2,
				  	spaceBetween: 30,
				  	centeredSlides: true,
				  	speed: 1400,
				  	freeMode: true,
				  	navigation: {
				    	nextEl: ".swiper-button-next",
				    	prevEl: ".swiper-button-prev"
				  	},
				  	breakpoints: {
					    767: {
					    	slidesPerView: 1
					    }
					}
			    });
			}

			if ($('.portfolio-slider').length) {
			    var mySwiper = new Swiper(".portfolio-slider", {
					direction: "vertical",
					navigation: {
				    	nextEl: ".swiper-button-next",
				    	prevEl: ".swiper-button-prev"
				  	},
				  	pagination: {
			        	el: '.swiper-pagination',
						clickable: true,
						dynamicBullets: true
			      	},
				  	speed: 1300,
				  	parallax: true,
				  	autoplay: false,
				  	effect: "slide",
				  	mousewheel: {
				  		sensitivity: 1
		  			}
				});
			}

			if ($('.portfolio-column-slider').length) {
				var mySwiper = new Swiper(".portfolio-column-slider", {
					slidesPerView: 3,
					navigation: {
				    	nextEl: ".swiper-button-next",
				    	prevEl: ".swiper-button-prev"
				  	},
				  	speed: 1300,
				  	parallax: true,
				  	freeMode: true,
				  	autoplay: false,
				  	breakpoints: {
					    999: {
					    	slidesPerView: 2
					    },
					    767: {
					    	slidesPerView: 1
					    }
					},
					mousewheel: {
						sensitivity: 1
		  			}
				});
			}

			if ($('.portfolio-slider2').length) {
			    var swiper = new Swiper ('.portfolio-slider2', {
				  	slidesPerView: 2,
				  	spaceBetween: 30,
				  	centeredSlides: true,
				  	speed: 1400,
				  	autoplay: {
				        delay: 5000
				    },
				  	freeMode: true,
				  	navigation: {
				    	nextEl: ".swiper-button-next",
				    	prevEl: ".swiper-button-prev"
				  	},
				  	breakpoints: {
					    999: {
					    	slidesPerView: 1
					    }
					}
			    });
			}
		    
		    /* 4. Isotope filter */
			function projectFilter() {
				var $gridt = $('.works');
				$gridt.isotope({
			  		itemSelector: '.grid-item',
			  		percentPosition: true
				});
				$('.filter-buttons').on('click', 'button', function () {
					var filterValue = $(this).attr('data-filter');
					$gridt.isotope({
						filter: filterValue
					});
					$(this).addClass('active').siblings().removeClass('active');
				});
			};
			projectFilter();

	    /* 5. Midnight */
	    $('.fixed-header').midnight();
		
		/* 6. Navigation open/close */
		$( ".menu-open" ).on( "click", function() {
		  	$('.menu-open, .nav-container').addClass('active');
		});
		
		$( ".menu-close" ).on( "click", function() {
		  	$('.menu-open, .nav-container').removeClass('active');
		});
		
		/* 7. Drop-down menu */
		$('.dropdown-open').on("click",function(){
		    $(this).find('.dropdown').addClass('active');
		    $('.nav-link').addClass('done');
		    $('.dropdown-close').addClass('active');
		});
		
		$('.dropdown-close').on("click",function(){    
		    $('.dropdown').removeClass('active');
		    $('.nav-link').removeClass('done');
		    $('.dropdown-close').removeClass('active');
		});
	
	});
		
	/* 8. Change menu background */
	$(document).on('mouseover', '.nav-bg-change', function(){		
		$(this).addClass('active').siblings().removeClass('active')
	});
	
	/* 9. ScrollAnimations */
	var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
	$containers.scrollAnimations();
	
	/* 10. Headroom */
	$(".fixed-header").headroom();
	
	/* 11. Magnific popup */
	$('.photo-popup').magnificPopup({
	  	type: 'image',
	  	mainClass: 'mfp-with-zoom', // this class is for CSS animation below
	  	gallery: {
	    	// options for gallery
	    	enabled: true
	  	},
	  	zoom: {
	    	enabled: true, // By default it's false, so don't forget to enable it
			duration: 800, // duration of the effect, in milliseconds
			easing: 'cubic-bezier(.858, .01, .068, .99)', // CSS transition easing function
			// The "opener" function should return the element from which popup will be zoomed in
			// and to which popup will be scaled down
			// By defailt it looks for an image tag:
			opener: function(openerElement) {
	      		// openerElement is the element on which popup was initialized, in this case its <a> tag
		  		// you don't need to add "opener" option if this code matches your needs, it's defailt one.
		  		return openerElement.is('img') ? openerElement : openerElement.find('img');
	    	}
	  	}
	});
	
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false
	});
	
	/* 12. Scroll to id */
	$('.to-top-btn, .scroll-btn').mPageScroll2id();
	
	/* 13. Touch, no touch */
	var supports = (function() {
	    var d = document.documentElement,
	        c = "ontouchstart" in window || navigator.msMaxTouchPoints;
	    if (c) {
	        d.className += " touch";
	        return {
	            touch: true
	        }
	    } else {
	        d.className += " no-touch";
	        return {
	            touch: false
	        }
	    }
	})();
	
	/* 14. fixed footer */
	$('footer').footerReveal({ 
		shadow: false,
		zIndex : 1
	});
	
	/* 15. Progress bar */
	$(".progress-zero").each(function(){
		$(this).find(".progress-full").animate({
			width: $(this).attr("data-progress")
  		});
	});

	/* 16. Contact form */
	$('.js-popup-close').on('click', function() {
		$(this).parents('.js-popup-fade').removeClass("js-active");
		$('.form-box').removeClass("js-active");
		return false;
	});

	$(document).on('keydown', function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.js-popup-fade').removeClass("js-active");
			$('.form-box').removeClass("js-active");
		}
	});

	$(document).on('click', '.js-popup-fade', function(e) {
		if ($(e.target).closest('.js-popup').length == 0) {
			$('.js-popup-fade').removeClass("js-active");
			$('.form-box').removeClass("js-active");
		}
	});

	$("#send_form").on('submit', function(){
		var first_name = $("#first_name").val().trim();
		var last_name = $("#last_name").val().trim();
		var email = $("#email").val().trim();
		var message = $("#message").val().trim();

		$.ajax({
			url: 'assets/ajax/mail.php',
			type: 'POST',
			cache: false,
			data: {'first_name': first_name, 'last_name': last_name, 'email': email, 'message': message},
			dataType: 'html',
			beforeSend: function() {
				$("#send").addClass("js-active");
			},
			success: function(data) {
				if(!data || data != "Good"){
					$("#m_err").addClass("js-active");
					$(".form-box").addClass("js-active");
					setTimeout(function () {
						$("#send").removeClass("js-active");
					}, 2000);
				} else {
					$("#m_sent").addClass("js-active");
					$(".form-box").addClass("js-active");
					setTimeout(function () {
						$("#send").removeClass("js-active");
						$("#send_form").trigger("reset");
						$('.email-label').removeClass("js-active");
					}, 2000);
				}
			},
		})
		return false;
	});

	$('#email').on('keyup',function(){
		var $this = $(this),
			val = $this.val();

		if(val.length >= 1){
			$('.email-label').addClass("js-active");
		}
		else {
			$('.email-label').removeClass("js-active");
		}
	});

	$('.copyright-year').text(new Date().getFullYear());

});
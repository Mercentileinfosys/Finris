(function ($) {
	"use strict";






	if ($(".tabs-box").length) {
		$(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
			e.preventDefault();
			var target = $($(this).attr("data-tab"));

			if ($(target).is(":visible")) {
				return false;
			} else {
				target
					.parents(".tabs-box")
					.find(".tab-buttons")
					.find(".tab-btn")
					.removeClass("active-btn");
				$(this).addClass("active-btn");
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.fadeOut(0);
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.removeClass("active-tab");
				$(target).fadeIn(300);
				$(target).addClass("active-tab");
			}
		});
	}




	//Testimonial Two Carousel
	if ($(".inner-pages__carousel").length) {
		$(".inner-pages__carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 7000,
			navText: [
				'<span class="icon-left-arrow"></span>',
				'<span class="icon-right-arrow"></span>',
			],
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				992: {
					items: 3,
				},
				1200: {
					items: 3,
				},
			},
		});
	}



	if ($(".wow").length) {
		var wow = new WOW({
			boxClass: "wow", // animated element css class (default is wow)
			animateClass: "animated", // animation css class (default is animated)
			mobile: true, // trigger animations on mobile devices (default is true)
			live: true, // act on asynchronously loaded content (default is true)
		});
		wow.init();
	}





	if ($(".marquee_mode").length) {
		$('.marquee_mode').marquee({
			speed: 50,
			gap: 0,
			delayBeforeStart: 0,
			direction: 'left',
			duplicated: true,
			pauseOnHover: true,
			startVisible: true,
		});
	}

	if ($(".marquee_mode-two").length) {
		$('.marquee_mode-two').marquee({
			speed: 50,
			gap: 0,
			delayBeforeStart: 0,
			direction: 'right',
			duplicated: true,
			pauseOnHover: true,
			startVisible: true,
		});
	}




	// Type Effect
	if ($('.typed-effect').length) {
		$('.typed-effect').each(function () {
			var typedStrings = $(this).data('strings');
			var typedTag = $(this).attr('id');
			var typed = new Typed('#' + typedTag, {
				typeSpeed: 100,
				backSpeed: 100,
				fadeOut: true,
				loop: true,
				strings: typedStrings.split(',')
			});
		});

	}







})(jQuery);
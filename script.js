
(function($) { "use strict";
	//About
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	//Contact
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	//portfolio
	$(".concert").on('click', function () {
		$("body").addClass("concert-on");
	});
	$(".concert-close").on('click', function () {
		$("body").removeClass("concert-on");
	});

})(jQuery);

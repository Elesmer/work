jQuery(document).ready(function() {

	/* Main carousel */

	var owl = $('.main-owl-carousel');

	$('.main-owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		// autoplay: true,
		autoplayTimeout: 3300,
		autoplayHoverPause: true,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})

	// add animate.css class(es) to the elements to be animated
	function setAnimation(_elem, _InOut) {
		// Store all animationend event name in a string.
		// cf animate.css documentation
		var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		_elem.each(function() {
			var $elem = $(this);
			var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

			$elem.addClass($animationType).one(animationEndEvent, function() {
				$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
			});
		});
	}

	// Fired before current slide change
	owl.on('change.owl.carousel', function(event) {
		var $currentItem = $('.owl-item', owl).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-out]");
		setAnimation($elemsToanim, 'out');
	});

	// Fired after current slide has been changed
	owl.on('changed.owl.carousel', function(event) {

		var $currentItem = $('.owl-item', owl).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-in]");
		setAnimation($elemsToanim, 'in');
	})

	// Main carousel custom navigation

	var navigation_buttons = owl;
	navigation_buttons.owlCarousel();
	// Next slide button
	$('.main-carousel__svg-wrapper--right').click(function() {
		navigation_buttons.trigger('next.owl.carousel');
	})
	// Prev slide button
	$('.main-carousel__svg-wrapper--left').click(function() {
		navigation_buttons.trigger('prev.owl.carousel', [300]);
	})

	/* Wow */

	new WOW().init();

	/* Phone input mask */

	$(".phone").mask("+380 999 999 999");

	/* Scroll */

	$('a[href*=#]').bind("click", function(e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});
	return false;

});

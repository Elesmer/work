jQuery(document).ready(function() {

	/* Tabs */

		$('#tabs-swipe-demo').tabs();

	/* Mobile */

	$('.button-collapse').sideNav({
		menuWidth: 300, // Default is 300
		edge: 'right', // Choose the horizontal origin
		closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: true, // Choose whether you can drag to open on touch screens,
		onOpen: function(el) {}
	});

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

});

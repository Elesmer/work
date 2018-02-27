jQuery(document).ready(function() {

	/* Hide */

	$("#error-close-1").click(function(){ // class of the button div
			$(".error--1").hide(); // class/id/classes which will hide
			return false;
	});

	$("#error-close-2").click(function(){ // class of the button div
			$(".error--2").hide(); // class/id/classes which will hide
			return false;
	});

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

	/* Wow */

	new WOW().init();

	/* Dropdown */

	var $container = $('.dropdown-menu'),
		$list = $('.dropdown-menu ul'),
		listItem = $list.find('li');

	$(".dropdown .title").click(function() {
		if($container.height() > 0) {
			closeMenu(this);
		} else {
			openMenu(this);
		}
	});

	$(".dropdown-menu li").click(function() {
		closeMenu(this);
	});

	function closeMenu(el) {
		$(el).closest('.dropdown').toggleClass("closed").find(".title").text($(el).text());
		$container.css("height", 0);
		$list.css("top", 0);
	}

	function openMenu(el) {
		$(el).parent().toggleClass("closed");

		$container.css({
			height: 200
		})
	}

});

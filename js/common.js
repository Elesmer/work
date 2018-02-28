jQuery(document).ready(function() {

			/* Select */

			$('select').material_select();

			/* Hide */

			$("#error-close-1").click(function() { // class of the button div
				$(".error--1").hide(); // class/id/classes which will hide
				return false;
			});

			$("#error-close-2").click(function() { // class of the button div
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

});

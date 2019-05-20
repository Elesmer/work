var $ = jQuery;
$(document).ready(function() {

	var param1 = {
		center: true,
		loop: true,
		margin: 0,
		dots: true,
		nav: false,
		items: 1,
		responsive: {
			0: {
				items: 1,
				touchDrag: false
			},
			600: {
				items: 1,
				touchDrag: false
			},
			1000: {
				items: 1
			}
		}
	};

      // Custom nav

      var equip_c2 = $('.equip-carousel--1');
		equip_c2.owlCarousel(param1);
      $('.equip-left-nav').click(function () {
        equip_c2.trigger('prev.owl.carousel');
      });
      $('.equip-right-nav').click(function () {
        equip_c2.trigger('next.owl.carousel', [300]); // в квадратных скобках скорость переключения
      });

      // Second equip owlCarousel


	var param2 = {
		center: true,
		loop: true,
		margin: 0,
		dots: true,
		nav: false,
		items: 1,
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
	};

	//console.log("s");

      var equip_c = $('.equip-carousel--2');
		equip_c.owlCarousel(param2);
      $('.equip-left-nav2').click(function () {
        equip_c.trigger('prev.owl.carousel');
      });
      $('.equip-right-nav2').click(function () {
        equip_c.trigger('next.owl.carousel', [300]); // в квадратных скобках скорость переключения
      });

});

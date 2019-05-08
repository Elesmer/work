$(document).ready(function() {

  //Full page scroll

  $(".main").onepage_scroll({
    sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000, // AnimationTime let you define how long each section takes to animate
    pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {}, // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {}, // This option accepts a callback function. The function will be called after the page moves.
    loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true, // You can activate the keyboard controls
    responsiveFallback: 1200,
    direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
  });

  // Header carousel

  $('.header-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
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

  // Equip carousel

  var firstEquipCarousel = $('.equip-carousel--1').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    lazyLoad: true,
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

  // Custom nav

  var equip_c2 = $('.equip-carousel--1');
  equip_c2.owlCarousel();
  $('.equip-left-nav').click(function() {
    equip_c2.trigger('prev.owl.carousel');
  })
  $('.equip-right-nav').click(function() {
    equip_c2.trigger('next.owl.carousel', [300]); // в квадратных скобках скорость переключения
  })

  // Second equip owlCarousel

  $('.equip-carousel--2').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    lazyLoad: true,
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

  var equip_c = $('.equip-carousel--2');
  equip_c.owlCarousel();
  $('.equip-left-nav2').click(function() {
    equip_c.trigger('prev.owl.carousel');
  })
  $('.equip-right-nav2').click(function() {
    equip_c.trigger('next.owl.carousel', [300]); // в квадратных скобках скорость переключения
  })

  // Phone mask

  $(".phone-input").inputmask("+(380) 999-99-99-99");

  // Popular carousel

  $('.popular-carousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 4
      }
    }
  })

  // Custom nav for popular carousel

  var popular_c = $('.popular-carousel');
  popular_c.owlCarousel();
  $('.equip-left-nav--popular').click(function() {
    popular_c.trigger('prev.owl.carousel');
  })
  $('.equip-right-nav--popular').click(function() {
    popular_c.trigger('next.owl.carousel', [300]); // в квадратных скобках скорость переключения
  })

  // Smoth scroll

  // $(document).on('click', 'a[href^="#"]', function (event) {
  //     event.preventDefault();
  //
  //     $('html, body').animate({
  //         scrollTop: $($.attr(this, 'href')).offset().top
  //     }, 500);
  // });

});

// Custom select`

new SlimSelect({
  select: '#slim-select',
  valuesUseText: false,
  data: [{
      innerHTML: '<i class="fab fa-facebook-f"></i>',
      text: 'Facebook'
    },
    {
      innerHTML: '<i class="fab fa-vk"></i>',
      text: 'Vk'
    }
  ]
})

/* To top button */

var offset = 300,
  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offset_opacity = 1200,
  //duration of the top scrolling animation (in ms)
  scroll_top_duration = 700,
  //grab the "back to top" link
  $back_to_top = $('.js-back-to-top');

//hide or show the "back to top" link
$(window).scroll(function() {
  ($(this).scrollTop() > offset) ? $back_to_top.addClass('back-to-top-is-visible'): $back_to_top.removeClass('back-to-top-is-visible back-to-top-fade-out');
  if ($(this).scrollTop() > offset_opacity) {
    $back_to_top.addClass('back-to-top-fade-out');
  }
});

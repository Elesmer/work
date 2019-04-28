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
    responsiveFallback: 600,
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
        items: 3
      },
      1000: {
        items: 1
      }
    }
  })

  // Equip carousel

  $('.equip-carousel').owlCarousel({
    loop: true,
    margin: 0,
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

  // Custom nav

  var equip_c = $('.equip-carousel');
  equip_c.owlCarousel();
  $('.equip-left-nav').click(function() {
    equip_c.trigger('next.owl.carousel');
  })
  $('.equip-right-nav').click(function() {
    equip_c.trigger('prev.owl.carousel', [300]); // в квадратных скобках скорость переключения
  })

});

// Resize sticky header
$(window).scroll(function() {
  if ($(this).scrollTop() > 250) {
    $('header').addClass("sticky");
  } else {
    $('header').removeClass("sticky");
  }
});

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

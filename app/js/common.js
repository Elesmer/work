jQuery(document).ready(function($) {

  // About us carousel init


  $('.about-us__carousel').owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: false,
    autoplay: true
  });


  // About us carousel nav

  var aboutUsCarouselNav = $('.about-us__carousel');
  aboutUsCarouselNav.owlCarousel();
  $('.about-us__next').click(function() {
    aboutUsCarouselNav.trigger('next.owl.carousel');
  })
  $('.about-us__prev').click(function() {
    aboutUsCarouselNav.trigger('prev.owl.carousel', [300]);
  })
});

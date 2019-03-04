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

  // Orders tabs init

  $('.order__tabs').tabs({
    // swipeable: true
  });

  // News carousel init

  $('.news__carousel').owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: false
    // autoplay: true
  });

  // News carousel navigation

  var newsCraouselNav = $('.news__carousel');
  newsCraouselNav.owlCarousel();
  $('.news__next').click(function() {
    newsCraouselNav.trigger('next.owl.carousel');
  })
  $('.news__prev').click(function() {
    newsCraouselNav.trigger('prev.owl.carousel', [300]);
  })
});

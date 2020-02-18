// Brand logo animation
anime({
  targets: [
    '#logo_pixel_three'
  ],
  delay: 50,
  translateX: -1.5,
  fill: ['#fff', '#121212'],
  direction: 'alternate',
  duration: 300,
  loop: 1,
  opacity: 1
});
anime({
  targets: [
    '#logo_pixel_two'
  ],
  delay: 1000,
  fill: ['#fff', '#ff4d4d'],
  direction: 'alternate',
  duration: 100,
  loop: 1,
  opacity: 1
});
anime({
  targets: [
    '#logo_pixel_one'
  ],
  delay: 1000,
  fill: ['#fff', '121212'],
  direction: 'alternate',
  translateX: 1,
  duration: 100,
  loop: 1,
  opacity: 1
});

// TweenMax scroll block animations start

let controller = new ScrollMagic.Controller({
    vertical: true,
    addIndicators: true
});

// Info section animations

let sceneInfo = new ScrollMagic.Scene({
  triggerElement: "#js-info-trigger"
})
.on("enter", function () {

  // Info bg text
  anime({
    targets: '.bg-text--info',
    delay: 800,
    duration: 600,
    opacity: [0, 1],
    easing: 'easeInCubic',
  });

  // Info section lines
  anime({
    delay: 0,
    duration: 2000,
    easing: 'easeInOutQuad',
    height: ['0%', '100%'],
    targets: '.background-lines--info .background__line',
  });

  // Info sub title
  anime({
    delay: 1000,
    duration: 1200,
    easing: 'easeInOutQuad',
    translateY: [0, -10],
    opacity: [0, 1],
    targets: '.sub-title--services',
  });

  // Info title
  anime({
    delay: 1500,
    duration: 1200,
    easing: 'easeInOutQuad',
    translateY: [0, -10],
    opacity: [0, 1],
    targets: '.main-title--services',
  });

  // Bullits

  anime({
    delay: 2000,
    duration: 1000,
    targets: '.info__bullits .info__bullit:nth-child(1)',
    translateY: [0, -15],
    opacity: [0, 1],
    scale: [0.9, 1],
    easing: 'easeInOutQuad',
  })

  anime({
    delay: 2200,
    duration: 1500,
    targets: '.info__bullits .info__bullit:nth-child(2)',
      translateY: [0, -15],
    opacity: [0, 1],
    scale: [0.9, 1],
    easing: 'easeInOutQuad',
  })

  anime({
    delay: 2400,
    duration: 1500,
    targets: '.info__bullits .info__bullit:nth-child(3)',
    translateY: [0, -15],
    opacity: [0, 1],
    scale: [0.9, 1],
    easing: 'easeInOutQuad',
  })

})
.addTo(controller);

// Contacts section

let sceneContacts = new ScrollMagic.Scene({
  triggerElement: "#js-contacts-trigger",
  triggerHook: '0',
  duration: 0
})
.on("enter", function () {

  // Header logo color change
  anime({
    delay: 0,
    duration: 0,
    easing: 'easeInOutQuad',
    fill: ['rgba(0,0,0,0)', '#fff'],
    targets: '.header__logo-img .b',
  });

  // Add active class for nav element
  headerNav.classList.remove('active');
})
.on("leave", function () {
  anime({
    delay: 0,
    duration: 0,
    easing: 'easeInOutQuad',
    fill: ['rgba(0,0,0,0)', '#121212'],
    targets: '.header__logo-img .b',
  });

  // Add active class for nav element
  headerNav.classList.add('active');
})
.addTo(controller);

let contactsSceneTrigger = new ScrollMagic.Scene({
  triggerElement: "#js-contacts-trigger"
})
.on("enter", function () {

  // Contacts bg text
  anime({
    targets: '.bg-text--contacts',
    delay: 800,
    duration: 600,
    opacity: 1,
    easing: 'easeInCubic',
  });

  // Contacts title
  anime({
    delay: 300,
    duration: 1200,
    easing: 'easeInOutQuad',
    translateY: -10,
    opacity: 1,
    targets: '.main-title--contacts',
  });

  // Contacts subtitle
  anime({
    delay: 100,
    duration: 1200,
    easing: 'easeInOutQuad',
    translateY: -10,
    opacity: 1,
    targets: '.sub-title--contacts',
  });

  // Contacts form wrapper
  anime({
    delay: 1000,
    duration: 1200,
    easing: 'easeInOutQuad',
    translateY: -10,
    opacity: 1,
    targets: '.contact__wrapper .contact-form',
  });

  // Contacts presentation wrapper
  anime({
    delay: 1300,
    duration: 1200,
    easing: 'easeInOutQuad',
    translateY: -10,
    opacity: 1,
    targets: '.contact__wrapper .contact-presentation',
  });
})
.on("leave", function () {
  // Contacts bg text
  anime({
    targets: '.bg-text--contacts',
    duration: 800,
    opacity: 0,
    easing: 'easeInCubic',
  });

  // Contacts subtitle
  anime({
    duration: 800,
    translateY: 0,
    opacity: 0,
    easing: 'easeInOutQuad',
    targets: '.sub-title--contacts',
  });

  // Contacts title
  anime({
    duration: 800,
    delay: 200,
    translateY: 0,
    easing: 'easeInOutQuad',
    opacity: 0,
    targets: '.main-title--contacts',
  });

  // Contacts form wrapper
  anime({
    duration: 800,
    delay: 200,
    easing: 'easeInOutQuad',
    translateY: 0,
    opacity: 0,
    targets: '.contact__wrapper .contact-form',
  });

  // Contacts presentation wrapper
  anime({
    duration: 800,
    delay: 200,
    easing: 'easeInOutQuad',
    translateY: 0,
    opacity: 0,
    targets: '.contact__wrapper .contact-presentation',
  });
})
.addTo(controller);

// TweenMax scroll block animations end

// Back to home section

$("#js-homeLink").click(function() {
  $.scrollify.move("#home");
});

// Slogan definition
$('.verity__slogan').text('perfection.')

// Second block shapes animation

let options = {
  shapeColors: ['#ff4d4d','#333', '#ccc'],
  shapeTypes: ['rect','polygon', 'circle'],
  totalShapes: 1
}

let text = document.getElementById('text')
const word = new Word(text, options);

// Second block shapes animation end

// Header navigation element detection
let headerNav = document.querySelector(".header__nav")
// Header logo element detection
let headerLogo = document.querySelector(".header__logo")

$(document).ready(function() {

  // Full screen scroll init

  $.scrollify({
    section: ".section",
    overflowScroll: true,
    setHeights: false,
    before: function(index, section) {
      if (index == 0) {

        // Header logo animation
        anime({
          targets: '.header__logo',
          opacity: 0,
          easing: 'easeInOutQuad',
          duration: 100
        });

        // Remove active class for nav element
        headerNav.classList.remove('active');

        // Verity title text change start

        setTimeout(() => {
          $('.verity__slogan').text('perfection.')
        },300)

        // Verity title text change END

      } else if (index == 1) {

        // Verity about us button
        anime({
          targets: '#js-home-about-us-link',
          opacity: '1',
          easing: 'easeInOutSine',
          duration: 200,
          delay: 1200
        });

        // Header logo animation
        anime({
          targets: '.header__logo',
          opacity: '1',
          scale: 1.03,
          easing: 'easeInOutQuad',
          duration: 200,
          delay: 700
        });

        anime({
          delay: 100,
          duration: 400,
          easing: 'easeInOutQuad',
          fill: ['rgba(0,0,0,0)', '#fff'],
          targets: '.header__logo-img .b',
        });

        anime({
          delay: 200,
          duration: 400,
          easing: 'easeInOutQuad',
          opacity: 1,
          targets: '.header__logo-img .word',
        });

        // Back button animation
        anime({
          targets: '.skip-back__container--back',
          translateY: '-100',
          easing: 'easeInOutQuad',
          duration: 700
        });

        // Skip button animation
        anime({
          targets: '.skip-back__container--skip',
          translateY: '30',
          translateX: '-50%',
          easing: 'easeInOutQuad',
          duration: 700
        });

        // Verity section central line shadow add
        anime({
          targets: '.background__line--central',
          boxShadow: '0px 0px 15px 10px rgba(0,0,0,0.75)',
          scale: 1.03,
          easing: 'easeInOutQuad',
          duration: 700,
          delay: 1000
        });
        // Remove active class for nav element
        headerNav.classList.remove('active');

        // Animation for verity section
        word.show({
          lettersAnimationOpts: {
            duration: 500,
            delay: (t,i) => i*60,
            easing: 'easeOutExpo',
            opacity: {
              value: [0,1],
              duration: 50,
              delay: (t,i) => i*60,
              easing: 'linear'
            },
            translateY: (t,i) => i%2 ? [anime.random(-350,-300),0] : [anime.random(300,350),0]
          },
          shapesAnimationOpts: {
            duration: 2000,
            easing: 'easeOutElastic',
            translateY: t => {
              const ty = anime.random(-200, 100);
              t.dataset.ty = ty;
              return [anime.random(-25,25),ty];
            },
            scale: t => {
              const s = randomBetween(1.5,2);
              t.dataset.s = s;
              return [s,s];
            },
            rotate: () => anime.random(-45,45),
            opacity: {
              value: [0,0.9],
              duration: 600,
              delay: 300,
              easing: 'linear'
            }
          }
        });

        // Verity title text change start

        setTimeout(() => {
          const title = document.querySelector('.verity__slogan');
          $('.verity__slogan').text('precision.')
          charming(title);
          animateTitles();
        },1300)

        setTimeout(() => {
          const title = document.querySelector('.verity__slogan');
          $('.verity__slogan').text('pixels.')
          charming(title);
          animateTitles();
        },2300)

        // Verity title text change END

      } else if (index == 2) {

        // Header logo animation
        anime({
          targets: '.header__logo',
          opacity: '1',
          scale: 1.03,
          easing: 'easeInOutQuad',
          duration: 200,
          delay: 300
        });

        anime({
          targets: '.header__logo-img .word',
          delay: 300,
          duration: 200,
          easing: 'easeInOutQuad',
          opacity: 0,
        });

        anime({
          targets: '.header__logo-img .b',
          delay: 300,
          duration: 200,
          easing: 'easeInOutQuad',
          fill: ['#fff', '#121212'],
        });

        // Back button animation
        anime({
          targets: '.skip-back__container--back',
          translateY: '10',
          translateX: '-35%',
          easing: 'easeInOutQuad',
          duration: 700
        });

        // Skip button animation
        anime({
          targets: '.skip-back__container--skip',
          translateY: '100',
          translateX: '-50%',
          easing: 'easeInOutQuad',
          duration: 700
        });

        // Remove active class for nav element
        headerNav.classList.add('active');

        // Animation for verity section
        word.hide({
          lettersAnimationOpts: {
            duration: () => anime.random(800,1000),
            opacity: 0,
          },
          shapesAnimationOpts: {
            duration: () => anime.random(800,1000),
            opacity: {
              value: 0,
              duration: 200,
              easing: 'linear'
            }
          }
        });
        $.scrollify.disable();

        // Back to home section

        $("#js-homeLink").click(function() {
          $.scrollify.enable();
          $.scrollify.move("#home");
        });

        // Verity title text change start

        setTimeout(() => {
          $('.verity__slogan').text('perfection.')
        },300)

        // Verity title text change END
      }
    }
  });

  // Glich effect for verity section start

  const getRandomNumber = (min, max) => (Math.random() * (max - min) + min);

  animateTitles();

  function animateTitles() {
    const title = document.querySelector('.verity__slogan');
    charming(title);
    const titleLetters = Array.from(title.querySelectorAll('span'));

    const glitch = (el,cycles) => {
      if ( cycles === 0 || cycles > 3 ) return;
      TweenMax.set(el, {
        x: getRandomNumber(-20,20),
        y: getRandomNumber(-20,20),
        color: ['#121212','#333', '#ccc'][cycles-1]
      });
      setTimeout(() => {
        TweenMax.set(el, {x: 0, y: 0, color: '#fff'});
        glitch(el, cycles-1);
      }, getRandomNumber(20,100));
    };

    const loop = (startAt) => {
      this.timeout = setTimeout(() => {
          const titleLettersShuffled = titleLetters.sort((a,b) => 0.5 - Math.random());
          const lettersSet = titleLettersShuffled.slice(0, getRandomNumber(1,titleLetters.length+1));
          for (let i = 0, len = lettersSet.length; i < len-1; ++i) {
            glitch(lettersSet[i], 3);
          }
          loop();
      }, startAt || getRandomNumber(500, 3000));
    }
    loop(1500);
  }

  // Glich effect for verity section END

  // Back to second section button

  $("#js-toSecond").click(function() {
    $.scrollify.enable();
    $.scrollify.previous();
  });

  // To third section button

  $("#js-toThird").click(function() {
    $.scrollify.next();
    $.scrollify.disable();
  });

});

/* Figures animation */

function fitElementToParent(el, padding) {
  let timeout = null;

  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, {
      scale: 1
    });
    let pad = padding || 0;
    let parentEl = el.parentNode;
    let elOffsetWidth = el.offsetWidth - pad;
    let parentOffsetWidth = parentEl.offsetWidth;
    let ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, {
      scale: ratio
    }), 10);
  }
  resize();
  window.addEventListener('resize', resize);
}

let layeredAnimation = (function() {

  let transformEls = document.querySelectorAll('.transform-progress');
  let layeredAnimationEl = document.querySelector('.layered-animations');
  let shapeEls = layeredAnimationEl.querySelectorAll('.shape');
  let triangleEl = layeredAnimationEl.querySelector('polygon');
  let trianglePoints = triangleEl.getAttribute('points').split(' ');
  let easings = ['easeInOutQuad', 'easeInOutCirc', 'easeInOutSine', 'spring'];

  fitElementToParent(layeredAnimationEl);

  function createKeyframes(value) {
    let keyframes = [];
    for (let i = 0; i < 30; i++) keyframes.push({
      value: value
    });
    return keyframes;
  }

  function animateShape(el) {

    let circleEl = el.querySelector('circle');
    let rectEl = el.querySelector('rect');
    let polyEl = el.querySelector('polygon');

    let animation = anime.timeline({
        targets: el,
        duration: function() {
          return anime.random(600, 2200);
        },
        easing: function() {
          return easings[anime.random(0, easings.length - 1)];
        },
        complete: function(anim) {
          animateShape(anim.animatables[0].target);
        },
      })
      .add({
        translateX: createKeyframes(function(el) {
          return el.classList.contains('large') ? anime.random(-300, 300) : anime.random(-520, 520);
        }),
        translateY: createKeyframes(function(el) {
          return el.classList.contains('large') ? anime.random(-110, 110) : anime.random(-280, 280);
        }),
        rotate: createKeyframes(function() {
          return anime.random(-180, 180);
        }),
      }, 0);
    if (circleEl) {
      animation.add({
        targets: circleEl,
        r: createKeyframes(function() {
          return anime.random(32, 72);
        }),
      }, 0);
    }
    if (rectEl) {
      animation.add({
        targets: rectEl,
        width: createKeyframes(function() {
          return anime.random(64, 120);
        }),
        height: createKeyframes(function() {
          return anime.random(64, 120);
        }),
      }, 0);
    }
    if (polyEl) {
      animation.add({
        targets: polyEl,
        points: createKeyframes(function() {
          let scale = anime.random(72, 180) / 100;
          return trianglePoints.map(function(p) {
            return p * scale;
          }).join(' ');
        }),
      }, 0);
    }

  }

  for (let i = 0; i < shapeEls.length; i++) {
    animateShape(shapeEls[i]);
  }

})();

// End Figures animation

// Menu and logo animation

// $(window).scroll(function() {
//   if ($(this).scrollTop() > 250) {
//     $('header').addClass("sticky");
//   } else {
//     $('header').removeClass("sticky");
//   }
// });

// End menu and logo animation

/* To top button */

let offset = 300,
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

/* End to top button */

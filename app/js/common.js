/* Preloader scripts */

/* Preloader start */

let preloadScripts = false,
    preloadImages = false;

let
  scripts = document.images
  scripts_total_count = scripts.length
  scrips_loaded_count = 0,
  perc_display = document.getElementById('js-progressbar')
  preloaderBlock = document.getElementById('js-preloader')

for (let i = 0; i < scripts_total_count; i++) {
  script_clone = new Image();
  script_clone.onload = script_loaded;
  script_clone.onerror = script_loaded;
  script_clone.src = scripts[i].src;
};

function script_loaded() {
  scrips_loaded_count++;

  perc_display.style.width = (((100 / scripts_total_count) * scrips_loaded_count) << 0).toString() + '%';

  preloadImages = true;
}

// If we not have images

if (scrips_loaded_count <= 0) {
  perc_display.style.width = '50%'
  preloadImages = true;
}

document.body.onload = function() {
  preloadScripts = true;

  // Check if all images and scripts were loaded
  if (preloadScripts == true && preloadImages == true) {
    anime({
      targets: '#js-progress',
      easing: 'easeInOutQuart',
      delay: 0,
      duration: 0,
      opacity: 0,
    });
    anime({
      targets: [
        '#js-progress-svg .polymorph',
        '#js-progress-svg .polymorph2',
      ],
      easing: 'easeInOutQuart',
      duration: 0,
      opacity: 1,
    });
    let morphing = anime({
      targets: '#js-progress-svg .polymorph',
      d: [{
          value: 'M74 1H76'
        },
        {
          value: 'M75 57L75 59'
        },
        {
          value: 'M75 57L75 92'
        },
      ],
      easing: 'easeInOutQuart',
      delay: 300,
      duration: 2500,
    });
    let morphing2 = anime({
      targets: '#js-progress-svg .polymorph2',
      d: [{
          value: 'M74 1L76 1'
        },
        {
          value: 'M75 57L75 59'
        },
        {
          value: 'M75 57L75 92'
        },
      ],
      easing: 'easeInOutQuart',
      delay: 300,
      duration: 2500,
    });

    setTimeout(
      function() {
        preloaderBlock.classList.add('done')
      }, 3000
    );
  }
}

/* End preloader scripts */

// Brand shapes animation mobile

if ($(window).width() < 960) {

  function randomValues() {
    anime({
      targets: '.mobile__shape--squere-small',
      width: function() {
        return anime.random(50, 100);
      },
      height: function() {
        return anime.random(50, 150);
      },
      rotate: function() {
        return anime.random(-180, 180);
      },
      easing: 'easeInOutQuad',
      duration: 2500,
      complete: randomValues
    });
  }
  randomValues();

  function randomValues2() {
    anime({
      targets: '.mobile__shape--circle',
      width: function() {
        return anime.random(50, 120);
      },
      translateX: function() {
        return anime.random(50, 100);
      },
      rotate: function() {
        return anime.random(50, -180);
      },
      easing: 'easeInOutQuad',
      duration: 2000,
      complete: randomValues2
    });
  }
  randomValues2();

  function randomValues3() {
    anime({
      targets: '.mobile__shape--squere-big',
      width: function() {
        return anime.random(50, 120);
      },
      translateX: function() {
        return anime.random(50, 100);
      },
      rotate: function() {
        return anime.random(50, 180);
      },
      easing: 'easeInOutQuad',
      duration: 1500,
      complete: randomValues3
    });
  }
  randomValues3();

  function randomValues4() {
    anime({
      targets: '.mobile__shape--triangle-big',
      width: function() {
        return anime.random(50, 150);
      },
      translateX: function() {
        return anime.random(50, -100);
      },
      translateY: function() {
        return anime.random(-50, 100);
      },
      rotate: function() {
        return anime.random(-50, 50);
      },
      easing: 'easeInOutQuad',
      duration: 2000,
      complete: randomValues4
    });
  }
  randomValues4();

  function randomValues5() {
    anime({
      targets: '.mobile__shape--triangle-small',
      width: function() {
        return anime.random(10, 30);
      },
      translateX: function() {
        return anime.random(50, -100);
      },
      translateY: function() {
        return anime.random(-50, 100);
      },
      easing: 'easeInOutQuad',
      duration: 2000,
      complete: randomValues5
    });
  }
  randomValues5();
}

// TODO: logo animation if need, if not - delete it
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
  // addIndicators: true
});

// Check if it home page
if (document.title == 'Home') {

  // If mobile
  if ($(window).width() < 1200) {
    // Mobile logo trigger
    let sceneLogoMobile = new ScrollMagic.Scene({
        triggerElement: "#js-mobile-logo-trigger",
        triggerHook: '0',
        duration: 0
      })
      .on("enter", function() {
        // Header logo animation
        anime({
          targets: '.header__logo',
          opacity: '1',
          scale: 1.03,
          easing: 'easeInOutQuad',
          duration: 200,
          delay: 200
        });

      })
      .on("leave", function() {
        // Header logo animation
        anime({
          targets: '.header__logo',
          opacity: '0',
          scale: 1.03,
          easing: 'easeInOutQuad',
          duration: 200,
          delay: 200
        });
      })
      .addTo(controller);

    // Mobile info trigger
    let sceneInfoMobile = new ScrollMagic.Scene({
        triggerElement: "#js-info-trigger",
        triggerHook: '0',
        duration: 0
      })
      .on("enter", function() {

        // Add active class for nav element
        headerNav.classList.add('active');

        // Add active class for logo element
        headerLogo.classList.add('active');

        // Header logo color change
        anime({
          delay: 0,
          duration: 0,
          easing: 'easeInOutQuad',
          fill: ['rgba(0,0,0,0)', '#121212'],
          targets: '.header__logo-img .b',
        });

        // Header logo words opacity
        anime({
          delay: 0,
          duration: 0,
          easing: 'easeInOutQuad',
          opacity: 0,
          targets: '.header__logo-img .a',
        });

      })
      .on("leave", function() {

        // Add active class for nav element
        headerNav.classList.remove('active');

        // Add active class for logo element
        headerLogo.classList.remove('active');

        // Header logo color change
        anime({
          delay: 0,
          duration: 0,
          easing: 'easeInOutQuad',
          fill: ['rgba(0,0,0,0)', '#fff'],
          targets: '.header__logo-img .b',
        });

        // Header logo words opacity
        anime({
          delay: 0,
          duration: 0,
          easing: 'easeInOutQuad',
          opacity: 1,
          targets: '.header__logo-img .a',
        });

      }).addTo(controller);
  }

  // Info section animations

  let sceneInfo = new ScrollMagic.Scene({
      triggerElement: "#js-info-trigger"
    })
    .on("enter", function() {

      // Info slider
      anime({
        delay: 1000,
        duration: 1200,
        easing: 'easeInOutQuad',
        translateY: -10,
        opacity: 1,
        targets: '.info__mobile-slider',
      });

      // Info bg text
      anime({
        targets: '.bg-text--info',
        delay: 800,
        duration: 600,
        opacity: 1,
        easing: 'easeInCubic',
      });

      // Info section lines
      anime({
        delay: 0,
        duration: 2000,
        easing: 'easeInOutQuad',
        height: '100%',
        targets: '.background-lines--info .background__line',
      });

      // Info sub title
      anime({
        delay: 1000,
        duration: 1200,
        easing: 'easeInOutQuad',
        translateY: -10,
        opacity: 1,
        targets: '.sub-title--services',
      });

      // Info title
      anime({
        delay: 1500,
        duration: 1200,
        easing: 'easeInOutQuad',
        translateY: -10,
        opacity: 1,
        targets: '.main-title--services',
      });

      // Bullits

      anime({
        delay: 2000,
        duration: 1000,
        targets: '.info__bullits .info__bullit:nth-child(1)',
        translateY: -15,
        opacity: 1,
        scale: 1,
        easing: 'easeInOutQuad',
      })

      anime({
        delay: 2200,
        duration: 1500,
        targets: '.info__bullits .info__bullit:nth-child(2)',
        translateY: -15,
        opacity: 1,
        scale: 1,
        easing: 'easeInOutQuad',
      })

      anime({
        delay: 2400,
        duration: 1500,
        targets: '.info__bullits .info__bullit:nth-child(3)',
        translateY: -15,
        opacity: 1,
        scale: 1,
        easing: 'easeInOutQuad',
      })

      // Why bg text
      anime({
        targets: '.bg-text--why',
        delay: 1800,
        duration: 600,
        opacity: [0, 1],
        easing: 'easeInCubic',
      });

      // Why title
      anime({
        targets: '.main-title--why',
        delay: 2400,
        duration: 1200,
        easing: 'easeInOutQuad',
        translateY: -10,
        opacity: 1,
      });

      // Why subtitle
      anime({
        targets: '.sub-title--why',
        delay: 2200,
        duration: 1200,
        easing: 'easeInOutQuad',
        translateY: -10,
        opacity: 1,
      });

      // Why paragraph, subtitle
      anime({
        targets: ['.why-important__h3', '.why-important__p'],
        delay: 2600,
        duration: 1200,
        easing: 'easeInOutQuad',
        translateY: -10,
        opacity: 1,
      });

    })
    .addTo(controller);

  // Contacts section

  let sceneContacts = new ScrollMagic.Scene({
      triggerElement: "#js-contacts-trigger",
      triggerHook: '0',
      duration: 0
    })
    .on("enter", function() {

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
    .on("leave", function() {
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
    .on("enter", function() {

      // Contacts Socials
      anime({
        targets: '.contact__social-list',
        delay: 1700,
        duration: 600,
        opacity: 1,
        easing: 'easeInCubic',
      });

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
    .addTo(controller);

  // TweenMax scroll block animations end

  // Back to home section

  $("#js-homeLink").click(function() {
    $.scrollify.move("#home");
  });

  // Scroll brand link

  $('#js-scroll-trigger').click(function() {
    $.scrollify.next();
  });

  // Scroll disable
  $('#js-home-about-us-link').click(function() {
    $.scrollify.disable();
  });

  // Scroll enable
  $('#js-home-about-us-close').click(function() {
    $.scrollify.enable();
  });

  if ($(window).width() > 1200) {
    // Scroll disable
    $('#js-offcanvas-scroll-off').click(function() {
      $.scrollify.disable();
    });

    $('#offcanvas-reveal').click(function() {
      $.scrollify.enable();
    });

    // Scroll enable
    $('#js-offcanvas-scroll-enable').click(function() {
      $.scrollify.enable();
    });
  }

  // Slogan definition
  $('.verity__slogan').text('perfection.')

  // Second block shapes animation

  let options = {
    shapeColors: ['#ff4d4d', '#333', '#ccc'],
    shapeTypes: ['rect', 'polygon', 'circle'],
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

    if ($(window).width() > 1200) {

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

            // Remove active class for logo element
            headerLogo.classList.remove('active');

            // Verity title text change start

            setTimeout(() => {
              $('.verity__slogan').text('perfection.')
            }, 300)

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

            // Remove active class for logo element
            headerLogo.classList.remove('active');

            // Animation for verity section
            word.show({
              lettersAnimationOpts: {
                duration: 500,
                delay: (t, i) => i * 60,
                easing: 'easeOutExpo',
                opacity: {
                  value: [0, 1],
                  duration: 50,
                  delay: (t, i) => i * 60,
                  easing: 'linear'
                },
                translateY: (t, i) => i % 2 ? [anime.random(-350, -300), 0] : [anime.random(300, 350), 0]
              },
              shapesAnimationOpts: {
                duration: 2000,
                easing: 'easeOutElastic',
                translateY: t => {
                  const ty = anime.random(-200, 100);
                  t.dataset.ty = ty;
                  return [anime.random(-25, 25), ty];
                },
                scale: t => {
                  const s = randomBetween(1.5, 2);
                  t.dataset.s = s;
                  return [s, s];
                },
                rotate: () => anime.random(-45, 45),
                opacity: {
                  value: [0, 0.9],
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
            }, 1800)

            setTimeout(() => {
              const title = document.querySelector('.verity__slogan');
              $('.verity__slogan').text('pixels.')
              charming(title);
              animateTitles();
            }, 3200)

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

            // Add active class for nav element
            headerNav.classList.add('active');

            // Add active class for logo element

            function addActiveLogo() {
              headerLogo.classList.add('active');
            }
            setTimeout(addActiveLogo, 1000);

            // Animation for verity section
            word.hide({
              lettersAnimationOpts: {
                duration: () => anime.random(800, 1000),
                opacity: 0,
              },
              shapesAnimationOpts: {
                duration: () => anime.random(800, 1000),
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
            }, 300)

            // Verity title text change END
          }
        }
      });

    }

    // Glich effect for verity section start

    const getRandomNumber = (min, max) => (Math.random() * (max - min) + min);

    animateTitles();

    function animateTitles() {
      const title = document.querySelector('.verity__slogan');
      charming(title);
      const titleLetters = Array.from(title.querySelectorAll('span'));

      const glitch = (el, cycles) => {
        if (cycles === 0 || cycles > 3) return;
        TweenMax.set(el, {
          x: getRandomNumber(-20, 20),
          y: getRandomNumber(-20, 20),
          color: ['#121212', '#333', '#ccc'][cycles - 1]
        });
        setTimeout(() => {
          TweenMax.set(el, {
            x: 0,
            y: 0,
            color: '#fff'
          });
          glitch(el, cycles - 1);
        }, getRandomNumber(20, 100));
      };

      const loop = (startAt) => {
        this.timeout = setTimeout(() => {
          const titleLettersShuffled = titleLetters.sort((a, b) => 0.5 - Math.random());
          const lettersSet = titleLettersShuffled.slice(0, getRandomNumber(1, titleLetters.length + 1));
          for (let i = 0, len = lettersSet.length; i < len - 1; ++i) {
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
    var timeout = null;
    function resize() {
      if (timeout) clearTimeout(timeout);
      anime.set(el, {scale: 1});
      var pad = padding || 0;
      var parentEl = el.parentNode;
      var elOffsetWidth = el.offsetWidth - pad;
      var parentOffsetWidth = parentEl.offsetWidth;
      var ratio = parentOffsetWidth / elOffsetWidth;
      timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
    }
    resize();
    window.addEventListener('resize', resize);
  }

  var layeredAnimation = (function() {

    var transformEls = document.querySelectorAll('.transform-progress');
    var layeredAnimationEl = document.querySelector('.layered-animations');
    var shapeEls = layeredAnimationEl.querySelectorAll('.shape');
    var triangleEl = layeredAnimationEl.querySelector('polygon');
    var trianglePoints = triangleEl.getAttribute('points').split(' ');
    var easings = ['easeInOutQuad', 'easeInOutCirc', 'easeInOutSine', 'spring'];

    fitElementToParent(layeredAnimationEl);

    function createKeyframes(value) {
      var keyframes = [];
      for (var i = 0; i < 30; i++) keyframes.push({ value: value });
      return keyframes;
    }

    function animateShape(el) {

      var circleEl = el.querySelector('circle');
      var rectEl = el.querySelector('rect');
      var polyEl = el.querySelector('polygon');

      var animation = anime.timeline({
        targets: el,
        duration: function() { return anime.random(600, 2200); },
        easing: function() { return easings[anime.random(0, easings.length - 1)]; },
        complete: function(anim) { animateShape(anim.animatables[0].target); },
      })
      .add({
        translateX: createKeyframes(function(el) {
          return el.classList.contains('large') ? anime.random(-300, 300) : anime.random(-520, 520);
        }),
        translateY: createKeyframes(function(el) {
          return el.classList.contains('large') ? anime.random(-110, 110) : anime.random(-280, 280);
        }),
        rotate: createKeyframes(function() { return anime.random(-180, 180); }),
      }, 0);
      if (circleEl) {
        animation.add({
          targets: circleEl,
          r: createKeyframes(function() { return anime.random(32, 72); }),
        }, 0);
      }
      if (rectEl) {
        animation.add({
          targets: rectEl,
          width: createKeyframes(function() { return anime.random(64, 120); }),
          height: createKeyframes(function() { return anime.random(64, 120); }),
        }, 0);
      }
      if (polyEl) {
        animation.add({
          targets: polyEl,
          points: createKeyframes(function() {
            var scale = anime.random(72, 180) / 100;
            return trianglePoints.map(function(p) { return p * scale; }).join(' ');
          }),
        }, 0);
      }

    }

    for (var i = 0; i < shapeEls.length; i++) {
      animateShape(shapeEls[i]);
    }

  })();

} // If page title is 'Home' end

if (document.title == 'Contacts') {

  $("body").mousemove(function(e) {
    parallaxIt(e, ".contacts__bg-img");
  });

  function parallaxIt(e, target) {

    let mouseX = e.pageX;
    let mouseY = e.pageY;
    var xPos = (mouseX / window.innerWidth) - 0.5;
    var yPos = (mouseY / window.innerHeight) - 0.5;
    var rotationYValue = 8 * -xPos;
    var rotationXValue = 8 * yPos;

    TweenMax.to(target, 0.6, {
      transform: 'rotateY(' + rotationYValue + 'deg ) rotateX(' + rotationXValue + 'deg ) translateZ(-15vw) scale(1.4)',
    });
  }

}

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

// Lists counter

function countItems(countContainer, countItem) {
  $(countContainer).each(function() {
    $(countItem, this).each(function(i) {
      $(this).text('0' + (i + 1))
    })
  })
}

// Slider bullits count
if ($(window).width() < 960) {
  countItems('.info__mobile-slider .uk-slider-items', '.info__bullit .info__small');
}
// Bullits count
countItems('.info__bullits', '.info__bullit .info__small');

// Bullit


// Add close effect for menu items

// $(".uk-offcanvas-bar .uk-list li").children().addClass('uk-offcanvas-close');

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

/* Preloader */

let preloadScripts = false,
    preloadImages = false;

let
  scripts = document.images
  scripts_total_count = scripts.length
  scrips_loaded_count = 0,
  perc_display = document.getElementById('js-progressbar')
  preloaderBlock = document.getElementById('js-preloader')

for(let i = 0; i < scripts_total_count; i++) {
  script_clone = new Image();
  script_clone.onload = script_loaded;
  script_clone.onerror = script_loaded;
  script_clone.src = scripts[i].src;
};

function script_loaded() {
  scrips_loaded_count++;

  perc_display.style.width = (( (100 / scripts_total_count) * scrips_loaded_count ) << 0).toString() + '%';

  preloadImages = true;
}

// If we not have images

if (scrips_loaded_count <= 0) {
  perc_display.style.width = '50%'
  preloadImages = true;
}

document.body.onload = function () {
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
      function(){
        preloaderBlock.classList.add('done')
      }, 3000
    );
  }
}

// End preloader

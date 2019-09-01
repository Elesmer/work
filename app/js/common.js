$(document).ready(function() {

  jQuery("#form_send").submit(function() {
    jQuery.ajax({
      type: "POST",
      url: "/handler",
      cache: false,
    }).fail(function() {
      UIkit.notification({
        message: '<i class="far fa-frown"></i><p>something wrong!</p>',
        status: 'primary',
        pos: 'top-right',
        timeout: 5000
      })
    }).done(function(res) {
      jQuery('#form_send')[0].reset();
      $("#successBlock").addClass("success-block--done");
    });
    return false;
  });

});

// Phone input mask

Inputmask({
  "mask": "(999)999-999-99",
   showMaskOnFocus: true,
   showMaskOnHover: false,
}).mask("#phone");

// Wow init
new WOW().init();

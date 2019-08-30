$(document).ready(function() {

  jQuery("#form_send").submit(function() {
    jQuery.ajax({
      type: "POST",f
      url: "/wp-content/themes/form/sendEmail.php",
      data: jQuery(this).serialize(),
      success: function(res) {
        jQuery('#form_send')[0].reset();
        $("#successBlock").addClass("success-block--done");
      },
      error:
        UIkit.notification({
          message: '<i class="far fa-frown"></i><p>something wrong!</p>',
          status: 'primary',
          pos: 'top-right',
          timeout: 50000
        }),
    }).done(function() {});
    return false;
  });
});

// // Resize sticky header
// $(window).scroll(function() {
//   if ($(this).scrollTop() > 250) {
//     $('header').addClass("sticky");
//   } else {
//     $('header').removeClass("sticky");
//   }
// });

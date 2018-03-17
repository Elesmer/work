jQuery(document).ready(function() {

	$('.parallax').parallax();

  viewGraph();

	new WOW().init();

});

function viewGraph() {
  $(".column").css("height", "13px");
  $("table tr").each(function(index) {
    var ha = $(this)
    .children("td")
    .eq(1)
    .text();
    $("#col" + index)
      .animate({ height: ha }, 1500)
      .html("<div>" + ha + "</div>");
  });
}

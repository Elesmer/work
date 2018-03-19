jQuery(document).ready(function() {

	//parallax

	$('.parallax').parallax();

	viewGraph();

	new WOW().init();

	$("a.chart__a--ancor").click(function() {
		 $("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top + "px"
		 }, {
				duration: 500,
				easing: "swing"
		 });
		 return false;
	});

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
};

$(document).ready(function() {
  $(".tablesorter").tablesorter();
  $(".tablesorterpager").tablesorter().tablesorterPager({positionFixed: false, container: $("#pager"), cssNext: ".icon-forward", cssPrev: ".icon-backward", cssFirst: ".icon-fast-backward", cssLast: ".icon-fast-forward"});
  $(".tab_content").hide(); //Hide all content
  //$("ul.tabs li:first").addClass("active").show(); //Activate first tab
  $(".tab_content:first").show(); //Show first tab content
  $("ul.tabs li").click(function() {
    $("ul.tabs li").removeClass("active"); //Remove any "active" class
    $(this).addClass("active"); //Add "active" class to selected tab
    $(".tab_content").hide(); //Hide all tab content
    var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
    $(activeTab).fadeIn(); //Fade in the active ID content
    $(activeTab).find('.visualize').trigger('visualizeRefresh');
    return false;
  });

  var visualizeList = [];

  $('table.visualize').each(function () {
	visualizeList.push($(this));
  });

  function initVisualize() {
    var $target = visualizeList.shift();

    if (!$target){
		return;
    }

    if ($target.attr('rel')) {
      var statsType = $target.attr('rel');
    } else {
      var statsType = 'area';
    }

    // hack to statically set width as something is broken with div width calculation - anni
    var chart_width = $(document).width() - 720;

    if (statsType == 'line' || statsType == 'pie') {
      $target.hide().visualize({
        type: statsType,
        // 'bar', 'area', 'pie', 'line'
        width: chart_width,
        height: '240px',
        colors: ['#6fb9e8', '#ec8526', '#9dc453', '#ddd74c'],
        lineDots: 'double',
        interaction: true,
        multiHover: 5,
        tooltip: true,
        tooltiphtml: function (data) {
          var html = '';
          for (var i = 0; i < data.point.length; i++) {
            html += '<p class="chart_tooltip"><strong>' + data.point[i].value + '</strong> ' + data.point[i].yLabels[0] + '</p>';
          }
          return html;
        }
      });
    } else {
      $target.hide().visualize({
        // 'bar', 'area', 'pie', 'line'
        width: chart_width,
        type: statsType,
		height: '70px',
        colors: ['#6fb9e8', '#ec8526', '#9dc453', '#ddd74c'],
		appendTitle:false,
		appendKey:false
      });
    }

	if (visualizeList.length) {
		setTimeout(initVisualize, 200);
	}
  }

  if (visualizeList.length) {
	initVisualize();
  }

  var algoSelected;

  $('#algoList > tbody > tr').click(function() {
      // check if already selected.

      if(algoSelected) {
        if ($(this).hasClass('selected_row')){
          // selected again.
          $(this).removeClass('selected_row');
          $('#coinList > tbody > tr').show();
          algoSelected = null;

          return;
        }
        else {
          // selected different algo.
          $('#algoList > tbody > tr').each(function() {
            $(this).removeClass('selected_row');
          });
          $('#coinList > tbody > tr').show();
        }
      }

      $(this).addClass('selected_row');
      algoSelected = $(this).find("td").eq(0).text();

      $('#coinList > tbody > tr').each(function() {
        if ($(this).find("td").eq(1).text() != algoSelected){
          $(this).hide();
        }
      });
  });


});

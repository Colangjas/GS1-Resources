// Match row of DIVs to same height. Use DIVs with a classname starting with "matchRow" (matchRow1, matchRow2 etc...) One class for each row of items. This script will match all with that same row number to be of equal height to the highest.
// replaces "/scripts/tools/matchRowHeights.js"

$(function(){

	if ($(window).width() > 768) {
		var uniqueMatchRowClasses = [];
		$("[class*='matchRow']").each(function (){
			uniqueMatchRowClasses.push(this.className);
		});

		for (i = 0; i < uniqueMatchRowClasses.length; i++) {
			var elements = document.getElementsByClassName(uniqueMatchRowClasses[i]);
			var elementHeights = Array.prototype.map.call(elements, function(el)  {
				return el.clientHeight;
			});
			var maxHeight = Math.max.apply(null, elementHeights);
			Array.prototype.forEach.call(elements, function(el) {
				el.style.height = maxHeight + "px";
			});
		};
	}
	else {}



	$(window).resize(function() {
		if ($(window).width() > 768) {
			var uniqueMatchRowClasses = [];
			$("[class*='matchRow']").each(function (){
				uniqueMatchRowClasses.push(this.className);
			});

			for (i = 0; i < uniqueMatchRowClasses.length; i++) {
				var elements = document.getElementsByClassName(uniqueMatchRowClasses[i]);
				var elementHeights = Array.prototype.map.call(elements, function(el) {
					return el.clientHeight;
				});
				var maxHeight = Math.max.apply(null, elementHeights);
				Array.prototype.forEach.call(elements, function(el) {
					el.style.height = maxHeight + "px";
				});
			};
		}
		else {}
	});
});


//Cache reference to window and animation items
// .animation-elements will be applied to any elements to animate
var $animation_elements = $('.revealOnScroll');
var $window = $(window);

//The dollar sign in front of the variables is a convention to indicate that they hold a jQuery object, or collection of objects.

// Event handler to listen to scroll and resizing events
$window.on('scroll resize', check_if_in_view);

// detection function called initially when the DOM is ready and then every time we resize or scroll. 
function check_if_in_view() {
  // current height and top and bottom position of window to get the area we are looking at
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    // For each of these elements we collect its height and top and bottom position so we know where it is on the page
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('popOver1');
    $element.addClass('popOver2');
    $element.addClass('popOver3');
    $element.addClass('popOver4');
  } else {
    $element.removeClass('popOver1');
  }
});
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
/* Use the jQuery trigger method to trigger a scroll event as soon as the DOM is ready. If any of the elements which should be animated are within the viewport, they will be detected as in view and the animation applied as if we had scrolled. */



$(function($) {



  $("#card1").flip({trigger: 'hover'});
  $("#card2").flip({trigger: 'hover'});
  $("#card3").flip({trigger: 'hover'});
  $("#card4").flip({trigger: 'hover'});
  $("#card5").flip({trigger: 'hover'});
  $("#card6").flip({trigger: 'hover'});
  $("#card7").flip({trigger: 'hover'});
  $("#card8").flip({trigger: 'hover'});
  $("#card9").flip({trigger: 'hover'});

  $('#card1').tap(function(e) { 
    $("#card1").flip('toggle');
  });

  $('#card2').tap(function(e) { 
    $("#card2").flip('toggle');
  });

  $('#card3').tap(function(e) { 
    $("#card3").flip('toggle');
  });
  $('#card4').tap(function(e) { 
    $("#card4").flip('toggle');
  });
  $('#card5').tap(function(e) { 
    $("#card5").flip('toggle');
  });

  $('#card6').tap(function(e) { 
    $("#card6").flip('toggle');
  });

  $('#card7').tap(function(e) { 
    $("#card7").flip('toggle');
  });
  $('#card8').tap(function(e) { 
    $("#card8").flip('toggle');
  });
  $('#card9').tap(function(e) { 
    $("#card9").flip('toggle');
  });

  // $window.on('scroll', revealOnScroll);

});
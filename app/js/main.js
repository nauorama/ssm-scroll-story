window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

/*
    * Replace all SVG images with inline SVG
    */
$("img.editable").each(function () {
    var $img = $(this);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");

    $.get(
        imgURL,
        function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find("svg");

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr("xmlns:a");

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if (!$svg.attr("viewBox") &&
            $svg.attr("height") &&
            $svg.attr("width")
        ) {
            $svg.attr(
            "viewBox",
            "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
            );
        }

        // Replace image with new SVG
        $img.replaceWith($svg);
        },
        "xml"
    );
    });


$('#tablet').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $('#tablet').addClass('in');
        } else if (direction === 'up') {
            $('#tablet').removeClass('in');
        }
    },
    offset: 'bottom-in-view'
});

$('#stopTablet').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            var tabletTop = $('#stopTablet').offset().top - $('#tablet').parents('.section').innerHeight() -$('#tablet').innerHeight();
        
            $('#tablet').removeClass('in');
            $('#tablet').css({'top': tabletTop});
            $('#stopTablet').addClass('end');
        } else if (direction === 'up') {
            $('#tablet').addClass('in');
            $('#tablet').css({'top': 'auto'});
            $('#stopTablet').removeClass('end');
        }
    },
    offset: 'bottom-in-view'
});
    
$('.slide4').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $('.slide4').addClass('in');
            $('.tablet-slides-inner').css('margin-left', 0);
        } else if (direction === 'up') {
            $('.slide4').removeClass('in');
        }
    }
});

$('.slide5').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $('.slide5').addClass('in');
            $('.slide4').removeClass('in');
            $('.tablet-slides-inner').css('margin-left', '-100%');
        } else if (direction === 'up') {
            $('.slide4').addClass('in');
            $('.slide5').removeClass('in');
            $('.tablet-slides-inner').css('margin-left', '0');
        }
    }
});

$('.slide6').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $('.slide6').addClass('in');

            $('.slide5').removeClass('in');
            $('.tablet-slides-inner').css('margin-left', '-200%');
        } else if (direction === 'up') {
            $('.slide5').addClass('in');
            $('.slide6').removeClass('in');
            $('.tablet-slides-inner').css('margin-left', '-100%');
        }
    },
    offset: '20%'
});


$('.slide8').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $('.slide8').addClass('in');
        } else if (direction === 'up') {
            $('.slide8').removeClass('in');
        }
    }
});


$('.slide8').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $('.slide8').addClass('end');
        } else if (direction === 'up') {
            $('.slide8').removeClass('end');
        }
    },
    offset: 'bottom-in-view'
});

$('.slide9').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $('.slide9').addClass('in');
            $('.slide8').removeClass('in');
        } else if (direction === 'up') {
            $('.slide9').removeClass('in');
            $('.slide8').addClass('in');
        }
    }
});

var $animation_elements = $('.slide9');
var $window = $(window);
var lastPos = 0;

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    console.log(window_top_position + ' ' + element_bottom_position)
    if ((window_top_position >= element_top_position) && (window_top_position < element_bottom_position)) {
        lastPos = lastPos + 6;
      $('.ufo2-trash1,.ufo2-trash2, .ufo2-trash3,.ufo2-trash4,.ufo2-trash5').css('transform', 'translate3d(0,-' + lastPos + 'px,0)');
  console.log('+')
    } else {
        lastPos = 0;
        console.log('-')
        $('.ufo2-trash1,.ufo2-trash2, .ufo2-trash3,.ufo2-trash4,.ufo2-trash5').css('transform', 'translate3d(0,0,0)');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


$('.slide10').waypoint({
    handler: function(direction) {
        if (direction === 'down') {
            $('.slide10').addClass('in');
            $('.slide9').removeClass('in');
        } else if (direction === 'up') {
            $('.slide10').removeClass('in');
            $('.slide9').addClass('in');
        }
    }
});
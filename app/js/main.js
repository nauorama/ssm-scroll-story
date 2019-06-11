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


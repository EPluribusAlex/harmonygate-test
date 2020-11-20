$(function () {	

	let menuOpen = false;

	$("#navbutton").click(function() {

		if(!menuOpen) {

			$({brightness: 1}).animate({brightness: 0.2}, {
	      duration: 300,
	      easing: 'swing',
	      step: function() {
	        $("main").css({
            "-webkit-filter": "brightness("+this.brightness+")",
            "filter": "brightness("+this.brightness+")"
          });
	      }
	    });

			$("nav").animate({"top": 0}, 300);
			menuOpen = true;

		} else {

			$({brightness: 0.2}).animate({brightness: 1}, {
	      duration: 300,
	      easing: 'swing',
	      step: function() {
	        $("main").css({
            "-webkit-filter": "brightness("+this.brightness+")",
            "filter": "brightness("+this.brightness+")"
          });
	      }
	    });

			$("nav").animate({"top": "-66vh"}, 300);
			menuOpen = false;
		}
	});

	let textchanged = false;

	$("#changing-textbox").text("In the Chinese medical classics, the human being is considered to be a microcosm of the external environment; hence we have within our biorhythmic time clock energetic changes throughout each day as well as throughout every season of the year . Just as the external environment requires a balance of nature in order to avoid catastrophe,...");

	$("#img-select").click(function() {
		
		if(!textchanged) {
			$("#forward-arrow").fadeOut(function() {
				$("#back-arrow").fadeIn();
			});
			$("#changing-textbox").fadeOut(function() {
				$("#changing-textbox").text("...so also does the human body require balance in order to avoid or minimize disease. Five Element Acupuncture addresses disease and illness by way of recreating the natural balance among and between the elements within the human being as represented by associations with each organ system on a body/mind/spirit level.");
				$("#changing-textbox").fadeIn();
			});
			
			textchanged = true;
		} else {
			$("#back-arrow").fadeOut(function() {
				$("#forward-arrow").fadeIn();
			});
			$("#changing-textbox").fadeOut(function() {
				$("#changing-textbox").text("In the Chinese medical classics, the human being is considered to be a microcosm of the external environment; hence we have within our biorhythmic time clock energetic changes throughout each day as well as throughout every season of the year . Just as the external environment requires a balance of nature in order to avoid catastrophe,...");
				$("#changing-textbox").fadeIn();
			});
			textchanged = false;
		}

	});
});
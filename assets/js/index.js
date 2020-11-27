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

			$("nav").animate({"top": "-86vh"}, 300);
			menuOpen = false;
		}
	});

	let expanded = false;

	$("#expanding-textbox").click(function() {
		
		if(!expanded) {
			$("main > .grid-2").height("auto");
			$("#expanding-textbox").animate({height: "350px"});
	    $("html, body").animate({
	      scrollTop: $("#expanding-textbox").offset().top - 50
	    	}, 1600);
			expanded = true;
		} else {
			$("main > .grid-2").height("");
			$("#expanding-textbox").animate({height: "140px"});
			expanded = false;
		}

	});

});
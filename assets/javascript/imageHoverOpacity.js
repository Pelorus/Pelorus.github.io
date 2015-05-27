jQuery(document).ready(function() {
    var duration = 300;
    $( ".team-member" ).hover(
	  function() {
	  	$(this).children('.team-member-name').slideDown();
	    $(this).children("img.propic").animate({
	    	opacity: 1
	    }, duration);
	  }, function() {
	  	$(this).children('.team-member-name').slideUp();
	    $(this).children("img.propic").animate({
	    	opacity: .75
	    }, duration);
	  }
	);
});
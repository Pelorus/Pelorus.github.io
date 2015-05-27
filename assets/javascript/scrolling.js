jQuery(document).ready(function() {
    var offset = 75;
    var duration = 300;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#top-link').fadeIn(duration);
        } else {
            jQuery('#top-link').fadeOut(duration);
        }
    });
});
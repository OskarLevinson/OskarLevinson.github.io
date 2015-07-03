$(function() {
    //caches a jQuery object containing the header element
    var body = $("body");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 70) {
            body.addClass("scrolled");
        } else {
            body.removeClass("scrolled");
        }
    });
});
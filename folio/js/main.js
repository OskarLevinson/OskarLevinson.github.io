$(function() {
    //caches a jQuery object containing the header element
    var body = $("body");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 70) {
            $('header').addClass("small");
        } else {
            $('header').removeClass("small");
        }
        if (scroll >= 450) {
            $('.row').addClass("dark");
        } else {
            $('.row').removeClass("dark");
        }
            if (scroll >= 500) {
            $('.row').addClass("light");
        } else {
            $('.row').removeClass("light");
        }
    });
});
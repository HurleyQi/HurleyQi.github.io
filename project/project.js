$(document).ready(function() {
    var menu = $(".menu_bar");
    var menuOffset = menu.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() >= menuOffset) {
            menu.addClass("fixed");
        } else {
            menu.removeClass("fixed");
        }
    });
});
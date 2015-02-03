(function(){
    "use strict";

    var $win, $header;
    var date = new Date();
    var year = date.getFullYear();

    $("#copyright").text(year);
    $(".navbar-nav a").smoothScroll();
    $(".footer-menu a").smoothScroll();

    $win = $(window);
    $header = $('#header')
    $win.on('scroll', function() {
        if ($win.scrollTop() > 280) {
            $header.addClass('navbar-fixed-top');
        } else {
            $header.removeClass('navbar-fixed-top');
        }
    })

}).call(this);
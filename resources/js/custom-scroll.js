$(document).ready(function () {

    $('a[href^="#"]').on('click', function () {
        var target = this.hash;
        var t = $(this.hash).offset().top;
        $('html, body').stop().animate({
            scrollTop: t
        }, 2000, function () {
            window.location.hash = target;
        });
    });
});

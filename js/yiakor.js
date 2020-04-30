$(document).ready(function () {
    $(".nav-cont").click(function () {
        $('html, body').animate({
            scrollTop: $(".maps-footer").offset().top
        }, 1000);
    });
});
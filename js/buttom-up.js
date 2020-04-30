let but = $("#button");

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        but.addClass("show");
    } else {
        but.removeClass("show");
    }
});
but.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
});


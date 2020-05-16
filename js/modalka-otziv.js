let btn0 = document.querySelector("#otziv"),
    btn1 = document.querySelector("#otziv1"),
    btnNext = document.querySelector("#next"),
    btnNext1 = document.querySelector("#next1"),
    btnNext2 = document.querySelector("#next2"),
    modal0 = document.querySelector("#modal0"),
    modal1 = document.querySelector("#modal1"),
    modal2 = document.querySelector("#modal2"),
    modal3 = document.querySelector("#modal3"),
    span0 = document.querySelector("#close0"),
    span1 = document.querySelector("#close1"),
    span2 = document.querySelector("#close2"),
    span3 = document.querySelector("#close3");




btn0.addEventListener("click", function () {
    modal0.style.display = "block";
});

btn1.addEventListener("click", function () {
    modal0.style.display = "block";
});

btnNext.addEventListener("click", function () {
    modal0.style.display = "none";
    modal1.style.display = "block";
});

btnNext1.addEventListener("click", function () {
    modal1.style.display = "none";
    modal2.style.display = "block";
});


btnNext2.addEventListener("click", function () {
    modal2.style.display = "none";
    modal3.style.display = "block";
});




window.onclick = function (event) {
    if (event.target == modal0 || event.target == modal1 || event.target == modal2 || event.target == modal3) {
        modal0.style.display = "none";
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
    };
};



$(this).keydown(function (event) {
    if (event.which == 27)
        $('#modal0').hide();
    $('#modal1').hide();
    $('#modal2').hide();
    $('#modal3').hide();
});








span0.addEventListener("click", function () {
    modal0.style.display = "none";
});

span1.addEventListener("click", function () {
    modal1.style.display = "none";
});

span2.addEventListener("click", function () {
    modal2.style.display = "none";
});

span3.addEventListener("click", function () {
    modal3.style.display = "none";
});

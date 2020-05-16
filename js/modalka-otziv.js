let btn = document.querySelector("#otziv"),
    btn1 = document.querySelector("#otziv1"),
    btnNext = document.querySelector("#next"),
    btnNext1 = document.querySelector("#next1"),
    btnNext2 = document.querySelector("#next2"),
    modal = document.querySelector("#modal0"),
    modal1 = document.querySelector("#modal1"),
    modal2 = document.querySelector("#modal2"),
    modal3 = document.querySelector("#modal3"),
    span = document.querySelector("#close0"),
    span1 = document.querySelector("#close1"),
    span2 = document.querySelector("#close2"),
    span3 = document.querySelector("#close3");

btn.addEventListener("click", function () {
    modal.style.display = "block";
});

btn1.addEventListener("click", function () {
    modal.style.display = "block";
});

btnNext.addEventListener("click", function () {
    modal.style.display = "none";
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



span.addEventListener("click", function () {
    modal.style.display = "none";
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

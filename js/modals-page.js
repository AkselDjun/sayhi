let modal = document.querySelector(".myModal");
let btn = document.querySelector("#myBtn");
let span = document.getElementsByClassName("close");

btn.onclick = function () {
    modal.style.display = "block";
};
span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    };
};
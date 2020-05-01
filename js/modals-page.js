const modal = document.querySelector(".myModal"),
    btn = document.querySelectorAll("#myBtn"),
    span = document.getElementsByClassName("close")[0];



for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        modal.style.display = "block";
        
    };
};
span.addEventListener("click", function () {
    modal.style.display = "none";
});

document.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    };
};


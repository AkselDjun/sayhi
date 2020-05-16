let modalPage = document.querySelector(".myModal"),
    btn = document.querySelectorAll("#myBtn"),
    span = document.getElementsByClassName("close")[0];



for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        modalPage.style.display = "block";
    };
};
span.addEventListener("click", function () {
    modalPage.style.display = "none";
});

document.onclick = function (event) {
    if (event.target == modal) {
        modalPage.style.display = "none";
    };
};

$(this).keydown(function (modalPage) {
    if (modalPage.which == 27)
        $('.myModal').hide();
});
let navbar = document.querySelector(".nav");
let burgerMenu = document.querySelector(".burger-menu");

document.querySelector(".burger-menu").onclick = () => {
    navbar.classList.toggle("active");
    burgerMenu.classList.toggle("active");
};

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");
var previewImg = document.getElementById("previewImg");

function stopVideo() {
    videoPlayer.style.display = "none";
    previewImg.style.display = "block";
}

function playVideo(file) {
    myVideo.src = file;
    videoPlayer.style.display = "block";
    previewImg.style.display = "none";
}

var swiper = new Swiper(".myswiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true
});

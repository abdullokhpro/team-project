let menu = document.querySelector(".header__hamburger");
let header = document.querySelector(".header");
let navBar = document.querySelector(".header__list");
let Close = document.querySelector(".header__item--close");
let backTop = document.querySelector(".back-top");

window.addEventListener("scroll", function () {
    showBackTop();
    showHeaderShrink();
});

menu.addEventListener("click", function () {
    navBar.classList.toggle("header__show__list")
})
Close.addEventListener("click", function () {
    navBar.classList.remove("header__show__list")
})

function showBackTop() {
    if (scrollY > 100) {
        backTop.classList.add("show__back-top");
    } else {
        backTop.classList.remove("show__back-top");
    }
}
function showHeaderShrink() {
    if (scrollY > 0) {
        header.classList.add("show__header__shrink");
    } else {
        header.classList.remove("show__header__shrink");
    }
}
$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHover: true,
            responsive: {
                0: {
                    items: 1
                },
                1150: {
                    items: 1
                }
            }
        }
    );
});


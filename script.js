const hamburguer = document.querySelector(".hamburguer");
const container = document.querySelector(".container");

hamburguer.addEventListener("click", function () {
    container.classList.toggle("show-menu");
});

/*==== TESTIMONIALS CAROUSEL SLIDER SWIPER =====*/
const swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true,
        },
    },
});

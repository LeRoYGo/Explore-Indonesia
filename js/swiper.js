var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    breakpoints: {
        1250: {
            slidesPerView: 3,
        },
        820: {
            slidesPerView: 2,
        },
    },
    direction: "horizontal",
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

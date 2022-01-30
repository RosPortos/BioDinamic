document.addEventListener('DOMContentLoaded', function () {

    const swiper = new Swiper(".promo-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 2000,
        effect: "fade",
        /* autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }, */
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".promo .swiper-button-next",
            prevEl: ".promo .swiper-button-prev",
        },
    });

});
document.addEventListener('DOMContentLoaded', function () {

    const swiper = new Swiper(".promo-swiper", {
        slidesPerView: 1,
        loop: true,
        speed: 3000,

        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".promo .swiper-button-next",
            prevEl: ".promo .swiper-button-prev",
        },
    });


    var swiper2 = new Swiper(".main-slider", {
        effect: "fade",
        speed: 1200,
        direction: "vertical",
        mousewheel: true,

        breakpoints: {
            1025: {
                allowTouchMove: false,
            }
        }
    });
});
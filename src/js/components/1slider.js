document.addEventListener('DOMContentLoaded', function () {

    const swiper = new Swiper(".promo-swiper", {
        slidesPerView: 1,
        loop: true,
        speed: 3000,
        allowTouchMove: false,

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


    const swiper2 = new Swiper(".main-slider", {
        effect: "fade",
        speed: 1200,
        direction: "vertical",
        mousewheel: true,
    });

    let menu = document.querySelector('.menu');

    swiper2.on('slideChange', function () {
        if (swiper2.activeIndex > 0) {
            menu.classList.add('color-blue');
        } else {
            menu.classList.remove('color-blue');
        }
    });


});
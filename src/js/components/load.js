
/* if (!sessionStorage.getItem("doNotShow")) {
    new Vivus('my-svg', {
        type: 'delayed',
        duration: 6000,
        animTimingFunction: Vivus.EASE_OUT,
    },
    );

    const svg = document.querySelector('.load__svg');
    const load = document.querySelector('.load');
    document.body.style.overflow = "hidden";
    svg.classList.add('animated');
    load.classList.add('show');

    setTimeout(() => {
        load.classList.remove('show');
        document.body.style.overflow = "";
    }, 7000);
} */


// if (!sessionStorage.getItem("doNotShow")) {
/* 
if ($('.page').hasClass('main-page')) {

    const load = document.querySelector('.load');
    const page = document.querySelector('.page');
    page.classList.add('hide');
    load.classList.add('show');

    setTimeout(() => {
        page.classList.remove('hide');
        load.classList.remove('show');
    }, 5000);
} */
// }

// sessionStorage.setItem("doNotShow", true);


function animPracticePage() {
    const items = document.querySelectorAll('.practice__item');
    const title = document.querySelector('.practice__title');
    const descr = document.querySelector('.practice__descr');

    if (items.length != 0) {
        setTimeout(() => {
            title.classList.add('active');
            descr.classList.add('active');

            items.forEach(item => {
                item.classList.add('active');
            });
        }, 400);
    }
}

animPracticePage();
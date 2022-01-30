
if (!sessionStorage.getItem("doNotShow")) {
    new Vivus('my-svg', {
        type: 'delayed',
        duration: 1000,
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
}

sessionStorage.setItem("doNotShow", true);

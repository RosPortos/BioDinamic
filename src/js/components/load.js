new Vivus('my-svg', {
    type: 'delayed',
    duration: 700,
    animTimingFunction: Vivus.EASE_OUT,
},
);

const svg = document.querySelector('.load__svg');
svg.classList.add('animated');

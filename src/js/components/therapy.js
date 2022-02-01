function showMoreText() {
    $('.therapy__btn').on('click', function () {
        const text = $(this).closest('.therapy__content-wrapper').children(".therapy__content-text--more");

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            text.slideUp(300);
        } else {
            $(this).addClass('active');
            text.slideDown(300);
        }
    });
}

showMoreText();

function initTherapyTabs() {
    const tabs = document.querySelectorAll('.therapy__tab');
    const tabsContent = document.querySelectorAll('.therapy__content-item');


    tabs.forEach(item => {
        item.addEventListener('click', function() {
            let current = this;

            tabs.forEach((item, i) => {
                if(item == current ) {
                    current.classList.add("active");
                    tabsContent[i].classList.add("active");
                } else {
                    item.classList.remove('active');
                    tabsContent[i].classList.remove('active');
                }
            });
        });
    });


}

initTherapyTabs();
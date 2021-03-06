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
    const tabsImg = document.querySelectorAll('.therapy__tabs-img');


    tabs.forEach(item => {
        item.addEventListener('click', function () {
            if (window.innerWidth >= 1024) {
                let current = this;

                tabs.forEach((item, i) => {
                    if (item == current) {
                        current.classList.add("active");
                        tabsContent[i].classList.add("active");
                        tabsImg[i].classList.add("active");
                    } else {
                        item.classList.remove('active');
                        tabsContent[i].classList.remove('active');
                        tabsImg[i].classList.remove('active');
                    }
                });
            }
        });
    });


}

initTherapyTabs();
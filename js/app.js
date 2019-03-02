document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector('.nav__list');
    const button = document.querySelector('.header__menu');
    const mediaQuery = window.matchMedia('(min-width: 700px)');

    const goToMobile = () => {
        button.classList.remove('hamburger-button-hidden');
        menu.classList.remove('mobile-menu-open');
    }

    const goToDesktop = () => {
        button.classList.add('hamburger-button-hidden');
        menu.classList.remove('mobile-menu-open');
    }

    button.addEventListener("click", () => {
        menu.classList.toggle('mobile-menu-open');
    })

    if (mediaQuery.matches) {
        console.log('Desktop!');
        goToDesktop();
    } else {
        console.log('Tablet!');
        goToMobile();
    }

    mediaQuery.addEventListener("change", (event) => {
        if (event.matches) {
            console.log('Desktop!');
            goToDesktop();
        } else {
            goToMobile();
            console.log('Tablet!');
        }
    })

    const prevBtnNet = document.querySelector('.project__description-net .fa-angle-left');

    const nextBtnNet = document.querySelector('.project__description-net .fa-angle-right');
    const listOfSamplesNet = document.querySelectorAll('.project__sample-net');

    let sampleIndexNet = 0;
    listOfSamplesNet[sampleIndexNet].classList.add('visible');


    nextBtnNet.addEventListener('click', () => {

        listOfSamplesBlog.forEach((e) => {
            e.classList.remove('visible')
        });
        listOfSamplesAdv.forEach((e) => {
            e.classList.remove('visible')
        });

        listOfSamplesNet[sampleIndexNet].classList.remove('visible');
        if (sampleIndexNet >= listOfSamplesNet.length - 1) {
            sampleIndexNet = 0;
        } else {
            sampleIndexNet++;
        }
        listOfSamplesNet[sampleIndexNet].classList.add('visible');
    });

    prevBtnNet.addEventListener('click', () => {

        listOfSamplesBlog.forEach((e) => {
            e.classList.remove('visible')
        });
        listOfSamplesAdv.forEach((e) => {
            e.classList.remove('visible')
        });

        listOfSamplesNet[sampleIndexNet].classList.remove('visible');
        if (sampleIndexNet <= 0) {
            sampleIndexNet = (listOfSamplesNet.length - 1);
        } else {
            sampleIndexNet--;
        }
        listOfSamplesNet[sampleIndexNet].classList.add('visible');

    });

    const prevBtnBlog = document.querySelector('.project__description-blog .fa-angle-left');

    const nextBtnBlog = document.querySelector('.project__description-blog .fa-angle-right');
    const listOfSamplesBlog = document.querySelectorAll('.project__sample-blog');


    let sampleIndexBlog = 0;


    nextBtnBlog.addEventListener('click', () => {
        listOfSamplesNet.forEach((e) => {
            e.classList.remove('visible')
        });
        listOfSamplesAdv.forEach((e) => {
            e.classList.remove('visible')
        });
        listOfSamplesBlog[sampleIndexBlog].classList.remove('visible');
        if (sampleIndexBlog >= listOfSamplesBlog.length - 1) {
            sampleIndexBlog = 0;
        } else {
            sampleIndexBlog++;
        }
        listOfSamplesBlog[sampleIndexBlog].classList.add('visible');
    });

    prevBtnBlog.addEventListener('click', () => {
        listOfSamplesNet.forEach((e) => {
            e.classList.remove('visible')
        });
        listOfSamplesAdv.forEach((e) => {
            e.classList.remove('visible')
        });
        listOfSamplesBlog[sampleIndexBlog].classList.remove('visible');
        if (sampleIndexBlog <= 0) {
            sampleIndexBlog = (listOfSamplesBlog.length - 1);
        } else {
            sampleIndexBlog--;
        }
        listOfSamplesBlog[sampleIndexBlog].classList.add('visible');
    });

    const prevBtnAdv = document.querySelector('.project__description-adv .fa-angle-left');

    const nextBtnAdv = document.querySelector('.project__description-adv .fa-angle-right');
    const listOfSamplesAdv = document.querySelectorAll('.project__sample-adv');


    let sampleIndexAdv = 0;


    nextBtnAdv.addEventListener('click', () => {
        listOfSamplesNet.forEach((e) => {
            e.classList.remove('visible')
        });
        listOfSamplesBlog.forEach((e) => {
            e.classList.remove('visible')
        });
        listOfSamplesAdv[sampleIndexAdv].classList.remove('visible');
        if (sampleIndexAdv >= listOfSamplesAdv.length - 1) {
            sampleIndexAdv = 0;
        } else {
            sampleIndexAdv++;
        }
        listOfSamplesAdv[sampleIndexAdv].classList.add('visible');
    });

    prevBtnAdv.addEventListener('click', () => {
        listOfSamplesNet.forEach((e) => {
            e.classList.remove('visible')
        });
        listOfSamplesBlog.forEach((e) => {
            e.classList.remove('visible')
        });
        listOfSamplesAdv[sampleIndexAdv].classList.remove('visible');
        if (sampleIndexAdv <= 0) {
            sampleIndexAdv = (listOfSamplesAdv.length - 1);
        } else {
            sampleIndexAdv--;
        }
        listOfSamplesAdv[sampleIndexAdv].classList.add('visible');
    });

});
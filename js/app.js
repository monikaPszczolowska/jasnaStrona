document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector('.nav__list');
    const button = document.querySelector('.header__menu');
    const mediaQuery = window.matchMedia('(min-width: 700px)');

    function goToMobile() {
        button.classList.remove('hamburger-button-hidden');
        menu.classList.remove('mobile-menu-open');
    }

    function goToDesktop() {
        button.classList.add('hamburger-button-hidden');
        menu.classList.remove('mobile-menu-open');
    }

    button.addEventListener("click", function () {
        menu.classList.toggle('mobile-menu-open');
    })

    if (mediaQuery.matches) {
        console.log('Desktop!');
        goToDesktop();
    } else {
        console.log('Tablet!');
        goToMobile();
    }

    mediaQuery.addEventListener("change", function (event) {
        if (event.matches) {
            console.log('Desktop!');
            goToDesktop();
        } else {
            goToMobile();
            console.log('Tablet!');
        }
    })

    const prevBtn = document.querySelector('.fa-angle-left');
    console.log(prevBtn)
    const nextBtn = document.querySelector('.fa-angle-right');
    const listOfSamples = document.querySelectorAll('.project__sample');
    console.log(listOfSamples)

    let sampleIndex = 0;

    listOfSamples[sampleIndex].classList.add('visible');


    nextBtn.addEventListener('click', function () {
        listOfSamples[sampleIndex].classList.remove('visible');
        if (sampleIndex >= listOfSamples.length - 1) {
            sampleIndex = 0;
        } else {
            sampleIndex++;
        }
        listOfSamples[sampleIndex].classList.add('visible');
    });

    prevBtn.addEventListener('click', function () {
        listOfSamples[sampleIndex].classList.remove('visible');
        if (sampleIndex <= 0) {
            sampleIndex = (listOfSamples.length - 1);
        } else {
            sampleIndex--;
        }
        listOfSamples[sampleIndex].classList.add('visible');
    });

});
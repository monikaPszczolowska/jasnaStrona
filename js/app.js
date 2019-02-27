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

});
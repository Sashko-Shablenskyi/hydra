'use strict'

window.addEventListener('load', windowLoaded)


function windowLoaded() {
    document.addEventListener('click', clickListener)
}

function clickListener(e) {
    const targetElement = e.target

    if (targetElement.closest('.header__burger')) {
        addClassesForMenu(targetElement)
    } else if (targetElement.closest('.nav__item')) {
        removeClassesForMenu()
    }
}

function addClassesForMenu(targetElement) {
    targetElement.closest('.header__burger').classList.toggle('burger--active')
    document.body.classList.toggle('scroll-lock')
    document.documentElement.classList.toggle('open-menu')
}

function removeClassesForMenu() {
    const burger = document.querySelector('.burger')

    burger.classList.remove('burger--active')
    document.body.classList.toggle('scroll-lock')
    document.documentElement.classList.toggle('open-menu')
}
'use strict'

window.addEventListener('load', windowLoaded)
window.addEventListener('scroll', toggleHeaderOnScroll)

function windowLoaded() {
    document.addEventListener('click', menuClickListener)

    moveButtons()
}

function menuClickListener(e) {
    const targetElement = e.target

    if (targetElement.closest('.header__burger')) {
        addClassesForMenu(targetElement)
    } else if (targetElement.closest('.nav__item')) {
        removeClassesForMenu()
    } else if (targetElement.closest('.btn')) {
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

function moveButtons() {
    const btnsContainer = document.querySelector('.header__actions')
    const newPlaceForBtns = document.querySelector('.header__nav')
    const oldPlaceForBtns = document.querySelector('.header__burger')

    if (btnsContainer) {
        const media = window.matchMedia('(max-width: 650px)')

        dynamicAdaptHeaderBtn(media, btnsContainer, newPlaceForBtns, oldPlaceForBtns)

        media.addEventListener('change', () => {
            dynamicAdaptHeaderBtn(media, btnsContainer, newPlaceForBtns, oldPlaceForBtns)
        })
    }
}

function dynamicAdaptHeaderBtn(media, btnsContainer, newPlaceForBtns, oldPlaceForBtns) {
    if (media.matches) {
        newPlaceForBtns.insertAdjacentElement('beforeend', btnsContainer)
    } else {
        oldPlaceForBtns.insertAdjacentElement('beforebegin', btnsContainer)
    }

    btnsContainer.classList.toggle('header__actions--dynamic')
    btnsContainer.classList.toggle('header__actions--loaded')
}

function toggleHeaderOnScroll() {
    const header = document.querySelector('.header')

    if (header) {
        if (window.scrollY > 80) {
            header.classList.add('header--scrolled')
        } else (
            header.classList.remove('header--scrolled')
        )
    }
}
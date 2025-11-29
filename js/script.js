'use strict'
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'

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
    document.body.classList.add('scroll-lock')
    document.documentElement.classList.add('open-menu')
}

function removeClassesForMenu() {
    const burger = document.querySelector('.burger')

    burger.classList.remove('burger--active')
    document.body.classList.remove('scroll-lock')
    document.documentElement.classList.remove('open-menu')
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

const swiperBanner = new Swiper('.banner-contacts', {
    loop: true,

    navigation: {
        nextEl: '.banner-contacts__next-btn',
        prevEl: '.banner-contacts__prev-btn',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        661: {
            slidesPerView: 2,
            spaceBetween: 30,

        },
        991.98: {
            slidesPerView: 3,
            spaceBetween: 0,
            loop: false
        }
    }
});

const swiperServices = new Swiper('.swiper-services', {
    loop: true,
    spaceBetween: 10,

    navigation: {
        nextEl: '.services__btn--next',
        prevEl: '.services__btn--prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        545: {
            spaceBetween: 10,
            slidesPerView: 2,
        },
        780: {
            slidesPerView: 3,

        },
        1050: {
            slidesPerView: 4,
            loop: false
        }
    }
});



const swiperTechno = new Swiper('.swiper-technologies', {
    loop: true,
    slidesPerView: 4,

    navigation: {
        nextEl: '.technologies__btn--next',
        prevEl: '.technologies__btn--prev',
    },

    breakpoints: {
        320: {
            spaceBetween: 20,
            slidesPerView: 1,
        },
        425: {
            spaceBetween: 30,
            slidesPerView: 2,
        },
        767.98: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        991.98: {
            slidesPerView: 4,
            spaceBetween: 70,
            loop: false
        }
    }
});
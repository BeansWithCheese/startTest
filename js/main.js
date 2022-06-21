'use strict'

/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
// 검색창 요소를 클릭하면 실행.
// Trying it out with a arrow function
searchEl.addEventListener('click',  () => {
  searchInputEl.focus()
})
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', 'Searching for...')
})
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})


const badgeEl = document.querySelector("header .badges")
const toTopEl = document.querySelector("#to-top")

window.addEventListener('scroll', _.throttle(function () {
    // if the window is scrolled past 500 px
    if (window.scrollY > 500) {
        //hide the badge
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })
        // display the scroll up button
        gsap.to(toTopEl, .3, {
            x: 0
        })
    // if the scroll range does not exceed 500 px
    } else {
        // display badge
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })
        // hide the scroll up button
        gsap.to(toTopEl, .3, {
            x: 100
        })
    }
}, 300))

toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    })
})

/*
Fade in variables (within visual) => .visual .fade-in
*/
const fadeEls = document.querySelectorAll('.visual .fade-in')
// handle all the fadeEls variables
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity:1
    })
})


/*
Switper container and variables within
*/
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
})
new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal', //
     autoplay: {
        delay: 5000 // 5 second delay
     },
     loop: true,
     slidesPerView: 3,
     spaceBetween: 10,
     centeredSlides: true,
     pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
     },
     navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
     }
})
// awards is at the bottom of the page
new Swiper('.awards .swiper-container', {
    autoplay:true,
    loop: true,
    spacebetween: 30,
    slidesPerView: 5,

    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
})


// Adding toggle to promotion page
const promotionEl = document.querySelector('.promotion')

const promotionToggleBtn = document.querySelector('.toggle-promotion')

let isHidePromotion = false
promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion

    if (isHidePromotion) {
        promotionEl.classList.add('hide')
    } else {
        promotionEl.classList.remove('hide')
    }
})

/**
 * Floating thingies 
 */

function random(min, max) {
    return parseFloat((Math.random() *(max-min) + min).toFixed(2))
}

// Create floating object
function floatingObject(selector, delay, size) {
    gsap.to(
        selector, 
        random(1.5, 2.5),
        {
            delay: random(0, delay),
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut
        }
    )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

const spyEls = document.querySelectorAll('section.scroll-spy')

spyEls.forEach((spyEl) => {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller()) // must!
})


const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()
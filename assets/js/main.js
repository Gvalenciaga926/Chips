/*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById(`nav-menu`);
    const navClose = document.getElementById(`nav-close`);
    const navToggle = document.getElementById(`nav-toggle`);

    if(navToggle){
        navToggle.addEventListener(`click`, () => {
            navMenu.classList.add(`show-menu`)
        })
    }

    if(navClose){
        navClose.addEventListener(`click`, () => {
            navMenu.classList.remove(`show-menu`)
        })
    }


/*=============== REMOVE MENU MOBILE ===============*/
    const navLinks = document.querySelectorAll(`.nav__link`);

    function removeNav(){
        const navMenu = document.getElementById(`nav-menu`);

        navMenu.classList.remove('show-menu');
    }

    navLinks.forEach(i => i.addEventListener(`click` , removeNav));

/*=============== SHADOW HEADER ===============*/

const shadowHeader = () => {
    const header = document.getElementById(`header`);

    this.scrollY >= 50 ? header.classList.add(`shadow-header`) :
                         header.classList.remove(`shadow-header`);
    }

    window.addEventListener(`scroll` , shadowHeader);


/*=============== SWIPER FAVORITES ===============*/ 
const swiperFavorites = new Swiper(`.favorites__swiper` , {
    loop: true,
    grabCursor:true,
    slidesPerView:`auto`,
    centredSlides:`auto`,
})


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll(`section[id]`)

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionid = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionid + ']');

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight ){
            sectionClass.classList.add(`active_link`);
        }else{
            sectionClass.classList.remove(`active_link`);
        }
    })
}

window.addEventListener(`scroll` , scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: `top`,
    distance: `60opx`,
    duration: 2000,
    delay: 100,
})

sr.reveal(`.home__data, .favorites__container`)
sr.reveal(`.home__circle, .home__img` , {delay: 600, scale: .5})
sr.reveal(`.home__chips-1, .home__chips-2, .home__chips-3` , {delay: 1000, interval: 100})
sr.reveal(`.home__leaf`, {delay:1200})
sr.reveal(`.home__tomato-1, .home__tomato-2` , {delay: 1400, interval: 100})
sr.reveal(`.care__img, .contact__img` , {origin: `left`})
sr.reveal(`.care__list, contact__data` , {origin: `right`})
sr.reveal(`.banner__item, .products__cards` , {origin: `right`})



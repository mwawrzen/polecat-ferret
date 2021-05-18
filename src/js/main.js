/* gsap service */

const anim = (elem, options, duration = .4) => {
    gsap.to(elem, { duration, ease: 'power3', ...options});
}

const tlAnim = (tl, elem, options, duration = .4, others = null) => {
    tl.to(elem, { duration, ease: 'power3', ...options }, others);
}

/* navigation */

gsap.to(document.body, { duration: .3, top: 0, left: 0 });

const pagesNumber = 3; // first page -> 0
let currentPage = 0;
const navButtons = document.querySelectorAll('.nav__link');

const navTo = currPage => {

    if (currPage > pagesNumber)
        console.error('Wrong current page number');

    gsap.to(document.body, {
        duration: .8,
        top: 0,
        left: -window.innerWidth * currPage,
        ease: 'power4'
    });

    currentPage = currPage;

    navButtons.forEach(btn => btn.classList.remove('nav__link--active'));
    navButtons[currPage].classList.add('nav__link--active');
}


/* changing pages with scroll */

horizontal = true;

window.addEventListener('wheel', e => {

    if (horizontal) {

        if (
            e.deltaY < 0 &&
            currentPage > 0 &&
            currentPage <= pagesNumber
        )
            currentPage--;

        else if (
            e.deltaY > 0 &&
            currentPage >= 0 &&
            currentPage < pagesNumber
        )
            currentPage++;

        navTo(currentPage);
    }
});


/* readmore function */

const pageCorner = document.querySelector('.corner');
const pageCornerCloseButton = document.querySelector('.corner__close');
const logo = document.querySelector('.corner__logo');
const contactButton = document.querySelector('.corner__button');
const navMenu = document.querySelector('.nav__menu');

const pageHeader = document.querySelectorAll('.page__title');
const pageDescription = document.querySelectorAll('.page__subtitle');
const pageReadMoreButton = document.querySelectorAll('.page__button');
const pageContainer = document.querySelectorAll('.page__container');
const pageNavlines = document.querySelectorAll('.page__navline-area');
const pageContents = document.querySelectorAll('.page__content');

const readMoreFunction = () => {

    horizontal = !horizontal;
    const c = currentPage;

    if (!horizontal && horizontal !== null) {

        pageContents[c].scrollTop = 0;
        document.body.style.overflow = 'scroll';

        anim(pageContents[c], { top: '20vh' });
        anim(pageContainer[c], { top: '150px' });
        anim(pageHeader[c], { fontSize: '40px' });
        anim(pageDescription[c], { opacity: 0 });
        anim(pageReadMoreButton[c], { opacity: 0 });
        anim(navMenu, { opacity: 0 });

        let tl = gsap.timeline();

        tlAnim(tl, pageCorner, { top: '70px' }, .4);
        tlAnim(tl, pageCornerCloseButton, { left: '3px' }, .2);
        tlAnim(tl, pageNavlines, { bottom: '0' }, .8, 1.5);
        tlAnim(tl, logo, { width: '50px' }, .4, 1);
        tlAnim(tl, contactButton, {
            transform: 'rotate(-90deg) translate(-50%, -50%)'
        }, .4, 1);

    } else {

        document.body.style.overflow = 'hidden';

        anim(pageContents[c], { top: '100vh' });
        anim(pageContainer[c], { top: '50%' });
        anim(pageHeader[c], { fontSize: '80px' });
        anim(pageDescription[c], { opacity: 1 });
        anim(pageReadMoreButton[c], { opacity: 1 });
        anim(navMenu, { opacity: 1 });

        let tl = gsap.timeline();

        tlAnim(tl, pageCornerCloseButton, { left: '-70px' }, .2);
        tlAnim(tl, pageCorner, { top: '20px' }, .4);
        tlAnim(tl, pageNavlines, { bottom: '100vh' }, .8, 1.1);
        tlAnim(tl, logo, { width: '100px' }, .4, 1);
        tlAnim(tl, contactButton, {
            transform: 'rotate(0) translate(0, 0)'
        }, .4, 1);
    }
}

pageCornerCloseButton.addEventListener('click', readMoreFunction);


/* contact overlay */

const contactOverlay = document.querySelector('.contact-overlay');
const contactOverlayButton = document.querySelector('.contact-overlay__button');

contactOverlay.style.display = 'none';

let temp = null;

contactButton.addEventListener('click', () => {
    temp = horizontal;
    horizontal = null;
    contactOverlay.style.display = 'flex';
});

contactOverlayButton.addEventListener('click', () => {
    horizontal = temp;
    contactOverlay.style.display = 'none';
});


/* fixed bug connected with resizing the window */

window.addEventListener('resize', () => {

    gsap.to(document.body, {
        duration: .3,
        left: -window.innerWidth * currentPage
    });
});

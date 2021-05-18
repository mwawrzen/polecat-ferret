/* gsap functions */

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

    initNavlineService();
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

let temp = null;

contactButton.addEventListener('click', () => {

    anim(contactOverlay, { bottom: 0 });
    let tl = gsap.timeline();
    tlAnim(tl, contactOverlayButton, { left: '30px' }, .6);

    temp = horizontal;
    horizontal = null;
});

contactOverlayButton.addEventListener('click', () => {

    anim(contactOverlay, { bottom: '100vh' });
    let tl = gsap.timeline();
    tlAnim(tl, contactOverlayButton, { left: '-50px' }, .4);

    horizontal = temp;
});


/* navline service */

const initNavlineService = () => {

    const circles = document.querySelectorAll('.page__nl-circle');

    let activeArticle = [
        ...document.querySelectorAll('.page__navline')[currentPage].children
    ][0];

    const addActiveClass = target => {

        circles.forEach(item => item.classList.remove('page__nl-circle--active'));
        target.classList.add('page__nl-circle--active');
    }

    addActiveClass(activeArticle);

    circles.forEach(item => item.addEventListener('click', e => {

        const paragraphs = document.querySelectorAll(`.${e.target.dataset.article}`);

        anim(pageContents[currentPage], {
            scrollTo: paragraphs[currentPage].offsetTop
        }, .8);

        addActiveClass(e.target);
    }));

    pageContents[currentPage].addEventListener('wheel', e => {

        const circles = [
            ...document.querySelectorAll('.page__navline')[currentPage].children
        ];

        circles.forEach(circle => {

            const selector = `.${circle.dataset.article}`;
            const paragraph = document.querySelectorAll(selector);

            if (
                pageContents[currentPage].clientHeight / 2 +
                pageContents[currentPage].scrollTop >
                paragraph[currentPage].offsetTop
            )
                activeArticle = circle;
        });

        addActiveClass(activeArticle);
    });
}

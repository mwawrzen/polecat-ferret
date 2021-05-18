/* navigation */

gsap.to(document.body, {duration: .3, top: 0, left: 0});

const pagesNumber = 3; // first page -> 0
let currentPage = 0;
const navButtons = document.querySelectorAll('.nav__link');

function navTo(curr) {

    if (curr > pagesNumber)
        console.error('Wrong current page number');

    gsap.to(document.body, {
        duration: .8,
        top: 0,
        left: -window.innerWidth * curr,
        ease: 'power4'
    });

    currentPage = curr;

    navButtons.forEach(btn => btn.classList.remove('nav__link--active'));
    navButtons[curr].classList.add('nav__link--active');
}

// changing pages with scroll

horizontal = true;

window.addEventListener('wheel', e => {

    if (horizontal) {

        if (e.deltaY < 0 && currentPage > 0 && currentPage <= pagesNumber) {
            currentPage--;
        } else if (e.deltaY > 0 && currentPage >= 0 && currentPage < pagesNumber) {
            currentPage++;
        }

        navTo(currentPage);
    }
});

const pageContents = document.querySelectorAll('.page__content');
const pageNavlines = document.querySelectorAll('.page__navline-area');
const pageContainer = document.querySelectorAll('.page__container');
const pageHeader = document.querySelectorAll('.page__title');
const pageDescription = document.querySelectorAll('.page__subtitle');
const pageReadMoreButton = document.querySelectorAll('.page__button');
const pageCorner = document.querySelector('.corner');
const pageCornerCloseButton = document.querySelector('.corner__close');


function readMore() {

    horizontal = !horizontal;
    let nav_menu = navButtons[0].parentElement.parentElement;

    if (!horizontal) {

        pageContents[currentPage].scrollTop = 0;
        document.body.style.overflow = 'scroll';

        gsap.to(pageContents[currentPage], {duration: .4, top: '20vh'});
        gsap.to(pageContainer[currentPage], {duration: .4, top: '150px'});
        gsap.to(pageHeader[currentPage], {duration: .4, fontSize: '40px'});
        gsap.to(pageDescription[currentPage], {duration: .4, opacity: 0});
        gsap.to(pageReadMoreButton[currentPage], {duration: .4, opacity: 0});
        gsap.to(nav_menu, {duration: .4, opacity: 0});

        let tl = gsap.timeline();
        tl.to(pageCorner, {duration: .4, top: '70px'});
        tl.to(pageCornerCloseButton, {duration: .2, left: '0px'});
        tl.to(pageNavlines[currentPage], {duration: .8, bottom: '0'});

    } else {

        document.body.style.overflow = 'hidden';

        gsap.to(pageContents[currentPage], {duration: .4, top: '100vh'});
        gsap.to(pageContainer[currentPage], {duration: .4, top: '50%'});
        gsap.to(pageHeader[currentPage], {duration: .4, fontSize: '80px'});
        gsap.to(pageDescription[currentPage], {duration: .4, opacity: 1});
        gsap.to(pageReadMoreButton[currentPage], {duration: .4, opacity: 1});
        gsap.to(nav_menu, {duration: .4, opacity: 1});

        let tl = gsap.timeline();
        tl.to(pageCornerCloseButton, {duration: .2, left: '-70px'});
        tl.to(pageCorner, {duration: .4, top: '20px'});
        tl.to(pageNavlines[currentPage], {duration: .8, bottom: '100vh'});
    }
}

pageCornerCloseButton.addEventListener('click', readMore);

/* contact overlay */

const contactOverlay = document.querySelector('.contact-overlay');
const contactButton = document.querySelector('.corner__button');
const contactOverlayButton = document.querySelector('.contact-overlay__button');

contactOverlay.style.display = 'none';

contactButton.addEventListener('click', () => {
    contactOverlay.style.display = 'flex';
});

contactOverlayButton.addEventListener('click', () => {
    contactOverlay.style.display = 'none';
});

/* switching theme mode */


/* fixed bug connected with resizing the window */

window.addEventListener('resize', () => {

    gsap.to(document.body, {
        duration: .3,
        left: -window.innerWidth * currentPage
    });
});

/* navigation */

gsap.to(window, {duration: 1, scrollTo: {y: 0, x: 0}});
const pagesNumber = 3; // first page -> 0
let currentPage = 0;
const navButtons = [...document.querySelectorAll('.nav__link')];

function navTo(curr) {

    if (curr > pagesNumber)
        console.error('Wrong current page number');

    gsap.to(window, {duration: 1, scrollTo: {y: 0, x: window.innerWidth * curr}});
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

// changing scroll direction on specific subsite

function readMore() {
    horizontal = !horizontal;
    if (!horizontal)
        document.body.style.overflow = 'scroll';
    else
        document.body.style.overflow = 'hidden';
}


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

    gsap.to(window, {duration: 1, scrollTo: {y: 0, x: window.innerWidth * currentPage}});
});

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

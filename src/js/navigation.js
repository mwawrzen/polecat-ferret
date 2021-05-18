/* navigation service */

gsap.to(document.body, { duration: .3, top: 0, left: 0 });

const navTo = currPage => {

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

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

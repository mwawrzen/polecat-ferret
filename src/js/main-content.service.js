/* main content service */

const readMoreFunction = () => {

    initNavlineService();
    horizontal = !horizontal;

    if (!horizontal && horizontal !== null) {

        pageContents[c].scrollTop = 0;
        document.body.style.overflow = 'scroll';

        pageDescription[c].style.display = 'none';
        anim(pageContents[c], { top: '20vh' });
        anim(pageContainer[c], { top: '18vh' });
        anim(pageHeader[c], { fontSize: '4vh' });
        anim(pageDescription[c], { opacity: 0, display: 'none' });
        anim(pageReadMoreButton[c], { opacity: 0 }, .2);
        anim(navMenu, { opacity: 0, display: 'none' });
        anim(themeButton, { opacity: 0 }, 0);

        let tl = gsap.timeline();

        tlAnim(tl, pageCorner, { top: '80px', opacity: 0, display: 'none' }, .6);
        tlAnim(tl, pageCornerCloseButton, { left: '24px' }, .2);
        tlAnim(tl, pageNavlines, { bottom: '0' }, .6, .5);

    } else {

        document.body.style.overflow = 'hidden';

        pageDescription[c].style.display = 'block';
        anim(pageContents[c], { top: '100vh' });
        anim(pageContainer[c], { top: '50%' });
        if (window.innerWidth <= breakpoints.xs)
            anim(pageHeader[c], { fontSize: '40px' });
        else
            anim(pageHeader[c], { fontSize: '80px' });
        anim(pageDescription[c], { opacity: 1 });
        anim(pageReadMoreButton[c], { opacity: 1 });
        anim(navMenu, { opacity: 1, display: 'flex' });
        anim(themeButton, { opacity: 1 }, .2);

        let tl = gsap.timeline();

        tlAnim(tl, pageCornerCloseButton, { left: '-70px' }, .2);
        tlAnim(tl, pageCorner, { top: '20px', opacity: 1, display: 'block' }, .5);
        tlAnim(tl, pageNavlines, { bottom: '100vh' }, .4);
    }
}

pageCornerCloseButton.addEventListener('click', readMoreFunction);

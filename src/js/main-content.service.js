/* main content service */

const readMoreFunction = () => {

    initNavlineService();
    horizontal = !horizontal;

    if (!horizontal && horizontal !== null) {

        pageContents[c].scrollTop = 0;
        document.body.style.overflow = 'scroll';

        anim(pageContents[c], { top: '20vh' });
        anim(pageContainer[c], { top: '150px' });
        if (window.innerWidth <= breakpoints.xs) {
            console.log('mobile');
            anim(pageHeader[c], { fontSize: '20px' });
        } else {
            console.log('desktop');
            anim(pageHeader[c], { fontSize: '40px' });
        }
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
        if (window.innerWidth <= breakpoints.xs) {
            console.log('mobile');
            anim(pageHeader[c], { fontSize: '40px' });
        } else {
            console.log('desktop');
            anim(pageHeader[c], { fontSize: '80px' });
        }
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

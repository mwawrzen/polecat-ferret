/* fixed bug connected with resizing the window */

window.addEventListener('resize', () => {

    gsap.to(document.body, {
        duration: .3,
        left: -window.innerWidth * c
    });
});

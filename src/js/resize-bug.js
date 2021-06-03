/* fixed bug connected with resizing the window */

window.addEventListener('resize', () => {

    gsap.to(document.body, {
        duration: .3,
        left: -window.innerWidth * c
    });

    if (window.innerWidth > breakpoints.md)
        contactMapButton.style.bottom = '-80px';
    else
        contactMapButton.style.bottom = 0;
});

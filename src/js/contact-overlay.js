/* contact overlay */

const contactOverlay = document.querySelector('.contact-overlay');
const contactOverlayButton = document.querySelector('.contact-overlay__button');

let temp = null;

contactButton.addEventListener('click', () => {

    anim(contactOverlay, { bottom: 0 });
    let tl = gsap.timeline();
    tlAnim(tl, contactOverlayButton, { left: '24px' }, .6);

    temp = horizontal;
    horizontal = null;
});

contactOverlayButton.addEventListener('click', () => {

    anim(contactOverlay, { bottom: '100vh' });
    let tl = gsap.timeline();
    tlAnim(tl, contactOverlayButton, { left: '-50px' }, .4);

    horizontal = temp;
});

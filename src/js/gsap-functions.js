/* gsap functions */

const anim = (elem, options, duration = .4) => {
    gsap.to(elem, { duration, ease: 'power3', ...options});
}

const tlAnim = (tl, elem, options, duration = .4, others = null) => {
    tl.to(elem, { duration, ease: 'power3', ...options }, others);
}

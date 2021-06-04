/* gsap functions service */

const anim = (elem, options, duration = .4) => {
    gsap.to(elem, { duration, ease: 'power3', ...options});
}

const tlAnim = (tl, elem, options, duration = .4, others = null) => {
    tl.to(elem, { duration, ease: 'power3', ...options }, others);
}

const mode = () =>  {
    var element = document.body;
    if(element.classList.contains("light")){
        element.classList.add("dark")
        element.classList.remove("light")
    }else{
        element.classList.add("light")
        element.classList.remove("dark")
    }
}

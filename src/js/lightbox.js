const lightboxContext = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__img--img");
const lightboxCloseButton = document.querySelector(".lightbox__close");

let currentGallery = 0;
let currentImage = 0;

function getImage(idGallery, idImage) {

    let imgGalleries = document.querySelectorAll(".lightbox__section");
    return imgGalleries[idGallery].querySelectorAll("img")[idImage];
}

function openLightbox(value) {

    let data = value.split(":");
    let idGallery = data[0];
    let idImg = data[1];
    currentGallery = Number(idGallery);
    currentImage = Number(idImg);

    anim(lightboxContext, { bottom: 0 }, .4);
    anim(lightboxCloseButton, { display: 'grid' }, .3);
    tlAnim(gsap.timeline(), lightboxCloseButton, { opacity: 1 });

    lightboxImage.src = getImage(idGallery, idImg).src;
}

function prevLightbox() {

    if (currentImage - 1 >= 0) {
        lightboxImage.style.opacity = 0;
        anim(lightboxImage, { opacity: 1 }, .5);
        lightboxImage.src = getImage(currentGallery, currentImage - 1).src;
        lightboxImage.style.transform = 'translateX(0)';
        currentImage--;
    }
}

function nextLightbox() {

    let images = document
                    .querySelectorAll(".lightbox__section")[currentGallery]
                    .querySelectorAll("img");
    if (currentImage + 1 < images.length) {
        lightboxImage.style.opacity = 0;
        anim(lightboxImage, { opacity: 1 }, .5);
        lightboxImage.src = getImage(currentGallery, currentImage + 1).src;
        currentImage++;
    }
}

function closeLightbox(){

    anim(lightboxContext, { bottom: '-100vh' }, .3);
    anim(lightboxCloseButton, { opacity: 0 }, .2);
    tlAnim(gsap.timeline(), lightboxCloseButton, { display: 'none' });
}

function setup() {

    let imgGalleries = document.querySelectorAll(".lightbox__section");
    let idGallery = 0;
    imgGalleries.forEach(element => {

        let images = element.querySelectorAll("img");
        let idImage = 0;
        images.forEach(img => {
            let v = idGallery + ":" + idImage;
            img.addEventListener("click", () => openLightbox(v));
            idImage++;
        });
        idGallery++;
    });
}

setup();

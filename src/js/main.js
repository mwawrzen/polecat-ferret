/* global variables */

let c = 0; // current page number
const pagesNumber = 3; // pages are numbered from 0

horizontal = true; // scroll direction
isContactOverlay = false;

const navMenu = document.querySelector('.nav__menu');
const navButtons = document.querySelectorAll('.nav__link');

const pageCorner = document.querySelector('.corner');
const pageCornerCloseButton = document.querySelector('.corner__close');
const logo = document.querySelector('.corner__logo');
const contactButton = document.querySelector('.corner__button');

const pageHeader = document.querySelectorAll('.page__title');
const pageDescription = document.querySelectorAll('.page__subtitle');
const pageReadMoreButton = document.querySelectorAll('.page__button');

const pageContainer = document.querySelectorAll('.page__container');
const pageNavlines = document.querySelectorAll('.page__navline-area');
const pageContents = document.querySelectorAll('.page__content');

const contactOverlay = document.querySelector('.contact-overlay');
const contactOverlayButton = document.querySelector('.contact-overlay__button');
const contactMapButton = document.querySelector('.contact-overlay__map-button');

const navlineOptionButtons = document.querySelectorAll('.page__nl-circle');

/* rwd breakpoints */

const breakpoints = {
    xs: 512,
    sm: 768,
    md: 896,
    lg: 1152,
    xl: 1280
}

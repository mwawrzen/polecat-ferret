/* global variables */

let currentPage = c = 0;
const pagesNumber = 3; // pages are numbered from 0

horizontal = true; // scroll direction

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

const navlineOptionButtons = document.querySelectorAll('.page__nl-circle');

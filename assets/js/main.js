'use strict';

/**
 * Add Event Listener On Multiple Elements
 */

const addEventOnElements = function (elements, ebentType, callback) {
    for (let i = 0, len = elements.lenght; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/*
 * Preloader
 * Preloader Will Be Visible Until Document Load
*/

 const preloader = document.querySelector("[data-preloader]");
 window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
 });

 /*
 * Mobile Navbar
 * Show The Mobile Navbar When Click Menu Button
 * Add Hidden After Click Menu Close Button Or Overlay
 */

 const navbar = document.querySelector("[data-navbar]");
 const navTogglers = document.querySelectorAll("[data-toggler]");
 const overlay = document.querySelector("[data-overlay");

 const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active")
 }

 addEventOnElements(navTogglers, "click", toggleNav);

 /*
  * Header & Back Top Btn
  * Active Header & Back Top Btn When Window Scroll Down To 100px 
  */

 const header = document.querySelector("[data-header]");
 const backTopBtn = document.querySelector("[data-back-top-btn]");
 const activeElementOnScroll = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }
 }

 window.addEventListener("scroll", activeElementOnScroll);

 /*
  * Scroll Reveal 
  */

 const revealElements = document.querySelectorAll("[data-reveal]");
 const revealElementOnScroll = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
            revealElements[i].classList.add("revealed");
        } else {
            revealElements[i].classList.remove("revealed");
        }
    }
 }

 window.addEventListener("scroll", revealElementOnScroll);
 window.addEventListener("load", revealElementOnScroll);
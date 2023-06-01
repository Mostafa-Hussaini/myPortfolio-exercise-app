"use strict";

/**
 * Initiate glightbox
 */
const glightbox = GLightbox({
  selector: ".glightbox",
});

/**
 * Date & time
 */


/**
 * Page Navigation
 */

document.querySelector(".navbar-nav").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

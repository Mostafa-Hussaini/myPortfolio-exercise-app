"use strict";

/**
 * All Selectors
 */
const scrollToTop = document.querySelector(".scroll-top");
const header = document.querySelector("#header");
const aboutSection = document.querySelector("#about");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

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
 *  Scroll to Top
 */

scrollToTop.addEventListener("click", () => {
  header.scrollIntoView({
    behavior: "smooth",
  });
});

// Button visibility

const scrollTop = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) scrollToTop.classList.add("active");
  else scrollToTop.classList.remove("active");
};

const obsOptions = {
  root: null,
  threshold: 0.6,
};
const aboutSectionObserver = new IntersectionObserver(scrollTop, obsOptions);
aboutSectionObserver.observe(aboutSection);

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

// Nav Link Activation
const navLinkActive = (entries) => {
  const [entry] = entries;
  const id = entry.target.id;
  if (entry.isIntersecting) {
    navLinks.forEach((link) => {
      link.getAttribute("href") == `#${id}`
        ? link.classList.add("active")
        : link.classList.remove("active");
    });
  }
};

const navLinkOptions = {
  root: null,
  threshold: 0.7,
};

const sectionObserver = new IntersectionObserver(navLinkActive, navLinkOptions);
sections.forEach((section) => {
  sectionObserver.observe(section);
});

/**
 * Reveal Sections
 */

const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");
  observer.unobserve(entry.target);
};

const revealOptions = {
  root: null,
  threshold: 0.15,
};

const secObserver = new IntersectionObserver(revealSection, revealOptions);
sections.forEach((section) => {
  secObserver.observe(section);
  section.classList.add("hidden");
});

"use strict";
const navbar = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    navbar.classList.remove("active");
  })
);

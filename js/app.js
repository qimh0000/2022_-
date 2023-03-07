const menubox = document.querySelector(".menubox");
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const navbg01 = document.querySelector(".nav-ripple1");
const navbg02 = document.querySelector(".nav-ripple2");
const navbg03 = document.querySelector(".nav-ripple3");
const links = document.querySelectorAll(".nav-links li");

menubox.addEventListener("click", () => {
  menu.classList.toggle("open");
  navLinks.classList.toggle("open");
  navbg01.classList.toggle("open");
  navbg02.classList.toggle("open");
  navbg03.classList.toggle("open");
});


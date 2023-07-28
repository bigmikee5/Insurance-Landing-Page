const navMenu = document.querySelector(".rightMenu"),
  toggleMenu = document.querySelector("#hamburg"),
  closeMenu = document.querySelector("#hamburgClose"),
  navLink = document.querySelectorAll(".rightMenu");

//  SHOW
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//  HIDDEN
toggleMenu.addEventListener("click", () => {
  closeMenu.classList.remove("show");
});

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

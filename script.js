document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu-link");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      toggleMenu(document.querySelector(".hamburger-icon"));
    });
  });
});

function toggleMenu(icon) {
  const menu = document.querySelector(".mobile-links");
  const links = document.querySelectorAll(".mobile-links a");

  if (menu.classList.contains("opacity-0")) {
    // Menu is closed
    menu.classList.remove("opacity-0");
    icon.setAttribute("name", "close");
    // Enable pointer events for each link
    links.forEach((link) => {
      link.style.pointerEvents = "auto";
    });
  } else {
    // Menu is open
    menu.classList.add("opacity-0");
    icon.setAttribute("name", "menu");
    // Disable pointer events for each link
    links.forEach((link) => {
      link.style.pointerEvents = "none";
    });
  }
}

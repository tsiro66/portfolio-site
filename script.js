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
  const body = document.body;

  if (menu.classList.contains("opacity-0")) {
    // Menu is closed
    menu.classList.remove("opacity-0");
    menu.classList.add("opacity-100"); // To ensure visibility
    icon.setAttribute("name", "close");
    body.classList.add("disable-pointer-events"); // Disable pointer events
    menu.style.pointerEvents = "auto"; // Allow pointer events on menu
  } else {
    // Menu is open
    menu.classList.add("opacity-0");
    menu.classList.remove("opacity-100");
    icon.setAttribute("name", "menu");
    body.classList.remove("disable-pointer-events"); // Enable pointer events
    menu.style.pointerEvents = "none"; // Disable pointer events on menu
  }
}

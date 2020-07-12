const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");
    document.body.classList.toggle('noscroll');
    document.querySelector('html').classList.toggle('noscroll');

    // Animate links
    navLinks.forEach((link, idx) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          idx / 7 + 0.3
        }s`;
      }
    });

    // Burger animation
    burger.classList.toggle('toggle')
  });
};
navSlide();

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY >= 40) {
    if (navbar.style.backgroundColor = "#1e2d4d") return
    console.log('now');
    navbar.style.backgroundColor = "#1e2d4d";
  } else {
    if (navbar.style.backgroundColor = "transparent") return
    navbar.style.backgroundColor = "transparent";
  }
})

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");
    document.body.classList.toggle("noscroll");
    document.querySelector("html").classList.toggle("noscroll");

    // Animate links
    navLinks.forEach((link, idx) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          idx / 7 + 0.3
        }s`;
      }
    });

    // Burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();

// navbar color check transparency according to page
if (document.title === "Homepage") {
  const navbar = document.querySelector(".navbar");
  navbar.style.backgroundColor = "transparent";

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 40) {
      if ((navbar.style.backgroundColor = "#1e2d4d")) return;
      console.log("now");
      navbar.style.backgroundColor = "#1e2d4d";
    } else {
      if ((navbar.style.backgroundColor = "transparent")) return;
      navbar.style.backgroundColor = "transparent";
    }
  });
} else {
  // navbar for why us page
  const navbar = document.querySelector(".navbar");
  navbar.style.backgroundColor = "#1e2d4d";
}
let navlinks = document.querySelectorAll(".nav-links li a");
navlinks.forEach((link) => {
  if (link.dataset.page === document.title) link.classList.add("active");
});

// open footer sections
const footerLists = document.querySelectorAll('.footer .section');
footerLists.forEach(list => {
  list.addEventListener('click', function () {
    $(this).children('h4').toggleClass('active').parent().siblings().children('h4').removeClass('active')
    $(this).children('ul').slideToggle().parent().siblings().children('ul').slideUp()
  })
})

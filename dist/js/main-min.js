const navSlide=()=>{const e=document.querySelector(".burger"),o=document.querySelector(".nav-links"),t=document.querySelectorAll(".nav-links li");e.addEventListener("click",()=>{o.classList.toggle("nav-active"),document.body.classList.toggle("noscroll"),document.querySelector("html").classList.toggle("noscroll"),t.forEach((e,o)=>{e.style.animation?e.style.animation="":e.style.animation=`navLinkFade 0.5s ease forwards ${o/7+.3}s`}),e.classList.toggle("toggle")})};if(navSlide(),"Homepage"===document.title){const e=document.querySelector(".navbar");e.style.backgroundColor="transparent",window.addEventListener("scroll",()=>{if(window.scrollY>=40){if(e.style.backgroundColor="#1e2d4d")return;console.log("now"),e.style.backgroundColor="#1e2d4d"}else{if(e.style.backgroundColor="transparent")return;e.style.backgroundColor="transparent"}})}
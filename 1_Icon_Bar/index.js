//  Grabbing elements from Html
const verticalBarLinkEls = document.querySelectorAll(".vertical-bar__link");
const horizontalBarLinkEls = document.querySelectorAll(".horizontal-bar__link");
const horizontalBarEl = document.querySelector(".horizontal-bar");
const verticalBarEl = document.querySelector(".vertical-bar");
// links press click listen
function linksClick(links, parents) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      parents.querySelector(".active").classList.remove("active");
      link.classList.add("active");
    });
  });
}
linksClick(verticalBarLinkEls, verticalBarEl);
linksClick(horizontalBarLinkEls, horizontalBarEl);

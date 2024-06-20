const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);

const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}
function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

let currentlyVisibleElementId = null;

function toggleVisibility(elementId, buttonId) {
  var element = document.getElementById(elementId);
  var button = document.getElementById(buttonId);

  // Hide the currently visible element if it's different from the clicked one
  if (currentlyVisibleElementId && currentlyVisibleElementId !== elementId) {
    var currentElement = document.getElementById(currentlyVisibleElementId);
    var currentButton = document.querySelector(
      `button[onclick*="${currentlyVisibleElementId}"]`
    );
    currentElement.classList.add("hidden");
    currentButton.textContent = "Show";
  }

  // Toggle the clicked element
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
    button.textContent = "Hide";
    currentlyVisibleElementId = elementId;
  } else {
    element.classList.add("hidden");
    button.textContent = "Show";
    currentlyVisibleElementId = null;
  }
}

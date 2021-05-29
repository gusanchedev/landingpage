function displayNavMenuOptions(e) {
    if(e.matches) {
      menuButton.classList.add("hidden");
      menuItems.forEach( item => {
        item.classList.remove("hidden");
      });
    }
    else {
      menuButton.classList.remove("hidden");
      menuItems.forEach( item => {
        item.classList.add("hidden");
      });
    }
}
const menuButton = document.querySelector(".hamburger-button");
const menuItems = document.querySelectorAll(".menu-item");
const menuIcon = document.querySelector(".fas.fa-bars");
const logo = document.querySelector(".logo");
const mediaQueryList =  window.matchMedia("(min-width:1025px)");

if(mediaQueryList.matches) {
  menuButton.classList.add("hidden");
  menuItems.forEach( item => {
    item.classList.remove("hidden");
  });
};
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
  logo.classList.toggle("hidden");
  menuItems.forEach( item => {
    item.classList.toggle("hidden");
  });
});


mediaQueryList.addEventListener('change', displayNavMenuOptions);
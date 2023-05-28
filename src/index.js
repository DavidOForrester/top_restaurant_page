import _, { constant } from "lodash";
import homePage from "./homePage.js";
import menuPage from "./menuPage.js";
import contactPage from "./contactPage.js";
import RestaurentImage from "./restaurant.jpg";

// Functions
function menuButton() {
  const menuButtonClick = document.getElementById("menu-button");
  menuButtonClick.addEventListener("click", () => {
    document.body.innerHTML = "";
    menuPage(RestaurentImage);
    contactButton();
    homeButton();
  });
}

function contactButton() {
  const contactButtonClick = document.getElementById("contact-button");
  contactButtonClick.addEventListener("click", () => {
    document.body.innerHTML = "";
    contactPage(RestaurentImage);
    menuButton();
    homeButton();
  });
}

function homeButton() {
  const homeButtonClick = document.getElementById("home-button");
  homeButtonClick.addEventListener("click", () => {
    document.body.innerHTML = "";
    homePage(RestaurentImage);
    menuButton();
    contactButton();
  });
}

// General Code
homePage(RestaurentImage);
menuButton();
contactButton();

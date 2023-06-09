export default function homePage(RestaurentImage) {
  // content
  const content = document.createElement("div");
  content.id = "content";
  document.body.appendChild(content);

  // image
  const myRestaurentImage = new Image();
  myRestaurentImage.src = RestaurentImage;
  content.appendChild(myRestaurentImage);

  // header
  const header = document.createElement("header");
  content.appendChild(header);

  // h1
  const headerText = document.createElement("h1");
  headerText.innerText = "The Wonderful Restaurant";
  header.appendChild(headerText);

  // h2
  const subHeaderText = document.createElement("h2");
  subHeaderText.innerText = "Home";
  header.appendChild(subHeaderText);

  // Toggle buttons
  const menuPageButton = document.createElement("button");
  menuPageButton.id = "menu-button"
  menuPageButton.innerText = "Menu";
  header.appendChild(menuPageButton);

  const contactPageButton = document.createElement("button");
  contactPageButton.id = "contact-button"
  contactPageButton.innerText = "Contact Us";
  header.appendChild(contactPageButton);

  // main
  const main = document.createElement("main");
  content.appendChild(main);

  // p
  const mainParaOne = document.createElement("p");
  mainParaOne.innerText =
    "The Wonderful Restaurant is a great place to enjoy a delicious meal with friends or family. We offer a wide variety of dishes to choose from, all made with fresh, high-quality ingredients. Our service is friendly and attentive, and our atmosphere is warm and inviting.";
  main.appendChild(mainParaOne);

  // p
  const mainParaTwo = document.createElement("p");
  mainParaTwo.innerText =
    "We are open for lunch and dinner, seven days a week. We also offer a full bar, so you can enjoy a drink with your meal.";
  main.appendChild(mainParaTwo);

  // p
  const mainParaThree = document.createElement("p");
  mainParaThree.innerText = "We hope to see you soon!";
  main.appendChild(mainParaThree);

  // footer
  const footer = document.createElement("footer");
  content.appendChild(footer);

  // p
  const footerPara = document.createElement("p");
  footerPara.innerText = "Copyright 2023 The Wonderful Restaurant";
  footer.appendChild(footerPara);
}

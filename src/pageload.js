import RestaurentImage from "./restaurant.jpg";

export default function initialPageLoad() {
  const content = document.getElementById("content");

  // header
  const header = document.createElement("header");
  content.appendChild(header);

  // h1
  const headerText = document.createElement("h1");
  headerText.innerText = "The Wonderful Restaurant";
  header.appendChild(headerText);

  // image
  const myRestaurentImage = new Image();
  myRestaurentImage.src = RestaurentImage;
  header.appendChild(myRestaurentImage);

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
  footerPara.innerText = "Copyright &copy; 2023 The Wonderful Restaurant";
  footer.appendChild(footerPara);
}

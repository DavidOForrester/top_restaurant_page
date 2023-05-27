export default function menuPage(RestaurentImage) {
  // content
  const content = document.createElement("div");
  content.id = "content"
  document.body.appendChild(content)

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


  // footer
  const footer = document.createElement("footer");
  content.appendChild(footer);

  // p
  const footerPara = document.createElement("p");
  footerPara.innerText = "Copyright &copy; 2023 The Wonderful Restaurant";
  footer.appendChild(footerPara);
}

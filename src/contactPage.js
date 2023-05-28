export default function contactPage(RestaurentImage) {
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
  subHeaderText.innerText = "Contact Us";
  header.appendChild(subHeaderText);

  // Toggle buttons
  const homePageButton = document.createElement("button");
  homePageButton.id = "home-button"
  homePageButton.innerText = "Home";
  content.appendChild(homePageButton);

  const menuPageButton = document.createElement("button");
  menuPageButton.id = "menu-button";
  menuPageButton.innerText = "Menu";
  content.appendChild(menuPageButton);

  // main
  const main = document.createElement("main");
  content.appendChild(main);

  // contact us
  const div = document.createElement("div");
  div.id = "contact-us";

  const p = document.createElement("p");
  p.textContent = "We would love to hear from you!";
  div.appendChild(p);

  const form = document.createElement("form");
  form.action = "";
  form.method = "post";

  const input = document.createElement("input");
  input.type = "text";
  input.name = "name";
  input.placeholder = "Your Name";
  form.appendChild(input);

  const input2 = document.createElement("input");
  input2.type = "email";
  input2.name = "email";
  input2.placeholder = "Your Email";
  form.appendChild(input2);

  const textarea = document.createElement("textarea");
  textarea.name = "message";
  textarea.placeholder = "Your Message";
  form.appendChild(textarea);

  const input3 = document.createElement("input");
  input3.type = "submit";
  input3.value = "Submit";
  form.appendChild(input3);

  div.appendChild(form);

  main.appendChild(div);

  // footer
  const footer = document.createElement("footer");
  content.appendChild(footer);

  // p
  const footerPara = document.createElement("p");
  footerPara.innerText = "Copyright 2023 The Wonderful Restaurant";
  footer.appendChild(footerPara);
}

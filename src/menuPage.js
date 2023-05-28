export default function menuPage(RestaurentImage) {
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
  subHeaderText.innerText = "Menu";
  header.appendChild(subHeaderText);

  // Toggle buttons
  const homePageButton = document.createElement("button");
  homePageButton.id = "home-button"
  homePageButton.innerText = "Home";
  header.appendChild(homePageButton);

  const contactPageButton = document.createElement("button");
  contactPageButton.id = "contact-button"
  contactPageButton.innerText = "Contact Us";
  header.appendChild(contactPageButton);

  // main
  const main = document.createElement("main");
  content.appendChild(main);

  // menu
  var items = [
    {
      name: "Appetizers",
      items: [
        {
          name: "Fried Calamari",
          price: "$10.00",
        },
        {
          name: "Mozzarella Sticks",
          price: "$7.00",
        },
        {
          name: "Nachos",
          price: "$9.00",
        },
        {
          name: "Quesadillas",
          price: "$8.00",
        },
      ],
    },
    {
      name: "Salads",
      items: [
        {
          name: "Caesar Salad",
          price: "$12.00",
        },
        {
          name: "Greek Salad",
          price: "$10.00",
        },
        {
          name: "House Salad",
          price: "$9.00",
        },
        {
          name: "Spinach Salad",
          price: "$8.00",
        },
      ],
    },
    {
      name: "Sandwiches",
      items: [
        {
          name: "Club Sandwich",
          price: "$15.00",
        },
        {
          name: "Ham and Cheese Sandwich",
          price: "$12.00",
        },
        {
          name: "Turkey and Swiss Sandwich",
          price: "$13.00",
        },
        {
          name: "BLT",
          price: "$10.00",
        },
      ],
    },
    {
      name: "Entrees",
      items: [
        {
          name: "Chicken Parmesan",
          price: "$20.00",
        },
        {
          name: "Lasagna",
          price: "$18.00",
        },
        {
          name: "Spaghetti and Meatballs",
          price: "$17.00",
        },
        {
          name: "Fish and Chips",
          price: "$15.00",
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Chocolate Cake",
          price: "$8.00",
        },
        {
          name: "Ice Cream Sundae",
          price: "$7.00",
        },
        {
          name: "Pie",
          price: "$6.00",
        },
        {
          name: "Tiramisu",
          price: "$5.00",
        },
      ],
    },
  ];

  for (var i = 0; i < items.length; i++) {
    var section = document.createElement("section");
    section.className = "menu-section";
    section.innerHTML = items[i].name;
    main.appendChild(section);

    for (var j = 0; j < items[i].items.length; j++) {
      var item = document.createElement("li");
      item.innerHTML = items[i].items[j].name + " - " + items[i].items[j].price;
      section.appendChild(item);
    }
  }

  // footer
  const footer = document.createElement("footer");
  content.appendChild(footer);

  // p
  const footerPara = document.createElement("p");
  footerPara.innerText = "Copyright 2023 The Wonderful Restaurant";
  footer.appendChild(footerPara);
}

import _ from 'lodash';
import RestaurentImage from "./restaurant.jpg";

const element = document.getElementById("content");

const myRestaurentImage = new Image();
myRestaurentImage.src = RestaurentImage;

element.appendChild(myRestaurentImage);

import "./styles.css";
import { homeBtn } from "./home.js";
import { menuBtn } from "./menu.js";
import { contactBtn } from "./contact.js";

homeBtn();
menuBtn();
contactBtn();

document.getElementById("home-btn").click();

// import odinImage from "./odin.png";
// const image = document.createElement("img");
// image.src = odinImage;
// document.body.appendChild(image);
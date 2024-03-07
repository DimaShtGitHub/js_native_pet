import { header } from "./js/header.js";
import { body } from "./js/body.js";
import { createAndOpenPopup, popup } from "./js/popup.js";
const app = document.querySelector(".app");

// Инициализируем проект
app.innerHTML += header();
app.appendChild(body());
app.appendChild(popup());

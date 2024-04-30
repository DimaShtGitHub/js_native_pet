import { header } from "./components/header/header.js";
import { body } from "./components/body/body.js";
import { createAndOpenPopup, popup } from "./components/popup/popup.js";
const app = document.querySelector(".app");

// Инициализируем проект
app.innerHTML += header();
app.appendChild(body());
app.appendChild(popup());

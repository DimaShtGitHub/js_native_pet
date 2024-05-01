import { deletePerson } from "../../api/api";
import { createPersonHook, editPersonHook, useApiMethods } from "../../helpers/hooks";
import { popupBody } from "../../helpers/htmlElements";
import { addContact } from "../ui/addContact/addContact";
import { inputContact } from "../ui/inputContact/inputContact";

export const popup = () => {
  const sectionElment = document.createElement("section");
  sectionElment.classList.add("popup__bg");

  sectionElment.innerHTML += popupBody;
  const closeBtn = sectionElment.querySelector("#btn__close-popup"); // Кнопка для скрытия окна
  const form = sectionElment.querySelector(".popup-form"); // Форма

  createPersonHook(form);

  closeBtn.addEventListener("click", () => {
    closePopup();
  });

  return sectionElment;
};

export const createAndOpenPopup = (data) => {
  const popupSection = document.querySelector(".popup__bg");

  popupSection.classList.add("active");
  popupSection.innerHTML = "";



  // вмонтирование попап в DOM
  popupSection.innerHTML += popupBody;
  const popupContainer = popupSection.querySelector(".popup");
  // открываем попап
  popupContainer.classList.add("active");

  // делаем попап, закрывающимся
  const closeBtn = document.querySelector(".close-popup");
  closeBtn.addEventListener("click", () => {
    closePopup();
  });

  // Контейнер с добавлением контакта
  const addPersonContainer = document.querySelector('.popup__btn__add-person');
  // вмонтировали кнопку "Добавить котанкт"
  addPersonContainer.append(addContact())

  // добавляем функционал для кнопки добавления контакта
  const btnAddContact = addPersonContainer.children[0];

  btnAddContact.addEventListener('click', () => {
    // добавляем поле ввода, выше кнопки
    addPersonContainer.insertBefore(inputContact(), btnAddContact)
  })

  // работаем с формой
  if (data) {
    const titleId = popupSection.querySelector(".popup__title__id");
    const inputName = popupSection.querySelector("#input-name");
    const inputSurname = popupSection.querySelector("#input-surname");
    const inputLastName = popupSection.querySelector("#input-lastName");

    titleId.innerHTML += data.id;
    inputName.value = data.name;
    inputSurname.value = data.surname;
    inputLastName.value = data.lastName;
    const form = popupSection.querySelector(".popup-form");
    editPersonHook(form, data);
    return;
  }

  const form = popupSection.querySelector(".popup-form");
  createPersonHook(form);
  return;
};

export const createAndOpenDeletePersonPopup = (id) => {
  const child = document.getElementById(`${id}`);
  const popupSection = document.querySelector(".popup__bg");
  popupSection.classList.add("active");
  popupSection.innerHTML = "";

  const delPersonPopupHtml = `
    <div class="popup">
      <div id="btn__close-popup" class="close-popup">X</div>
      <div class="popup__del__content">
        <h2>Удалить клиента</h2>

        <p>Вы действительно хотите удалить данного клиента?</p>
        <input
          form="popup-form"
          type="button"
          class="popup__btn__save"
          value="Удалить"
        />
        <a href="#">Отмена</a>
      </div>
    </div>
  `;

  popupSection.innerHTML += delPersonPopupHtml;
  const popup = popupSection.querySelector(".popup");
  const btn = popupSection.querySelector(".popup__btn__save");
  const closeBtn = document.querySelector(".close-popup");
  popup.classList.add("active", "popup__del");

  closeBtn.addEventListener("click", () => {
    closePopup();
  });

  btn.addEventListener("click", () => {
    deletePerson(id);
    child.remove();
    closePopup();
  });
};

export const closePopup = () => {
  const popupSection = document.querySelector(".popup__bg");
  // const closeBtn = document.querySelector(".close-popup");

  // закрываем попап
  // closeBtn.addEventListener("click", () => {
  popupSection.classList.remove("active");
  popupSection.querySelector(".popup").classList.remove("active");
  // });
};

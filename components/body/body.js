import { getPersonList, deletePerson, getPersonById } from "../../api/api";
import { getIconContact } from "../../helpers/getIconContact";
import { tableHeaderHtml } from "../../helpers/htmlElements";
import { createAndOpenDeletePersonPopup, createAndOpenPopup } from "../popup/popup";
const personList = getPersonList();

export const body = () => {
  const sectionElement = document.createElement("section");
  sectionElement.classList.add("body");

  sectionElement.innerHTML += tableHeaderHtml;

  const tableTbody = sectionElement.querySelector("#table__tbody");

  // заполняем таблицу пользователями
  personList.then((array) => {
    console.log(array);
    array.forEach((obj) => tableTbody.append(createTableRow(obj)));

    // for (const child of tableTbody.children) {
    //   const childBtnDelete = child.querySelector("#btn__delete-person");
    //   const childBtnEdit = child.querySelector("#btn__edit-person");

    //   // добавляем кнопкам "изменить" функционал
    //   childBtnEdit.addEventListener("click", async () => {
    //     const person = await getPerson(child.id);
    //     createAndOpenPopup(person);
    //   });

    //   // добавляем кнопкам "удалить" функционал
    //   childBtnDelete.addEventListener("click", () => {
    //     createAndOpenDeletePersonPopup(child.id);
    //   });
    // }
  });

  // Добавляем возможность открывать попап
  const btnAddPerson = sectionElement.querySelector(
    ".add-client__container__btn"
  ); // Кнопки для показа окна

  btnAddPerson.addEventListener("click", () => {
    createAndOpenPopup();
  });

  return sectionElement;
};

export const createTableRow = (person) => {
  const trElement = document.createElement("tr");
  trElement.classList.add("table-row");
  trElement.setAttribute("id", person.id);

  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  if (person.id) {
    const dateCreate = new Date(person.createdAt);
    const dateUpdate = new Date(person.updatedAt);

    trElement.innerHTML += `
    <td class="table-row__id">${person.id}</td>
      <td>${person.surname} ${person.name} ${person.lastName}</td>
      <td>${dateCreate.toLocaleString("Ru", options)}</td>
      <td>${dateUpdate.toLocaleString("Ru", options)}</td>
      <td>${person.contacts}</td>
      <td>
      <button id="btn__edit-person" class="open-popup" >изменить</button>
      <button id="btn__delete-person" class="close__popup" >удалить</button>
    </td>
    `;

    const editBtn = trElement.querySelector("#btn__edit-person");
    const deleteBtn = trElement.querySelector("#btn__delete-person");

    editBtn.addEventListener("click", async () => {
      const personData = await getPersonById(person.id);
      createAndOpenPopup(personData);
    });

    deleteBtn.addEventListener("click", () => {
      createAndOpenDeletePersonPopup(person.id);
    });

    return trElement;

    return `
      <tr id="${person.id}" class="table-row">
        <td class="table-row__id">${person.id}</td>
        <td>${person.surname} ${person.name} ${person.lastName}</td>
        <td>${dateCreate.toLocaleString("Ru", options)}</td>
        <td>${dateUpdate.toLocaleString("Ru", options)}</td>
        <td>@@@</td>
        <td>
        <button id="btn__edit-person" class="open-popup" >изменить</button>
        <button id="btn__delete-person" class="close__popup" >удалить</button>
        </td>
      </tr>
    `;
  } else {
    console.error(
      "Невозможно добавить пользователя, проверьте данные!",
      `Данные на отправку: ${person}`
    );
  }
};

export const updateTable = async (personList) => {
  const tableTbody = document.querySelector("#table__tbody");

  // если таблица есть, мы её удаляем и заново пересобираем
  if (tableTbody) tableTbody.innerHTML = "";

  // сбор таблицы
  personList.forEach((person) => {
    tableTbody.append(createTableRow(person));
    
    // tableTbody.innerHTML += createTableRow(person);
  });
};

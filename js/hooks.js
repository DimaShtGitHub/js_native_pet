import { editPerson, getPersonList, setPerson } from "./api";
import { createTableRow, updateTable } from "./body";
import { closePopup } from "./popup";

export const useApiMethods = (form, method, data) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    if (method === "edit") {
      console.log("edit on!");

      await editPerson({
        id: data.id,
        name: formData.get("name"),
        surname: formData.get("surname"),
        lastName: formData.get("lastName"),
        contacts: data.contacts,
      });

      // closePopup();
    }

    // updateTable(await getPersonList());
    form.reset();
  });
};

export const createPersonHook = (form) => {
  const table = document.querySelector("#table__tbody");

  form.addEventListener("submit", async (e) => {
    console.log("on");
    e.preventDefault();
    const formData = new FormData(form);

    const newPerson = await setPerson({
      surname: formData.get("surname"),
      name: formData.get("name"),
      lastName: formData.get("lastName"),
    });

    table.innerHTML += createTableRow(newPerson);
    form.reset();
    closePopup();
  });
};

export const editPersonHook = (form, data) => {
  const table = document.querySelector("#table__tbody");
  const parrentElement = document.getElementById(data.id);
  console.log(parrentElement);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const oldChild = document.getElementById(`${data.id}`);
    const updatePerson = await editPerson({
      id: data.id,
      name: formData.get("name"),
      surname: formData.get("surname"),
      lastName: formData.get("lastName"),
      contacts: data.contacts,
    });

    // console.log(createTableRow(updatePerson));

    table.replaceChild(oldChild, createTableRow(updatePerson));

    // createTableRow(updatePerson);
    form.reset();
    closePopup();
  });
};

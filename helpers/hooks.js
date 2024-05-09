import { editPerson, getPersonList, setPerson } from "../api/api";
import { createTableRow, updateTable } from "../components/body/body";
import { closePopup } from "../components/popup/popup";

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

// Принимает форму и создает нового пользователя 
export const createPersonHook = (form, contacts) => {
  const table = document.querySelector("#table__tbody");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const personData = {
      surname: formData.get("surname"),
      name: formData.get("name"),
      lastName: formData.get("lastName"),
    }

    if(contacts?.length) {
      personData.contacts = contacts
    }
    
    const newPerson = await setPerson(personData);
    // вмонтировает нового пользователя в таблицу
    table.append(createTableRow(newPerson));
    // отчищает форму
    form.reset();
    // закрывает попап
    closePopup();
  });
};

export const editPersonHook = (form, data) => {
  const table = document.querySelector("#table__tbody");
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const updatePerson = await editPerson({
      id: data.id,
      name: formData.get("name"),
      surname: formData.get("surname"),
      lastName: formData.get("lastName"),
      contacts: data.contacts,
    });

    for(const child of table.children) {
      if(child.id === data.id) {
        child.replaceWith(createTableRow(updatePerson))
      }
    }
    
    form.reset();
    closePopup();
  });
};

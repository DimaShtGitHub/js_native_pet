const urlApi = "http://localhost:3000/api/clients";

// получить пользователя
export const getPersonById = async (id) => {
  const response = await fetch(`${urlApi}/${id}`);
  const data = await response.json();

  return data;
};

// получить список пользователей
export const getPersonList = async () => {
  const response = await fetch(urlApi);
  const data = await response.json();

  return data;
};

// удалить ползователя
export const deletePerson = async (id) => {
  console.log("delete person id: " + id);

  const response = await fetch(`${urlApi}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: id,
  });

  const data = response.json();
  return data;
};

// создать ползователя
export const setPerson = async (person) => {
  const response = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
  });
  const data = response.json();

  return data;
};

// изменить ползователя
export const editPerson = async (person) => {
  const response = await fetch(`${urlApi}/${person.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      surname: person.surname,
      name: person.name,
      lastName: person.lastName,
      contacts: person.contacts,
    }),
  });
  const data = response.json();

  // получаем переписанную карточку со всеми данными чтобы занново вмонтировать ее в таблицу
  return data;
};

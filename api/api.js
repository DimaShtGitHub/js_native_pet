const urlApi = "http://localhost:3000/api/clients";

// получить пользователя
export const getPersonById = async (id) => {
  try {
    const response = await fetch(`${urlApi}/${id}`);
    const data = await response.json();
  
    return data;
  } catch (error) {
    console.error('Error message:', error.message);
  }
};

// получить список пользователей
export const getPersonList = async () => {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
  
    return data;
  } catch (error) {
    console.error('Error message:', error.message);
  }
};

// удалить ползователя
export const deletePerson = async (id) => {
  try {
    const response = await fetch(`${urlApi}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: id,
    });
    
    const data = response.json();
    console.log("delete person id: " + id);
    return data;
    
  } catch (error) {
    console.error('Error message:', error.message);
  }
};

// создать ползователя
export const setPerson = async (person) => {
  try {
    const response = await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
    const data = response.json();
  
    return data;
    
  } catch (error) {
    console.error('Error message:', error.message);
  }
};

// изменить ползователя
export const editPerson = async (person) => {
  try {
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
  } catch (error) {
    console.error('Error message:', error.message);
  }
};

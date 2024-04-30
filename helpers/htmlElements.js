export const tableHeaderHtml = `
  <div class="body__container">
    <h1>Клиенты</h1>
    <div class="body__table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Фамилия Имя Отчество</th>
            <th>Дата и время создания</th>
            <th>Последние изменения</th>
            <th>Контакты</th>
            <th>Действия</th>
          </tr>
        </thead>

        <tbody id="table__tbody"></tbody>
      </table>
    </div>
  </div>

  <div id="btn__add-person" class="add-client__container ">
    <button class="add-client__container__btn open-popup" >
      <div class="add-client__container__btn-img">
      <img src="./assets/img/add-user.png" />
      </div>
      <div class="add-client__container__btn-text">Добавить клиента</div>
    </button>
  </div>
`;

export const popupBody = `
  <div class="popup">
    <div class="popup__title">
      <p class="popup__title__text">Изменить данные</p>
      <p class="popup__title__id">ID: </p>
      <div id="btn__close-popup" class="close-popup">X</div>
    </div>

    <form id="popup-form" class="popup-form">
      <label class="popup-form__label">Фамилия</label>
      <input
        id="input-surname"
        type="text"
        class="popup-form__input"
        name="surname"
      />

      <label class="popup-form__label">Имя</label>
      <input
        id="input-name"
        type="text"
        class="popup-form__input"
        name="name"
      />

      <label class="popup-form__label">Отчество</label>
      <input
        id="input-lastName"
        type="text"
        class="popup-form__input"
        name="lastName"
      />
    </form>

    <div class="popup__footer">
      <div class="popup__btn__add-person">
        Добавить контакт
      </div>
      <input
        form="popup-form"
        type="submit"
        class="popup__btn__save"
        value="Сохранить"
      />
      <a href="#">Удалить клиента</a>
    </div>
  </div>
`;

export const header = () => {
  const headerHtml = `
    <header class="header">
      <div class="header__box">
        <div class="header__box__label">scb.</div>
        <div class="header__box__search">
          <input
            class="header__box__search-input"
            placeholder="Введите запрос"
          />
        </div>
      </div>
    </header>
  `;

  return headerHtml;
};

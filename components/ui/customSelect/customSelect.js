import cls from './customSelect.module.css';

export const customSelect = (options) => {
  const container = document.createElement('select');
  container.classList.add(cls.container)

  options.forEach((el, index) => {
    const option = document.createElement('option')
    option.classList.add(cls.select__option)
    option.value = el
    option.text = el

    container.append(option)
  })


  return container
}
import cls from './inputContact.module.css';
import iconDel from './del.svg'
import { customInput, customSelect } from '../index';

export const listContact = [
  'Email', 'Facebook', 'Vk', 'Телефон', 'Другое'
]

export const inputContact = (name) => {
  const container = document.createElement('div');
  container.classList.add(cls.container)

  const select = customSelect(listContact)
  const input = customInput()
  input.name = name
  

  const btnClose = document.createElement('div');
  btnClose.classList.add(cls.btnClose)
  btnClose.innerHTML += `<img src="${iconDel}" alt="закрыть"/>`

  btnClose.addEventListener('click', () => {
    // удалить контакт на сервере и в ДОМ ДЕРЕВЕ
    // как собрать информацию из разных input и при нажатии кнопки сохранить отправить их вместе с данными пользователя
    console.log(select.value, input.value);
    // container.remove()
  })

  container.append(...[select, input, btnClose])
  return container
}
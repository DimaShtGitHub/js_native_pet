import cls from './addContact.module.css';
import iconSvg from '../../../assets/img/add_circle_outline.svg'
import { inputContact } from '..';

export const addContact = (fn) => {
  const container = document.createElement('div')
  container.classList.add(cls.addContact)
  const containerBtn = document.createElement('div')
  containerBtn.classList.add(cls.btn)

  const icon = document.createElement('img')
  icon.src = iconSvg
  icon.classList.add(cls.icon)


  const text = document.createElement('span')
  text.innerText = 'Добавить контакт'
  text.classList.add(cls.text)

  containerBtn.append(...[icon, text])

  // const btn = document.createElement('input');
  // btn.type = 'submit'
  // btn.value = 'Добавить контакт'
  // btn.classList.add(cls.text)

  // containerBtn.append(...[icon, btn])

  containerBtn.addEventListener('click', () => {
      if(container.children.length <= 5) {
        container.insertBefore(inputContact(container.children.length), containerBtn)
      }
  })

  container.append(...[containerBtn])
  
  return container
}
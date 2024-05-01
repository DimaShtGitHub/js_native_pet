import cls from './addContact.module.css';
import iconSvg from '../../../assets/img/add_circle_outline.svg'

export function addContact(fn) {
  const container = document.createElement('div')
  container.classList.add(cls.container)

  const icon = document.createElement('img')
  icon.src = iconSvg
  icon.classList.add(cls.icon)


  const text = document.createElement('span')
  text.innerText = 'Добавить контакт'
  text.classList.add(cls.text)

  container.append(...[icon, text])

  // container.addEventListener('click', () => {
  //   fn()
  // })
  return container
}
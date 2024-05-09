import { createPersonHook } from '../../helpers/hooks';
import { popupForm } from '../popupForm/popupForm';
import cls from './popupElement.module.css'

export const popupElement = () => {
  const form = popupForm()
  // createPersonHook(form)

  const container = document.createElement('div')
  container.classList.add('popup', 'active')

  const header = document.createElement('div')
  header.classList.add(cls['popup__title']);

  const headerText = document.createElement('p')
  headerText.classList.add(cls['popup__title__text'])
  headerText.innerText = 'Изменить данные'

  const headerId = document.createElement('p')
  headerId.classList.add(cls['popup__title__id'])
  headerId.innerText = 'ID: ';

  const headerBtnClose = document.createElement('div')
  headerBtnClose.classList.add(cls['close-popup'])
  headerBtnClose.id = 'btn_close-popup'
  headerBtnClose.innerText = 'X'

  headerBtnClose.addEventListener('click', () => {
    container.classList.remove('active')
  })

  header.append(...[headerText, headerId, headerBtnClose])

  const linkDeletePerson = document.createElement('a')
  linkDeletePerson.classList.add(cls['link__delete-person'])
  linkDeletePerson.href = '#'
  linkDeletePerson.innerText = 'Удалить клиента'

  container.append(...[header, form, linkDeletePerson])

  return container 
}
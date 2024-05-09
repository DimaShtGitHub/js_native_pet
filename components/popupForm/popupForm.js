import { createPersonHook } from '../../helpers/hooks';
import { addContact, buttonForm, inputForm } from '../ui';
import cls from './popupForm.module.css'

export const popupForm = () => {
  const btnSavePerson = buttonForm()
  const container = document.createElement('form');
  container.id = 'popup-form'
  container.classList.add(cls['popup-form']);
  const addContactBtn = addContact();

  container.append(...[
    inputForm('Фамилия', 'surname', 'input-surname'), 
    inputForm('Имя', 'name', 'input-name'), 
    inputForm('Отчество', 'lastName', 'input-lastName'),
    addContactBtn,
    btnSavePerson
  ]);

  btnSavePerson.addEventListener('submit', (e) => {

    e.preventDefault();
    const arrayContacts = []
    
    // перебирает все поля контаков чтобы достать значение
    addContactBtn.childNodes
      .forEach((el) => {
        if(el.childNodes[0].value) {
          arrayContacts.push({
            // значение выпадающего списка
            type: el.childNodes[0].value,
            // значение поля ввода
            value: el.childNodes[1].value,
          })
        }
      });

      createPersonHook(container, arrayContacts)
      console.log(123);
  })


  return container 
}
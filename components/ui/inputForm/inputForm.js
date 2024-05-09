import cls from './inputForm.module.css'


export const inputForm = (text, name, id) => {
  const container = document.createElement('div'),
    input = document.createElement('input'),
    label = document.createElement('label');
  
  container.classList.add(cls['input-form']);
  
  input.classList.add(cls['popup-form__input']);
  input.id = id;
  input.type = 'text';
  input.name = name;

  label.classList.add(cls['popup-form__label'])
  label.innerText = text
  
  container.append(...[label, input])

  return container
}
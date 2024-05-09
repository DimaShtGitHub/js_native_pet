import cls from './buttonForm.module.css'

export const buttonForm = () => {
  const container = document.createElement('div')
  const loader = document.createElement('span')
  const btn = document.createElement('input')
  
  loader.classList.add(cls.loader)

  container.classList.add(cls['popup__btn__save'])

  btn.classList.add(cls.btn)
  btn.type = 'submit'
  btn.value = 'Сохранить'
  container.form = 'popup-form'
  container.append(...[loader, btn])
  return container
}
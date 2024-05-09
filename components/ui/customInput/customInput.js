import cls from './customInput.module.css';

export const customInput = () => {
  const container = document.createElement('input');
  container.classList.add(cls.container)

  return container
}
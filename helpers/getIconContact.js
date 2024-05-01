export const getIconContact = (type, text) => {
  const imgElem = document.createElement('img')

  switch (type) {
    case 'Email':
      imgElem.src = '../assets/icons/mail.svg'
      imgElem.alt = 'mail img'

      return imgElem

    case 'Телефон':
      imgElem.src = '../assets/icons/phone.svg'
      imgElem.alt = 'phone img'
      return imgElem
      

    case 'Vk':
      imgElem.src = '../assets/icons/vk.svg'
      imgElem.alt = 'vk img'
      return imgElem
      
    case 'Facebook':
      imgElem.src = '../assets/icons/fb.svg'
      imgElem.alt = 'facebook img'
      return imgElem
      
    case 'Другое':
      imgElem.src = '../assets/icons/other.svg'
      imgElem.alt = 'other img'
      return imgElem
  }
  
  return 
}
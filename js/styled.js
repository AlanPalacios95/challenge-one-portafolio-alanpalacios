const openMenuBtn = document.querySelector('.menu__open')
const closeMenuBtn = document.querySelector('.menu__close')
const navList = document.querySelector('.menu__list')


const openMenu = () => {
  navList.style.display = 'block'
  closeMenuBtn.style.display = 'inline-block'
  openMenuBtn.style.display = 'none'
}


const closeMenu = () => {
  navList.style.display = 'none'
  closeMenuBtn.style.display = 'none'
  openMenuBtn.style.display = 'inline-block'
}


openMenuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)


if (window.innerWidth < 1024) {
  document.querySelectorAll('.menu__list', 'menu__item').forEach(navItem => {
    navItem.addEventListener('click', closeMenu)
  })
}

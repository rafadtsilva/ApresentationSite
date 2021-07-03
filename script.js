// ABRE E FECHA O MENU QUANDO CLICA NO HAMBURGER E X
const tagNav = document.querySelector('#header nav')
const classToggle = document.querySelectorAll('nav .toggle')

for (const element of classToggle) {
  element.addEventListener('click', function () {
    tagNav.classList.toggle('show')
  })
}

// QUANDO CLICAR EM UM ITEM DO MENU
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    tagNav.classList.remove('show')
  })
}

// COLOCAR UMA SOMBRA NO HEADER QUANDO DE SCROLL
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})

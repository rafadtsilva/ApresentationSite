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

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

// TESTIMONIALS SWIPER
const swiper = new Swiper('.swiper-container', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// SCROLL REVEAL: mostra elementos quando der scroll na página.
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,   #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links, footer .brand, footer .social
`,
  { interval: 100 }
)

// BUTTON BACK TO TOP
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  backToTop()
  changeHeaderWhenScroll()
})

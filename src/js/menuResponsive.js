function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

ScrollReveal().reveal('.box', { delay: 500 });
ScrollReveal().reveal('.info', { delay: 200 });
ScrollReveal().reveal('.showcase', { delay: 200 });
ScrollReveal().reveal('footer', { delay: 200 });
ScrollReveal().reveal('.top-box', { delay: 200 });

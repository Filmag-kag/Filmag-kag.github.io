const navButton = document.querySelector('.menubutton');
const toggleNav = () => {
  const navCon = document.querySelector('.nav-container');
  navCon.classList.toggle('navtoggled');
  navButton.classList.toggle('menu--open');
}
navButton.addEventListener('click',toggleNav);

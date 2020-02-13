const navButton = document.querySelector('.menu');
const toggleNav = () => {
  const navCon = document.querySelector('.nav-container');
  navCon.classList.toggle('navtoggled');
}
navButton.addEventListener('click',toggleNav);

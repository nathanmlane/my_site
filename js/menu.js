const menu = document.getElementById('menu-trigger');
const menuList = document.querySelector('.menu-list');
const close = document.getElementById('menu-close');

function openMenu() {
  menuList.style.display = `flex`;
  menuList.style.color = `#000`;
  close.style.display = `flex`;
  menu.style.display = `none`;
}

function closeMenu() {
  menuList.style.display = `none`;
  close.style.display = `none`;
  menu.style.display = `flex`;
}

menu.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

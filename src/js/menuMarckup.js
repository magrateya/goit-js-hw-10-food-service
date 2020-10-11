import menuItems from '../menu.json'
import marckupItems from '../templates/marckup.hbs'

const menuListEl = document.querySelector('.js-menu');

const menuMarckup = marckupItems(menuItems);
menuListEl.insertAdjacentHTML('beforeend', menuMarckup);
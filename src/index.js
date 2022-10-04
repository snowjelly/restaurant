import './style.css';
import addMenuContent from './menu';
import addHomeContent from './home';
import addContactUsContent from './contact';

console.log('Hello world');

const header = document.querySelector('header');

header.classList.add('header');
header.innerHTML = `
<h1>Papa Pizza's Pizzeria</h1>
<nav>
  <ul class="tab-list">
    <li id="home">Home</li>
    <li id="menu">Menu</li>
    <li id="contact">Contact</li>
  </ul>
</nav>
`

const tabList = document.querySelector('.tab-list');
tabList.addEventListener('click', function (e) {
  if (e.target.id === 'home') {
    addHomeContent();
  }
  else if (e.target.id === 'menu') {
    addMenuContent();
  }
  else if (e.target.id === 'contact ') {
    addContactUsContent();
  }
});

const tabContainer = document.createElement('div');
tabContainer.classList.add('tab-container');

addHomeContent();
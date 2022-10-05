import './style.css';
import addMenuTabContent from './menu';
import addHomeTabContent from './home';
import addContactTabContent from './contact';

console.log('Hello world');

const header = document.querySelector('header');

header.classList.add('header');
header.innerHTML = `
<h1>Papa Pizza's Pizzeria</h1>
<nav>
  <ul class="tab-list">
    <li id="home" class="cover">Home</li>
    <li id="menu">Menu</li>
    <li id="contact">Contact</li>
  </ul>
</nav>
`

const tabList = document.querySelector('.tab-list');
tabList.addEventListener('click', function (e) {
  if (e.target === tabList) return;
  const contentChild = document.querySelector('#content > div');

  if (e.target.id === 'home') {
    addHomeTabContent();
  }
  else if (e.target.id === 'menu') {
    addMenuTabContent();
  }
  else if (e.target.id === 'contact') {
    addContactTabContent();
  }
  contentChild.remove();
  for (let i=0;i<tabList.children.length; i++) {
    if (e.target.className === 'cover') return;
    tabList.children[i].classList.remove('cover');
  }
  e.target.classList.add('cover');
});

const tabContainer = document.createElement('div');
tabContainer.classList.add('tab-container');

addHomeTabContent();
import papaPizzaImage from './papa-pizza.jpg';

export default function addHomeTabContent() {
  const content = document.querySelector('#content');
  
  const hero = document.createElement('div');
  hero.classList.add('hero');
  hero.innerHTML = `
  <h2>
    Papa Pizza has been hard at work
  </h2>
  <p>
    Over the last 15 years Papa Pizza has cultivated a business that thrives on it's community.
  </p>
  <p class="signature">
    Papa knows best - Papa Pizza
  </p>`;

  const photographerElement = document.createComment(`<!--Photographed by Johan Bender on unsplash.com-->`);
  const papaPizza = new Image();
  papaPizza.src = papaPizzaImage;

  hero.appendChild(photographerElement);
  hero.appendChild(papaPizza);
  content.appendChild(hero);
}
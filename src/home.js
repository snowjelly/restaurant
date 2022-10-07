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
  </p>`;

  const heroInfo = document.createElement('div');
  heroInfo.classList.add('hero-info');

  const photographerElement = document.createComment(`<!--Photographed by Johan Bender on unsplash.com-->`);
  const papaPizza = new Image();
  papaPizza.src = papaPizzaImage;

  const heroSection = document.createElement('section');

  const heroParagraph = document.createElement('p');
  heroParagraph.textContent = `What makes our Pizza so great is it's rich, authentic ingredients,
  supported with the heart, soul, and the passion for Pizza that lies in each member of our team`;

  const heroSignature = document.createElement('p');
  heroSignature.classList.add('signature');
  heroSignature.textContent = `-Papa Pizza`;

  heroInfo.appendChild(photographerElement);
  heroInfo.appendChild(papaPizza);
  heroInfo.appendChild(heroSection);
  heroSection.appendChild(heroParagraph);
  heroSection.appendChild(heroSignature);
  hero.appendChild(heroInfo);
  content.appendChild(hero);
}
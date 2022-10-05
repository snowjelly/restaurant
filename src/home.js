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

  content.appendChild(hero);
}
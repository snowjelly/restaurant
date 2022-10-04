export default function addHomeContent() {
  const content = document.querySelector('#content');
  
  const div = document.createElement('div');
  div.innerHTML = `
  <h2>
    Papa Pizza has been hard at work
  </h2>
  <p>
    Over the last 15 years Papa Pizza has cultivated a business that thrives on it's community.
  </p>
  <p class="signature">
    Papa knows best - Papa Pizza
  </p>`;
  
  content.appendChild(div);

}
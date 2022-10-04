export default function addContactUsContent() {
  const content = document.querySelector('#content');
  
  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');
  contactInfo.innerHTML = `
  <h1>
    Contact Us
  </h1>
  <h2>
    Address: 1234 fake address drive, fake city, fake state
  </h2>
  <h3>
    Phone: (123)-456-7890
  </h3>
  <h3>
    Email: fakeemail@email.com
  </h3>
  <h3>
    Fax: (123)-456-7890
  </h3>`;

  content.appendChild(contactInfo);

}
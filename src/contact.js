export default function addContactTabContent() {
  const content = document.querySelector('#content');
  const contactInfoObj = {address:'1234 fake address drive, fake city, fake state', phone:'(123)-456-7890', email:'fakeemail@email.com', fax:'(123)-456-7890'};
  const contactInfo = document.createElement('div');

  contactInfo.classList.add('contact-info');
  contactInfo.innerHTML = `
  <h1>
    Contact Us
  </h1>
  <h2>
    Address: ${contactInfoObj.address}
  </h2>
  <h3>
    Phone: ${contactInfoObj.phone}
  </h3>
  <h3>
    Email: ${contactInfoObj.email}
  </h3>
  <h3>
    Fax: ${contactInfoObj.fax}
  </h3>`;

  content.appendChild(contactInfo);
}
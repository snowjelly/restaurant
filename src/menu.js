import cheesePizzaImage from './cheese-pizza.jpg';
import tripleMeatPizzaImage from './triple-meat.jpg';
import tomatoPizzaImage from './tomato-pizza.jpg';

const content = document.querySelector('#content');

const addFeaturedContent = () => {
  const featured = document.createElement('div');
  const imageContainer = document.createElement('div');

  imageContainer.classList.add('image-container');

  featured.classList.add('featured');
  featured.innerHTML = "<h2>Featured</h2>";
  featured.appendChild(imageContainer);

  const createFeaturedFood = (imageSrc, photographer, name, description) => {
    const imageContent = document.createElement('div');
    imageContent.classList.add('image-content');

    const photographerElement = document.createComment(`<!--Photographed by ${photographer} on unsplash.com-->`);

    const imageElement = new Image();
    imageElement.src = imageSrc;

    const nameElement = document.createElement('h3');
    const descriptionElement = document.createElement('p');
    
    nameElement.textContent = name;
    descriptionElement.textContent = description;

    imageContent.appendChild(photographerElement);
    imageContent.appendChild(imageElement);
    imageContent.appendChild(nameElement);
    imageContent.appendChild(descriptionElement);
    imageContainer.appendChild(imageContent);
  }

  createFeaturedFood(cheesePizzaImage, 'Ivan Torres', 'The Classic', "Papa Pizza's Classic Mozzarella Cheese");
  createFeaturedFood(tripleMeatPizzaImage, 'Fernando Andrade', 'Triple Meat', "Pepperoni, Ham, and Beef");
  createFeaturedFood(tomatoPizzaImage, 'Saahil Khatkhate', 'Tangy Twist', "Papa Pizza's Famous Tomato Pizza");

  content.appendChild(featured);
}

const addMenuCards = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.innerHTML = `<h2>Menu</h2>`;
  content.appendChild(menu);

  const menuCardContainer = document.createElement('div');
  menuCardContainer.classList.add('menu-card-container');
  menu.appendChild(menuCardContainer);

  const cardNames = ['Appetizers', 'Salads', 'Sandwiches', 'Pastas', 'Specialty Pizzas', 'Create Your Own', 'Beverages', 'Deserts'];

  for (let i=0;i<cardNames.length;i++) {
    const cardContent = document.createElement('div');
    cardContent.classList.add('menu-card-content');
    const cardNameElement = document.createElement('h3');
    cardNameElement.textContent = cardNames[i];

    cardContent.appendChild(cardNameElement);
    menuCardContainer.appendChild(cardContent);
  }
}

export default function addMenuTabContent() {
  addFeaturedContent();
  addMenuCards();
}
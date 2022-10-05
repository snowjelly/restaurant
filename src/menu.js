import cheesePizzaImage from './cheese-pizza.jpg';
import tripleMeatPizzaImage from './triple-meat.jpg';
import tomatoPizzaImage from './tomato-pizza.jpg';

const addFeaturedContent = () => {
  const content = document.querySelector('#content');
  const featured = document.createElement('div');
  const imageContainer = document.createElement('div');

  imageContainer.classList.add('image-container');

  featured.classList.add('featured');
  featured.innerHTML = "<h2>Featured items:</h2>";
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

export default function addMenuTabContent() {
  addFeaturedContent();
}
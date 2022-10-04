import cheesePizzaImage from './cheese-pizza.jpg';
import tripleMeatPizzaImage from './triple-meat.jpg';
import tomatoPizzaImage from './tomato-pizza.jpg';

export default function addFeaturedContent() {
  const content = document.querySelector('#content');
  const header = document.createElement('div');
  const featured = document.createElement('div');
  const imageContainer = document.createElement('div');

  header.classList.add('header');
  header.innerHTML = "<h1>Papa Pizza's Pizzeria</h1>"

  imageContainer.classList.add('image-container');

  featured.classList.add('featured');
  featured.innerHTML = "<h2>Featured items:</h2>";
  featured.appendChild(imageContainer);

  const createFeaturedFood = (imageSrc, name, description) => {
    const imageContent = document.createElement('div');
    imageContent.classList.add('image-content');

    const imageElement = new Image();
    imageElement.src = imageSrc;

    const nameElement = document.createElement('h3');
    const descriptionElement = document.createElement('p');
    
    nameElement.textContent = name;
    descriptionElement.textContent = description;

    imageContent.appendChild(imageElement);
    imageContent.appendChild(nameElement);
    imageContent.appendChild(descriptionElement);
    imageContainer.appendChild(imageContent);
  }

  createFeaturedFood(cheesePizzaImage, 'The Classic', "Papa Pizza's Classic Mozzarella Cheese");
  createFeaturedFood(tripleMeatPizzaImage, 'Triple Meat', "Pepperoni, Ham, and Beef");
  createFeaturedFood(tomatoPizzaImage, 'Tangy Twist', "Papa Pizza's Famous Tomato Pizza");


  content.appendChild(header);
  content.appendChild(featured);
}
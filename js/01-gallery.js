import { galleryItems } from './gallery-items.js';
// Change code below this line


//знаходимо всі елементи img тому юзаємо querySelectorAll
const galleryImages = document.querySelectorAll('.gallery__image'); 

//перебираємо всі елементи та змінюємо їх значення через forEach
galleryImages.forEach((image, index) => {
  image.dataset.source = galleryItems[index].original; 
  image.src = galleryItems[index].preview; 
  image.alt = galleryItems[index].description; 
});
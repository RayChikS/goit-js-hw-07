import { galleryItems } from './gallery-items.js';
// Change code below this line
import * as basicLightbox from 'basiclightbox'


//знаходимо всі елементи img тому юзаємо querySelectorAll
const galleryImages = document.querySelectorAll('.gallery__image'); 
//
const galleryLink = document.querySelector('.gallery__link')
//знаходимо галерею
const gallery = document.querySelector('ul.gallery')

//перебираємо всі елементи та змінюємо їх значення через forEach
galleryImages.forEach((image, index) => {
	image.src = galleryItems[index].preview; 
  image.dataset.source = galleryItems[index].original; 	
  image.alt = galleryItems[index].description; 
});
galleryLink.forEach((link, index) => {
	link.href = galleryItems[index].original;
});


//додаємо слухач до батьківського елемента
gallery.addEventListener('click', eventHandler);

//створюємо ф-цію для обробки натискання на елемент
function eventHandler(event) {
  
  const target = event.target;

  
  if (target.classList.contains('gallery__item')) {
    
		const imageUrl = target.querySelector('img').getAttribute('data-source');
		
		

		const instance = basicLightbox.create(`
    	<img src="${imageUrl}">
		`)
		instance.show()


  }
}
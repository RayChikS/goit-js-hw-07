import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImages = document.querySelectorAll('.gallery__image'); 

const gallery = document.querySelector('ul.gallery');




function createGalleryItem(previewSrc, originalSrc, description) {
  // Створення елемента <li> для галереї
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  // Створення посилання <a>
  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = originalSrc;

  // Створення зображення <img>
  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = previewSrc;
  galleryImage.dataset.source = originalSrc;
  galleryImage.alt = description;

  // Додавання <img> до <a>
  galleryLink.appendChild(galleryImage);

  // Додавання <a> до <li>
  galleryItem.appendChild(galleryLink);

	//Повертаємо елемент <li>
  return galleryItem;
}

//Створюємо ф-цію для завантаження зображень з масива
function createGallery() {

  galleryItems.forEach((item) => {
    const galleryItem = createGalleryItem(item.preview, item.original, item.description);
    gallery.appendChild(galleryItem);
  });
}
//Викликаємо ф-цію
createGallery();


var lightbox = new SimpleLightbox('.gallery a', { 
	captionsData: "alt",
  captionDelay: 250,
 });
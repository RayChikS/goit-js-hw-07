import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector('ul.gallery');




function createGalleryItem(previewSrc, originalSrc, description) {
	return `
	<li class="gallery__item">
  <a class="gallery__link" href="${originalSrc}">
    <img
      class="gallery__image"
      src="${previewSrc}"
      data-source="${originalSrc}"
      alt="${description}"
    />
  </a>
</li>
	`
}

//Створюємо ф-цію для завантаження зображень з масива
function createGallery(arr) {
	const markup = arr.map(item => createGalleryItem(item.preview, item.original, item.description)).join('');
	gallery.innerHTML = markup;
}
//Викликаємо ф-цію
createGallery(galleryItems);


const lightbox = new SimpleLightbox('.gallery a', { 
	captionsData: "alt",
  captionDelay: 250,
 });
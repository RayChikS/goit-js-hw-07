import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryImages = document.querySelectorAll('.gallery__image'); 

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
	console.log(markup);
  
	gallery.innerHTML = markup;
}
//Викликаємо ф-цію
createGallery(galleryItems);




gallery.addEventListener('click', eventHandler);

function eventHandler(event) {
	event.preventDefault();
  
  const target = event.target;

  
  if (target.nodeName !== 'IMG') {
    return
	}
	const imageUrl = target.getAttribute('data-source');
	const imageAlt = target.getAttribute('alt');
		
		const instance = basicLightbox.create(`
    	<img src="${imageUrl}" alt="${imageAlt}">
		`)
	instance.show()
	
}

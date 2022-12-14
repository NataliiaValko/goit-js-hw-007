import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const createItemGallery = ({ preview, original, description }) => {
  return `
  <li>
    <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a></li>`;
};

const createListGallery = array => {
  return `${array.map(el => createItemGallery(el)).join('')}`;
};

const renderGalleryToHTML = array => {
  galleryRef.insertAdjacentHTML('beforeend', createListGallery(array));
};

renderGalleryToHTML(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});

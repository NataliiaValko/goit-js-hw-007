import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const createItemGallery = ({ preview, original, description }) => {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
};

const createListGallery = array => {
  return `${array.map(el => createItemGallery(el)).join('')}`;
};

const renderGalleryToHTML = array => {
  galleryRef.insertAdjacentHTML('beforeend', createListGallery(array));
};

const onGalleryClick = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const closeModal = event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', closeModal);
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeModal);
      },
    }
  );

  instance.show();
};

renderGalleryToHTML(galleryItems);

galleryRef.addEventListener('click', onGalleryClick);

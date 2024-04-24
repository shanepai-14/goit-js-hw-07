import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
    AddImage(item.preview,item.original,item.description);
  });

  function AddImage(preview ,original,description){
    gallery.innerHTML += ` <li class="gallery__item">
    <a class="gallery__link" href="#">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
  }

  gallery.addEventListener('click',(e) => {

    if(e.target.tagName === 'IMG'){
        const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
    `)
    instance.show()
    }
  });
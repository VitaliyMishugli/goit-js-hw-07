import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const makeGalleryItemMarkup = ({ original, preview, description }) => {
  return ` 
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `;
};

// console.log(makeGalleryItemMarkup(galleryItems));

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join("");
// console.log(makeGalleryMarkup);
gallery.insertAdjacentHTML("beforeend", makeGalleryMarkup);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  //Створюємо модалку для одного зображення
  const instance = basicLightbox.create(`
      <img src="${e.target.src}" width="800" height="600">
  `);

  instance.show();
  if (instance.visible()) {
    window.addEventListener("keyup", (e) => {
      console.log(e.code);
      if (e.code === 'Escape') {
        instance.close();
      }
    });
  }
});



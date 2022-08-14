import { galleryItems } from "./gallery-items.js";
// Change code below this line


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

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join("");
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



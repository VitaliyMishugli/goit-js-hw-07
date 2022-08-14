import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const makeGalleryItemMarkup = ({ original, preview, description }) => {
  return `
    <a href="${original}" class="gallery__item">
      <img class="gallery__image" src="${preview}" alt="${description}" title="The nice picture"/>
    </a>
  `;
};

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join("");
gallery.insertAdjacentHTML("beforeend", makeGalleryMarkup);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (instance.visible()) {
    window.addEventListener("keyup", (e) => {
      console.log(e.code);
      if (e.code === "Escape") {
        instance.close();
      }
    });
  }
});

var lightbox = new SimpleLightbox(".gallery a",
  {  
  captionsData: 'alt',
  captionDelay: 250,
  }
);

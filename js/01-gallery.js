import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", addItemGallery());

function addItemGallery() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
              <a class="gallery__link" href="large-image.jpg">
              <img
              class="gallery__image"
              src="${preview}"
              data-source="large-image.jpg"
              alt="Image ${description}"
              />
              </a>
              </div>`;
    })
    .join("");
}

// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();

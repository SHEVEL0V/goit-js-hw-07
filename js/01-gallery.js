import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

let lightbox = null;

function addItemGallery() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
              <a class="gallery__link" href=${original} onclick="return false">
              <img
              class="gallery__image"
              src=${preview}
              data-source=${original}
              alt= ${description}
              />
              </a>
              </div>`;
    })
    .join("");
}

function onModal(e) {
  lightbox = basicLightbox.create(
    `<img src=${e.target.dataset.source} width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener("keydown", modalCloseEsc);
      },
      onClose: () => {
        document.removeEventListener("keydown", modalCloseEsc);
      },
    }
  );

  if (e.target.nodeName === "IMG") {
    lightbox.show();
  }
}

function modalCloseEsc(e) {
  if (e.code === "Escape") {
    lightbox.close();
  }
}

galleryEl.insertAdjacentHTML("beforeend", addItemGallery(galleryItems));
galleryEl.addEventListener("click", onModal);

const images = document.querySelectorAll("img[data-src]");

images.forEach((img) => {
  img.addEventListener("click", () => {
    const largeImageSrc = img.getAttribute("data-src");
    openLightbox(largeImageSrc);
  });
});

function openLightbox(src) {
  
  window.open(src, "_blank");
}

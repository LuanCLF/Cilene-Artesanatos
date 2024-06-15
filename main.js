// lightbox.js
const images = document.querySelectorAll("img[data-src]");

images.forEach((img) => {
  img.addEventListener("click", () => {
    const largeImageSrc = img.getAttribute("data-src");
    openLightbox(largeImageSrc);
  });
});

function openLightbox(src) {
  // Lógica para exibir a imagem ampliada (por exemplo, em uma sobreposição)
  // Você pode criar uma sobreposição personalizada ou usar uma biblioteca como Lightbox2.
  // Exemplo simplificado:
  window.open(src, "_blank"); // Abre a imagem em uma nova guia
}

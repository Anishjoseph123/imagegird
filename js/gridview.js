document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".grid-item img");

  images.forEach((img) => {
    img.loading = "lazy";
  });
});

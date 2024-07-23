function loadRandomImage() {
  fetch("images.json")
    .then((response) => response.json())
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const selectedImage = data[randomIndex];

      const imageElement = document.getElementById("random-image");
      const textElement = document.getElementById("image-text");
      const imageContainer = document.getElementById("image-container");

      imageElement.src = selectedImage.imagePath;
      textElement.innerText = selectedImage.text;
      imageContainer.style.display = "flex";
    })
    .catch((error) => console.error("Error loading the images:", error));
}

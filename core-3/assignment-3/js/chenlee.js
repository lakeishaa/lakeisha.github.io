const photos = Array.from(document.querySelectorAll('li#letters'));

const scalingImage = (currentPhoto => {
  currentPhoto.classList.add("scaleImage");
  
  setTimeout(() => {
    currentPhoto.classList.remove('scaleImage');
  }, 4500);
})

photos.map((photo) => {
  photo.addEventListener('click', Event => {
    scalingImage(Event.target);
  })
});


//Image Gallery 1
let galleryImages = document.querySelectorAll('.gallery');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

galleryImages.forEach(function(image, index){
    image.onclick = function() {
        getLatestOpenedImg = index + 1;

        let container = document.body;
        let newImgWindow = document.createElement('div');
        container.appendChild(newImgWindow);
        newImgWindow.setAttribute('class', 'imb-window');
        newImgWindow.setAttribute('onclick', 'closeImg()');

         
    }
})
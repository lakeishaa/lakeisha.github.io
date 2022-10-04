const photos = Array.from(document.querySelectorAll('#photo'));

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

// flickering

$(document).ready(function () {
  var img = $('#my-image')[0];
  var canvas = document.createElement('canvas');
  canvas.width = $(img).outerWidth();
  canvas.height = $(img).outerHeight();
  canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
  $('#here').css({ 'width': (img.width * 2) + 'px', 'height': (img.height * 2) + 'px' });

  var txtShadow = '';
  for (var i = 0; i < img.height; i++)
  {
    for (var ii = 0; ii < img.width;ii++)
    {
      var pixelData = canvas.getContext('2d').getImageData(ii, i, 1, 1).data;
      var r = pixelData[0];
      var g = pixelData[1];
      var b = pixelData[2];
      var a = pixelData[3];
      txtShadow += ((ii * 2)-1) + 'px ' + ((i * 2) - 1) + 'px rgba(' + r + ',' + g + ',' + b + ',' + a + '),';
    }

  }

  var txt = txtShadow.substring(0, txtShadow.length - 1);
  $('#here').css({'text-shadow': txt});

  $('#my-image').remove();
});
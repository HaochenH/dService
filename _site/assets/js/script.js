document.addEventListener('DOMContentLoaded', function() {
    // set image directory
    var imageDir = '../assets/images/';
    
    // get image element
    var img = document.getElementById('auto-change-image');
    
    // set image list
    var images = [
      'unsplash-lFv0V3_2H6s.avif',
      'unsplash-speed-sb7RUrRMaC4.avif',
    ];
    
    // preload images
    var imageObjects = [];
    for (var i = 0; i < images.length; i++) {
      var imgObj = new Image();
      imgObj.src = imageDir + images[i];
      imageObjects.push(imgObj);
    }
    
    // set index and timer
    var currentIndex = 0;
    var timer = setInterval(changeImage, 6000);
    
    // change image function
    function changeImage() {
      // fade-out
      img.style.opacity = 0;
      img.style.transition = 'opacity 0.8s ease-out';
      setTimeout(function() {
        // increment index and loop back to start if at end
        currentIndex = (currentIndex + 1) % images.length;
        img.src = imageDir + images[currentIndex];
        // fade-in
        img.style.opacity = 1;
        img.style.transition = 'opacity 0.8s ease-in';
      }, 800);
    }
  });
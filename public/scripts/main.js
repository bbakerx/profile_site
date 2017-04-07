


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/webdevelopment.jpg') {
      myImage.setAttribute ('src','images/brian_baker_drums.jpg');
    } else {
      myImage.setAttribute ('src','images/webdevelopment.jpg');
    }
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/webdevelopment.jpg') {
      myImage.setAttribute ('src','images/brian_baker_drums.jpg');
    } else {
      myImage.setAttribute ('src','images/webdevelopment.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'You Rock!, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'You Rock!, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

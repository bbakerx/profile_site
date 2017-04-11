var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >= 18){
  greeting = 'Good evening!';
} else if (hourNow >= 12 && hourNow < 18) {
  greeting = 'Good afternoon!';
}  else if (hourNow >= 0 && hourNow < 12) {
  greeting = 'Good morning!';
} else  {
  greeting = 'Welcome!';
}

var greetingPosition = document.getElementById('greeting');
greetingPosition.innerHTML = "<h3>" + greeting + "</h3>";

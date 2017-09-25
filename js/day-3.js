
// promps user for name
var userName = prompt("Hello there, what is your name?");

// promps user for favorite color and returns response
var color = prompt("What is your favorite color?");
switch (color) {
  case 'red':
    color = "red";
    break;
  case 'orange':
    color = "orange";
    break;
  case 'yellow':
    color = "yellow";
    break;
  case 'green':
    color = "green";
    break;
  case 'blue':
    color = "blue";
    break;
  case 'pink':
    color = "pink";
    break;
  case 'purple':
    color = "purple";
    break;
  case 'black':
    color = "black";
    break;
  case 'white':
    color = "white";
    break;
  case 'grey':
    color = "grey";
    break;
  default:
    color = "unique";

}
alert(userName + ", your favorite color is " + color + ".");

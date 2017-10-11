// Asks for the user's first name and logs it
var userFirstName = prompt("What is your first name?");
console.log(userFirstName);


// Asks for user's last name and alerts it
var userLastName = prompt("What is your last name?");
alert("Your last name is " + userLastName + ".");

// Asks for age and alerts confim of correct  response
var userBirthday = prompt("When is your birthday?");
var ageResponse;
var confirmation = confirm("Press okay if your birthday is on " + userBirthday + ". Press cancel if your birthday is incorrect.");
if (confirmation == true) {
    ageResponse = alert("Your birthday is on " + userBirthday + ".");
} else {
    var userBirthday = prompt("When is your birthday?");
    var confirmation = confirm("Press okay if your birthday is on " + userBirthday + ". Press cancel if your birthday is incorrect.");
    if (confirmation == true) {
        ageResponse = alert("Your birthday is on " + userBirthday + ".");
    } else {
      ageResponse = alert("Please reload the page and try again.");
    }
}
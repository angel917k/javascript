// Asks for the user's first name and logs it
var userFirstName = prompt("What is your first name?");
console.log(userFirstName);


// Asks for user's last name and alerts it
var userLastName = prompt("What is your last name?");
alert("Your last name is " + userLastName);

// Asks for age and alerts correct response
var ageResponse;
var confirmation = confirm("Press okay if you are at least 21 years of age.");
if (confirmation == true) {
    ageResponse = alert("You are at least 21 years of age as of " + Date());
} else {
    ageResponse = alert("As of, " + Date() + " you are not 21 years of age");
}

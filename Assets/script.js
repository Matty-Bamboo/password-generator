// click the button to generate a new password
// Once clicked a series of prompts for password criteria
// Length (between 8 - 128)
// Character types confirm or not, lowercase, uppercase, numeric, and/or special characters
// With each answer, confirmation and at least one should be selected
// Once all prompts are answered, then a password is generated and displayed to the page



// Assignment Code
var generateBtn = document.querySelector("#generate");

var number
var uppercase
var lowercase
var specialChar

// Array of characters available for random password
number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
specialChar = ["!", "#", "&", "$", "%", "&", "@", "/", "<", ">", "?","~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function Range(begin, end) {
  this.low = begin;
  this.hi = end;
  this.has = function(n) {
    return this.low <= n <= this.hi;
  }
}

var length ='';
var range = new Range(8,128);

function generatePassword() {
length = prompt("Choose the length of your password between 8 - 128 characters");
  if (!length) {
    alert("Please choose a number between 8 - 128");
}
  else if (length < 8 || length > 128) {
    Length = prompt("Choose the length of your password between 8 - 128 characters") 
}
  else {
    number = confirm ("Do you want your password to have numeric characters?");
    uppercase = confirm ("Do you want your password to have UPPERCASE characters?");
    lowercase = confirm ("Do you want your password to have lowercase characters?");
    specialChar = confirm ("Do you want your password to have special characters?");
}
 if (number === false && uppercase === false && lowercase === false && specialChar === false) 
    alert("At least one character type must be selected");
}


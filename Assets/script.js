// click the button to generate a new password
// Once clicked a series of prompts for password criteria
// Length (between 8 - 128)
// Character types confirm or not, lowercase, uppercase, numeric, and/or special characters
// With each answer, confirmation and at least one should be selected
// Once all prompts are answered, then a password is generated and displayed to the page



// Assignment Code
var generateBtn = document.querySelector("#generate");

// characters available for random password
var number = '1234567890';
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar = '!#&$%&@/<>?~';

var confirmNumber
var confirmUppercase
var confirmLowercase
var confirmSpecChar

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);


// Experimented with Range in Object but it didn't work for pw length
function Range(begin, end) {
  this.low = begin;
  this.hi = end;
  this.has = function(n) {
    return this.low <= n <= this.hi;
  }
}

var length = '';
var range = new Range(8,128);

function userSelection() {
length = prompt("Choose the length of your password between 8 - 128 characters");
  if (length < 8 || length > 128 || length == null) {
    return alert("Please choose a number between 8 - 128");
}  
if (length >=8 || length <=128) {
    console.log(length);
    confirmNumber = confirm ("Do you want your password to have numeric characters?");
    console.log(confirmNumber);
    confirmUppercase = confirm ("Do you want your password to have UPPERCASE characters?");
    console.log(confirmUppercase);
    confirmLowercase = confirm ("Do you want your password to have lowercase characters?");
    console.log(confirmLowercase);
    confirmSpecChar = confirm ("Do you want your password to have special characters?");
    console.log(confirmSpecChar);
 if (confirmNumber === false && confirmUppercase === false && confirmLowercase === false && confirmSpecialChar === false) 
    return alert("At least one character type must be selected");
}
// Assign Characters for password use based on "length" and True/false for variables
var userAnswer = {
  length : length,
  number: confirmNumber,
  alphaUpper: confirmUppercase,
  alphaLower: confirmLowercase,
  specialChar: confirmSpecChar,
  }
  return userAnswer;
}
function generatePassword() {
    var pwd = '';
    var userInfo = userSelection();
    console.log(userInfo);
    
    for (var i = 0; i < 1; ++i) {
      pwd += character.charAt(Math.floor(Math.random() * userInfo.length));
  }
  return pwd;
}

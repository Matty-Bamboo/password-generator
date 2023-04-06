// click the button to generate a new password
// Once clicked a series of prompts for password criteria
// Length (between 8 - 128)
// Character types confirm or not, lowercase, uppercase, numeric, and/or special characters
// With each answer, confirmation and at least one should be selected
// Once all prompts are answered, then a password is generated and displayed to the page



// Assignment Code
var generateBtn = document.querySelector("#generate");

// characters available for random password
var length = "";
var number = '1234567890';
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar = '!#&$%&@/<>?~';

// user confirmation of user selection variables
var confirmNumber
var confirmUppercase
var confirmLowercase 
var confirmSpecChar

// convert string to array
var newalpahArray = alphaUpper.split("")
var newlowerArray = alphaLower.split("")
var newspecCharArray = specialChar.split("")
var newnumberArray = number.split("")

charArray =[];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);

// Deterining the users selections for password
function userSelection() {
length = prompt("Choose the length of your password between 8 - 128 characters");
  if (length < 8 || length > 128 || length == null) {
    alert("Please choose a number between 8 - 128");
    return;
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
}

function getInfo() {
  console.log(confirmNumber);
  if (confirmNumber) {
    console.log(newnumberArray);
    }
  console.log(confirmUppercase); 
  if (confirmUppercase) {
    console.log(newalpahArray);
    }
  console.log(confirmLowercase);
  if (confirmLowercase) {
    console.log(newlowerArray);
    }
  console.log(confirmSpecChar);
  if (confirmSpecChar) {
    console.log(newspecCharArray);
    }
  
  }
 
function CharacterSet() {
  charArray = [];
  length =console.log(length);
 if (newalpahArray) {
    charArray = charArray.concat(newalpahArray);
  }
  if (newlowerArray) {
    charArray = charArray.concat(newlowerArray);
  }
  if (newspecCharArray) {
    charArray = charArray.concat(newspecCharArray);
  }
 if (newnumberArray) {
   charArray = charArray.concat(newnumberArray);
  }
  return charArray
}

function generatePassword() {
  var password = "";
  var length = "";
  var charArray = "";
  for (let index = 0; index < length; index++) {
    var randomIndex = Math.floor(Math.random() * charArray.length);
    password = password + charArray[randomIndex]
  }
  return password
}

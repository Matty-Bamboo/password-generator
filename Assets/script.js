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

var charArray =[];
var generatedPwd =[];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Deterining the users selections for password
function userSelection() {
length = prompt("Choose the length of your password between 8 - 128 characters");
  if (length < 8 || length > 128 || length == null) {
    alert("Please choose a number between 8 - 128");
  userSelection();
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
    console.log(confirmSpecChar);}
    
 if (confirmNumber ||  confirmUppercase || confirmLowercase || confirmSpecChar ) {
  return 
 }
 else {
  alert("At least one character type must be selected");
  userSelection();
 }
}

function characterSet() {
  charArray = [];
  length = console.log(length);
  if (confirmUppercase) {
  let randomIndex = Math.floor(Math.random() * newalpahArray.length);
  generatedPwd.push(newalpahArray[randomIndex]);
  charArray = charArray.concat(newalpahArray);
  }
  if (confirmLowercase) {
  let randomIndex = Math.floor(Math.random() * newlowerArray.length);
  generatedPwd.push(newlowerArray[randomIndex]);
  charArray = charArray.concat(newlowerArray);
  }
  if (confirmSpecChar) {
  let randomIndex = Math.floor(Math.random() * newspecCharArray.length);
  generatedPwd.push(newspecCharArray[randomIndex]);
  charArray = charArray.concat(newspecCharArray);
  }
  if (confirmNumber) {
  let randomIndex = Math.floor(Math.random() * newnumberArray.length);
  generatedPwd.push(newnumberArray[randomIndex]);
  charArray = charArray.concat(newnumberArray);
  }
}

function generatePassword() {
  var password = "";
  userSelection();
  characterSet();
  var newLen = length - generatedPwd.length

  for (let index = 0; index < newLen; index++) {
    var randomIndex = Math.floor(Math.random() * charArray.newLen);
   generatedPwd.push( charArray[randomIndex] )
  }

  return generatedPwd.join("")
}

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

var newalpahArray = alphaUpper.split("")
var newlowerArray = alphaLower.split("")
var newspecCharArray = specialChar.split("")
var newnumberArray = number.split("")


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);


var length = '';

// Deterining the users selections for password
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
// record console log values 
var userAnswer = {
  length : length,
  number: confirmNumber,
  alphaUpper: confirmUppercase,
  alphaLower: confirmLowercase,
  specialChar: confirmSpecChar,
  }
  return userAnswer;
}

function getInfo() {
  console.log(confirmNumber);
  console.log(confirmUppercase);
  console.log(confirmLowercase);
  console.log(confirmSpecChar);
  if (confirmUppercase) {
    console.log(newalpahArray)
    }
  if (confirmLowercase) {
    console.log(newlowerArray)
  }
  if (confirmSpecChar) {
    console.log(newspecCharArray)
  }
  if (confirmNumber) {
    console.log(newnumberArray)
  }
 
}


var pwd = '';
document.getElementById("password").innerHTML = pwd;

function generatePassword() {
    
    var userInfo = userSelection();
    console.log(userInfo);
    var characters = (number + alphaLower + alphaUpper + specialChar);
    
    for (var i = 0; i < 1; ++i) {
      pwd += characters.charAt(Math.floor(Math.random() * userInfo.length));
  }
  return pwd;
}

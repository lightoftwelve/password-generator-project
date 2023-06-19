// Choices for character sets for password
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbericChars = "0123456789";
var specialChars = "~!@#$%^&*()_+-=[]{}|:;<,?>./";

// Start of function to generate the password
function generatePassword() {
  var password = ""; //Initialized an empty string to hold the generated password
  var selectedChars = ""; // Initialized an empty string to hold selected characters for the password

  var passwordLength = prompt("Please enter a password length between 8 - 128 characters:"); // Asks the user to input a password length

  // An alert is returned if the length is not between 8 and 128 characters:
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    alert("You must choose a password length between 8 and 128 characters🫣");
    return password;
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
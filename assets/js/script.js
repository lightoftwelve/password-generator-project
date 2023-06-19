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

  // An alert is returned if the input is not a number (isNaN) or (||) the length is not between 8 and 128
  if (isNaN(passwordLength) || !(passwordLength >= 8 && passwordLength <= 128)) {
    alert("You must choose a password length between 8 and 128 characters🫣");
    return password;
  }

  // Ask user for character types and add to selectedChars string
  // Appends strings to the selectedChars string which results in a combined set of characters
  if (confirm("Include lowercase characters?")) selectedChars += lowercaseAlphabet;
  if (confirm("Include uppercase characters?")) selectedChars += uppercaseAlphabet;
  if (confirm("Include numbers?")) selectedChars += numbericChars;
  if (confirm("Include special characters?")) selectedChars += specialChars;

  // Alert for if no character types (selectedChars) are selected
  if (selectedChars === "") {
    alert("You must select at least one character type🥺");
    return password;
  }

  // Generates password randomly
  // The `for` loop runs the number of times equal to passwordLength. During each iteration, one character is randomly selected from selectedChars and added to the password. The loops ends when the desired length of the password is reached and is made up of randomly selected characters.
  for (var i = 0; i < passwordLength; i++) {
    password += selectedChars[Math.floor(Math.random() * selectedChars.length)];
  }
  return password;
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
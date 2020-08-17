// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword); 


// Prompt for length of password
  var passlength = prompt("Password length between 8-128 characters"); {
    if (passlength < 8 || passlength > 128) alert("Error");
    else (console.log(passlength));
  }   


// Prompt for character types
  var passtype = prompt("Chose lowercase, uppercase, numbers, special, or characters for all"); {
   if (passtype === ([characters], [lowercase], [uppercase], [numbers], [special])) console.log(passtype);
    else alert("Error");
  }

// Criteria for generating password
  if (passlength && passtype === true); {
    writePassword();
  }


// Arrays for randomization 
var characters = [lowercase, uppercase, numbers, special]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/", "<", ">", "~", "+", "-", "_", "=", ";", ":"] 



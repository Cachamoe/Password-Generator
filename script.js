// Create Button 

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);
function generatePassword() {

  // Arrays for randomization  

  var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
  var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numbers = ["0123456789"];
  var special = ["!@#$%^&*()_+~`|}{[]:;?><,./-="];

  // Prompt for length of password

  var passlength = prompt("Password length between 8-128 characters"); {
    if (passlength < 8 || passlength > 128) alert("Error");
    else (console.log(passlength));
  }
    if (passlength < 8 || passlength > 128) {
    generateBtn.addEventListener("fullscreenerror")
  }
  // Get id's for imputs

  var lowercaseInput = document.getElementById("lowercase");
  var uppercaseInput = document.getElementById("uppercase");
  var punctuationInput = document.getElementById("punctuation");
  var numbersInput = document.getElementById("numbers");

  var userpassword = "";
  var generatingpassword = "";

  // If statements to get user selection

  if (lowercaseInput.checked) {
    userpassword += lowercase;
  }
  if (uppercaseInput.checked) {
    userpassword += uppercase;
  }
  if (punctuationInput.checked) {
    userpassword += special;
  }
  if (numbersInput.checked) {
    userpassword += numbers;
  }


  // For loop that connects to passlength (concotonate with random userpassword)

  for (var i = 0; i < passlength; i++) {
    generatingpassword += userpassword.charAt(Math.floor(Math.random() * userpassword.length));

  }

  // Display value of new password

  document.getElementById("password").value = generatingpassword;


  return generatingpassword;
}
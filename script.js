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

// options that the computer can pick from
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*()[]/+=`|";
var possibleResult = "";

// Generating the password
function generatePassword () {
  var result = "";
  var length = window.prompt("How long would you like your password to be?");
  if(isNaN(length)){
    alert("Please choose a number between 8 and 128!");


    return generatePassword()
  }
// What happens if the user doesnt pick a number from 8 - 128
if (length < 8 || length > 128) {
  alert ("You must chose a number between 8 and 128!");
  return generatePassword()
}
// Ask the user to confirm what they would like in their password
var hasupperCase = confirm("Would you like your password to have uppercase letters?");
var haslowerCase = confirm ("Would you like your password to have lowercase letters?");
var hasnumbers = confirm ("Would you like your password to include numbers?");
var hasSpecial =  confirm ("Would you like your password to include special characters?");

// If user doesnt pick one of the character types, it'll go back to the main window prompt
if (!hasupperCase&&!haslowerCase&&!hasnumbers&&!hasSpecial){
  alert("Please chose one of the character types!");
  return generatePassword()
}

for (var i = 0; i < length; i++) {
  var random = Math.floor (Math.random() * possibleResult.length);
}

if(hasupperCase){
  possibleResult += upperCase
}

if (haslowerCase){
  possibleResult += lowerCase
}
 
if (hasSpecial) {
  possibleResult += special
}

if (hasnumbers) {
  possibleResult += numbers
}

for (var i = 0; i < length; i++) {
  result += possibleResult.charAt(Math.floor(Math.random() * possibleResult.length));
}
return result;
}

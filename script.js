// Assignment Code
var generateBtn = document.querySelector("#generate");

// create character banks
var alphabetLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(alphabetLowercase);
var alphabetCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(alphabetCaps);
var num = "1234567890".split("");
console.log(num);
var sym = "~!@#$%^&*<>?()+=:;,.".split("");
console.log(sym);
var majorBank = "~!@#$%^&*<>?()+=:;,1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
  ""
);
console.log(majorBank);

// Write password to the #password input
// numbers
// symbols
// caps
// lowercase
// function will pull arguments from higher scope, not in the function below
function generatePassword() {
  var passwordLength;

  // can put the passwordLength function here
  passwordLength = prompt("How long do you want your password to be?");
  if (passwordLength > 128 || passwordLength < 8) {
    alert(
      "Please choose a new number between 8 - 128 for your password length."
    );
    return generatePassword();
  }
  var numbers = false;
  var symbols = false;
  var caps = false;
  var lowercase = false;
  var confirms = 0;
  // newPassword will be filled with the randomly selected password
  var newPassword = [];
  // If true must contain at least one of
  // if true add one from the array or string from each character bank
  // if yes it will be (passwordLength - number of choices
  // counter of # of confirms, checks to see of var numbers, symbols, caps, lowercase is true, and if true ads one of that particular element to the password length
  // Set to false as default but if user presses ok it will change value to true used in "if" statements
  numbers = confirm("Do you want numbers in your password?");
  console.log(numbers);
  symbols = confirm("Do you want symbols in your password?");
  console.log(symbols);
  caps = confirm("Do you want caps in your password?");
  console.log(caps);
  lowercase = confirm("Do you want lowercase in your password?");
  console.log(lowercase);

  // we need a random function (MAath.random) to randomly pull the characters from the bank. This is a counter and subtracts the elements from the banks and add to password to fulfill password requirements
  if (numbers) {
    confirms = confirms + 1;
  }
  if (symbols) {
    confirms = confirms + 1;
  }
  if (caps) {
    confirms = confirms + 1;
  }
  if (lowercase) {
    confirms = confirms + 1;
  }
  console.log(confirm);

  // The following are the conditionals will randomly pull from each of the four banks and oushed to end of newPassword
  if (numbers) {
    newPassword.push(num[randomPull(num)]);
  }
  if (symbols) {
    newPassword.push(sym[randomPull(sym)]);
  }
  if (caps) {
    newPassword.push(alphabetCaps[randomPull(alphabetCaps)]);
  }
  if (lowercase) {
    newPassword.push(alphabetLowercase[randomPull(alphabetLowercase)]);
  }
  console.log(newPassword);

  //Must include (at a min) one form each bank, for finding the number of times to pull from the majorBank, which is a minimum of 8 characters
  for (var i = 0; i < passwordLength - confirms; i++) {
    newPassword.unshift(majorBank[randomPull(majorBank)]);
  }
  // Array of newPassword
  console.log(newPassword);
  newPassword = newPassword.join("");
  // String of newPassword
  console.log(newPassword);
  return newPassword;
}
// string is a parameter or placeholder for what you will put in when you add anything with a length property
function randomPull(string) {
  return Math.floor(Math.random() * string.length);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// create a function called generateassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

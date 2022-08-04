// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate random variables //
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list [randomInt(list.length)]
}

// First Password Question & Requirements //
function generatePassword() {

  var userInput = window.prompt("How many characters would you like your password to be?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Invalid")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8-128 characters.")
    return
  }
  
 // Further Questions User Sees //
  var userWantsNumbers = window.confirm("Would you like numbers?")
  var userWantsSymbols = window.confirm("Would you like symbols?")
  var userWantsLowercase = window.confirm("Would you like lowercase letters?")
  var userWantsUppercase = window.confirm("Would you like uppercase letters?")

 // List of Possible Password Outcomes if User selects "Okay" for the given variable // 
  var numberlist = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbollist = ["!", "@", "#", "$", "%", "&", "*"]
  var lowercaselist = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaselist = []

 // Options for password - Numbers, Symbols, Lowercase, Uppercase //
  var optionsCart = []

  for (var i = 0; i < lowercaselist.length; i++) {
    uppercaselist = lowercaselist[i].toUpperCase()
  }

  if (userWantsNumbers === true) {
    optionsCart.push(numberlist)
  }

  if (userWantsSymbols === true) {
    optionsCart.push(symbollist)
  }

  if (userWantsLowercase === true) {
    optionsCart.push(lowercaselist)
  }

  if (userWantsUppercase === true) {
    optionsCart.push(uppercaselist)
  }

 // If User does not select any variables - Automatcally creates all lowercase password //
  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList)
  }

 // Generate random list of variables for  desired password //
  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  }

  return generatePassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

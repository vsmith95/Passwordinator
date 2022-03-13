// Assignment code here
var upperCaseCodes = charCodes(65, 90)
var lowerCaseCodes = charCodes(97, 122)
var numberCharCodes = charCodes(48, 57)
var specialCharCodes = charCodes(33, 47).concat(
  charCodes(58, 64)
).concat(
  charCodes(91, 96)
).concat(
  charCodes(123, 126)
)

function generatePassword() {
  // prompt asking for how many characters password will contain, needs logic to only accept numeric values
    var passwordLength = window.prompt("Enter length of password (numbers only)");
    // loops function if value entered is not an integer
    if ( /^[0-9]+$/.test(passwordLength)) {
      console.log(passwordLength);
    
    } 

    else {
      window.confirm("This is not a valid entry! Please start over!");
      generatePassword();
      return;
    }
  // checks true or false for if the password will contain lowercase letters
  var isLowerCase = window.confirm("Does this contain lowercase letters?");
  console.log(isLowerCase);

  // checks true or false for if the password will contain uppercase letters
  var isUpperCase = window.confirm("Does this contain uppercase letters?");
  console.log(isUpperCase);

   // checks true or false for if the password will contain numbers
   var isNumber = window.confirm("Does this contain any numbers?");
   console.log(isNumber);

  // checks true or false for if the password will contain special characters
  var isSpecial = window.confirm("Does this contain special characters?");
  console.log(isSpecial);
 
  // Generate the password based on above variables
  function password(passwordLength, isLowerCase, isUpperCase, isNumber, isSpecial) {
    var charCodes = lowerCaseCodes
    if (isLowerCase < isUpperCase){
      charCodes = upperCaseCodes
    } else {
      charCodes = lowerCaseCodes
    }
    if (isUpperCase = isLowerCase) charCodes = charCodes.concat(upperCaseCodes)
    if (isSpecial) charCodes = charCodes.concat(specialCharCodes)
    if (isNumber) charCodes = charCodes.concat(numberCharCodes)

    for (i = o, i < passwordLength; i++;) {
      var character = charCodes[Math.floor(Math.random() * passwordLength)]
      password.push(String.fromCharCode(character))  
    }
    return password.join()
  
  function charCodes(low, high) {
    var array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }
}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerText = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

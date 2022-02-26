// Assignment code here
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

  // checks true or false for if the password will contain special characters
  var isSpecial = window.confirm("Does this contain special characters?");
  console.log(isSpecial);

  // asks user for the amount of special characters if applicable, otherwise sets the value to 0
  if (isSpecial === true) {
    
    var specialCount = window.prompt("How many special characters?");
  }

  else {
    specialCount = "0";
  }

  // loops function if value entered is not an integer
  if ( /^[0-9]+$/.test(specialCount)) {
    console.log(specialCount);
  
  } 

  else {
    window.confirm("This is not a valid entry! Please start over!");
    generatePassword();
    return;
  }
 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

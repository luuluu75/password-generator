
// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthMin = 8;
var lengthMax = 128;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXY";
var number = "0123456789";
var specialCharacters = "!@#?$"; 
var selectedCharacters = ("lowercase","uppercase","numbers","special characters");

// alert if below min or =128 or over or invalid type
var userlength = prompt("Please select the length of your password, between 8 and 128");{
if (userlength <lengthMin || userLength >lengthMax);{
prompt("Length selected is invalid. Please enter a number between 8 and 128");
}
};

var userSelected = prompt("Do you want to include " + selectedCharacters);{
for(var i = 0; i <selectedCharacters.length; i++);{
if (userSelected.toLowerCase = "Y" || "yes");
userSelected.specialCharacters[i] = true;
// else userSelected.specialCharacters[i] = false;}
}
}

 
// function generatePassword() {
//     console.log ("it works");
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
// what length?, min 8 varchar and max 128 varchar




//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
// var uservarchar = prompt("Would you like to include " + characters[i]) //create array of questions
// for (var i = 0; i < characters.length; i++) 
//     console.log(lowerCase, upperCase, number, specialCharacters);

    //click Generate

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//Generate Password Function

// for(var i = 0; i <userLength; i++){
// function ();
//  if uservarchar.lowerCase = true,{
//    function getRandomLowerCase(),
//        return String.lowerCase(Math.floor(Math.random()*26)+97),
// }
//  if uservarchar.upperCase = true,{
//      function getRandomUpperCase(),
//         return String.upperCase(Math.floor(Math.random()*26)+65),
//  }
//  if uservarchar.number = true, {
//      function getRandomNumber(),
//         return String.number(Math.floor(Math.random()*10)+48),
//      }
//  if uservarchar.specialCharacters = true,{
//      function getRandomSymbol(),
//         return String.specialCharacters[Math.floor(Math.random()*specialCharacters.length),
//  }
// }

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page







// userLength = computerLength
// userVarchar = computerVarchar
// if (str.indexOf.lowercase)



// //Random Number selection
// for (var i = 0; i < 10; i++)
// // Randomly chooses a choice from the options array. This is the Computer's guess.
//  var userNumber = computerLength[Math.floor(Math.random() * computerLength.length)];
// </body>
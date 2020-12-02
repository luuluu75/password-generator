
var lengthMin = 8;
var lengthMax = 128;
var lowercase = true;"abcdefghijklmnopqrstuvwxyz";
var uppercase = true; "ABCDEFGHIJKLMNOPQRSTUVWXY";
var number = true; "0123456789";
var specialCharacters = true; "!@#?$"; 
var characters = (lowercase , uppercase, number, specialCharacters);

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
// what length?, min 8 varchar and max 128 varchar
// alert if below min or =128 or over or invalid type

var userLength = prompt("Please enter the length you want your password to be");
if (userlength <=lengthMin && userLength >=lengthMax || userlength != integer);{
alert("Password length must be between 8 and 128 characters.");
} console.log(userLength)

//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
var uservarchar = prompt("Would you like to include " + characters[i])
for (var i = 0; i < characters.length; i++) 
    console.log(lowerCase, upperCase, number, specialCharacters);


//Generate Password Function
function generatePassword("click",);
 if uservarchar.lowerCase = true,{
   function getRandomLowerCase(),
       return String.lowerCase(Math.floor(Math.random()*26)+97);
}
 }
 if uservarchar.upperCase = true,{
     function getRandomUpperCase(),
        return String.upperCase(Math.floor(Math.random()*26)+65),
 }
 if uservarchar.number = true, {
     function getRandomNumber(),
        return String.number(Math.floor(Math.random()*10)+48),
     }
 if uservarchar.specialCharacters = true,{
     function getRandomSymbol(),
        return String.specialCharacters[Math.floor(Math.random()*specialCharacters.length)];

for (var i = 0; i < userLendgth; i++)
alert("Your new password is " + generatePassword)








userLength = computerLength
userVarchar = computerVarchar
if (str.indexOf.lowercase)



//Random Number selection
for (var i = 0; i < 10; i++)
// Randomly chooses a choice from the options array. This is the Computer's guess.
 var userNumber = computerLength[Math.floor(Math.random() * computerLength.length)];
</body>

console.log(userlength)




//WHEN prompted for password criteria
//THEN I select which criteria to include in the password


//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

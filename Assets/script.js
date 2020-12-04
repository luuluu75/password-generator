// Assignment Code
var generateBtn = document.querySelector("#generate");
var userLength = "";
var lengthMin = 8;
var lengthMax = 128;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXY";
var number = "0123456789";
var specialCharacters = "!@#?$"; 
var password = "";


// alert if below min or =128 or over or invalid type
var text = ("Enter a password length");
var text1 = ("Length selected is invalid.");

var userLength = prompt("Enter a password length");
console.log(userLength)
if ((parseInt.userLength) <= lengthMin || (parseInt.userLength) >= lengthMax){
    alert("Length selected is invalid.")
};

// Function to randomly select pasword varchar
generatePassword() 

function generatePassword() {
//confirm the characters to include 
var incLowercase = confirm("Do you want to include lowercases?");
var incUpcase = confirm("Do you want to include uppercase?");
var incNums = confirm("Do you want to include numbers?");
var incSymbols = confirm("Do you want to include special characters?");
   
    if (incLowercase) true; {
        getRandomLowerCase();
    }
    if (incUpcase) true; {
        getRandomUpperCase();   
    }
    if (incNums); true; {
        getRandomNumber();
    }
    if (incSymbols); true;{
        getRandomSymbol();
    }
};
    
// Functions to generate random character variables

function getRandomLowerCase() {
    console.log("lowercase: ", lowercase);
    console.log("lowercase with random length: ", lowercase[(Math.floor(Math.random() * lowercase.length))]);
        return lowercase[(Math.floor(Math.random() * lowercase.length))];
    };

function getRandomUpperCase(){
    console.log("uppercase: ", uppercase);
    console.log("uppercasecase with random length: ", uppercase[(Math.floor(Math.random() * uppercase.length))]);
    return uppercase[(Math.floor(Math.random() * uppercase.length))];
    }

function getRandomNumber(){
    console.log("number: ", number);
    console.log("number with random length: ", number[(Math.floor(Math.random() * number.length))]);
    return number[(Math.floor(Math.random()*number.length))];
    }

function getRandomSymbol(){
    console.log("specialCharacters: ", specialCharacters);
    console.log("specialCharacters with random length: ", specialCharacters[(Math.floor(Math.random() * specialCharacters.length))]);
    return specialCharacters[(Math.floor(Math.random()*specialCharacters.length))];
    }

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

// Write password to the #password input
writePassword()

function writePassword() {
    console.log("it works");
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
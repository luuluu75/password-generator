
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


var text = ("Enter a password length")
var text1 = ("Length selected is invalid. Please enter a number between 8 and 128");

var userLength = prompt(text)  
if (userLength <= lengthMin || userLength >= lengthMax){
    alert(text1)
console.log(userLength)
}
   

// Function to randomly select pasword varchar
generatePassword()

function generatePassword(){
//confirm the characters to include 
var incLowercase = confirm("Do you want to include lowercases?");
    if (incLowercase) true; {
        getRandomLowerCase()
    }
var incUpcase = confirm("Do you want to include uppercase?");
    if (incUpcase) true; {
    getRandomUpperCase(toString);    
    }

var incNums = confirm("Do you want to include numbers?");
    if (incNums); true; {
        getRandomNumber();
    }
var incSymbols = confirm("Do you want to include special characters?");
    if (incSymbols); true;{
        getRandomSymbol();
    }
    console.log(getRandomLowerCase())
    console.log(getRandomUpperCase())
    console.log(getRandomNumber())
    console.log(getRandomSymbol())
    
    for (var i = 0, i =< (toInt.userLength) ; i++)
    // var password = console.log(getRandomUpperCase()) + console.log(getRandomUpperCase())  + console.log(getRandomNumber()) + console.log(getRandomSymbol())) 

    function getRandomLowerCase() {
        console.log("lowercase: ", lowercase);
        console.log("lowercase with random length: ", lowercase[(Math.floor(Math.random() * lowercase.length))]);
            return lowercase[(Math.floor(Math.random() * lowercase.length))];
    }
//generate random numbers

function getRandomLowerCase() {
    console.log("lowercase: ", lowercase);
    console.log("lowercase with random length: ", lowercase[(Math.floor(Math.random() * lowercase.length))]);
        return lowercase[(Math.floor(Math.random() * lowercase.length))];
    };

function getRandomUpperCase(){
    console.log("uppercase: ", uppercase);
    console.log("uppercasecase with random length: ", uppercase[(Math.floor(Math.random() * uppercase.length))]);
    return uppercase[(Math.floor(Math.random()*uppercase.length))];
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


// }


// // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");
//     passwordText.value = password;
//   };

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// //WHEN prompted for the length of the password
// //THEN I choose a length of at least 8 characters and no more than 128 characters
// // what length?, min 8 varchar and max 128 varchar




// //WHEN prompted for character types to include in the password
// //THEN I choose lowercase, uppercase, numeric, and/or special characters


// //WHEN all prompts are answered
// //THEN a password is generated that matches the selected criteria
// }
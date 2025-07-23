const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = password;
}

function copyPassword() {
    const passwordBox = document.getElementById("password");
    passwordBox.select(); // Select the text in the input field
    navigator.clipboard.writeText(passwordBox.value) // Copy to clipboard
        .then(() => {
            alert("Password copied to clipboard!"); // Optional: Notify user
        })
        .catch(err => {
            console.error("Failed to copy password: ", err); // Log error if it fails
        });
}
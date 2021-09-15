// Sign in/up
let elSignInForm = document.querySelector('#signInForm');
let elSignInOutput = document.querySelector('#signInOutput');

function signInFunction(event) {
    let userName = document.querySelector('#userName').value;
    let password = document.querySelector('#password').value;
    elSignInOutput.textContent = userName + " har loggat in.";

    event.preventDefault();
}

elSignInForm.addEventListener('submit', signInFunction, false);

let elSignUpForm = document.querySelector('#signUpForm');
let elSignUpOutput = document.querySelector('#signUpOutput');

function signUpFunction(event) {

    let userName = document.querySelector('#newUserName').value;
    let password = document.querySelector('#newPassword').value;

    if (userName.length < 6) {
        elSignUpOutput.textContent = "Användarnamn måste vara minst 6 tecken!";
    } else if (password.length < 8) {
        elSignUpOutput.textContent = "Lösenord måste vara minst 8 tecken!";
    } else {
        elSignUpOutput.textContent = "Registrerade användare " + userName + ".";
    }
    event.preventDefault();
}

elSignUpForm.addEventListener('submit', signUpFunction, false);
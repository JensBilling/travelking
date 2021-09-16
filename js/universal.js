//Dark mode local storage
let storedMode = localStorage.getItem('mode');
let link = document.createElement("link");

let darkMode = false;

if (storedMode != 'default'){
    link.rel = "stylesheet";
    link.typetype = "text/css";
    link.href="css/darkMode.css";

    document.getElementsByTagName("head")[0].appendChild(link);
    darkMode = true;
    storedMode = 'dark';
}

function changeTheme() {

    if (!darkMode){
        link.rel = "stylesheet";
        link.typetype = "text/css";
        link.href="css/darkMode.css";

        document.getElementsByTagName("head")[0].appendChild(link);
        darkMode = true;
        storedMode = 'dark';
        themeChoice();

    } else {
        link.rel = "stylesheet";
        link.typetype = "text/css";
        link.href="css/style.css";

        document.getElementsByTagName("head")[0].appendChild(link);
        darkMode = false;
        storedMode = 'default';
        themeChoice();
    }

    function themeChoice(){
        localStorage.setItem('mode', storedMode);
    }
}

// Newsletter email alert
let newsletterForm = document.querySelector('#newsletter');

function addEmailToNewsletter(event) {
    let emailAddress = document.querySelector('#inputEmail').value;
    alert(emailAddress + " added to newsletter!");

    event.preventDefault();
}

newsletterForm.addEventListener('submit', addEmailToNewsletter, false);

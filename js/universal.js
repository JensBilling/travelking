let storedMode = localStorage.getItem('mode');
let link = document.createElement("link");

let darkMode = false;

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

    if (storedMode != 'default'){
        link.rel = "stylesheet";
        link.typetype = "text/css";
        link.href="css/darkMode.css";

        document.getElementsByTagName("head")[0].appendChild(link);
        darkMode = true;
        storedMode = 'dark';
        themeChoice();
    }
}
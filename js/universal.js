let darkMode = false;
let link = document.createElement("link");

function changeTheme() {

    if (!darkMode){
        link.rel = "stylesheet";
        link.typetype = "text/css";
        link.href="css/darkMode.css";

        document.getElementsByTagName("head")[0].appendChild(link);

        darkMode = true;

    } else {
        link.rel = "stylesheet";
        link.typetype = "text/css";
        link.href="css/style.css";

        document.getElementsByTagName("head")[0].appendChild(link);

        darkMode = false;
    }
}
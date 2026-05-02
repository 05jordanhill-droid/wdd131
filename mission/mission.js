let selectElem = document.querySelector("#lighting-mode");

let pageContent = document.querySelector("body");
let logo = document.querySelector("img");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == "dark") {
        logo.setAttribute("src", "images/byui-logo-white.png");
        pageContent.className = "dark";
    } else if (current == "light") { // I prefer to avoid the usage of "else" because if I ever want to add more options then I have to change the "else" to an "else if" anyway
        logo.setAttribute("src", "images/byui-logo-blue.webp");
        pageContent.className = "light";
    }
}
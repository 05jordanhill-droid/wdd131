let selectElem = document.querySelector("#lighting-mode");

let pageContent = document.querySelector("body");
let logo = document.querySelector("img");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == "dark") {
        logo.setAttribute("src", "images/byui-logo-white.png");
        pageContent.className = "dark";
    } else if (current == "light") { // I used "else if" over "else" because "Choose Mode", when using "even", will activate light mode even though light mode isn't selected.
        logo.setAttribute("src", "images/byui-logo-blue.webp");
        pageContent.className = "light";
    }
}
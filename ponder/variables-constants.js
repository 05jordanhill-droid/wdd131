// const PI = 3.14;

// let radius = 3;
// let area = radius * radius * PI;
// console.log(area);

// radius = 20;
// area = radius * radius * PI;
// console.log(area);

// const one = 1;
// const two = "2";

// let result = one * two;
// console.log(result);

// result = one + Number(two);
// console.log(result);

// let course = "CSE131"; //global scope
// if (true) {
//     let student = "John";
//     console.log(course); //works just fine, course is global
//     console.log(student); //works just fine, it's being accessed within the block
// }
// console.log(course)
// console.log(source)



                
const title = document.querySelector("h1");
console.log(title);

title.textContent = "Web Page Components";

document.querySelector("#topics").style.color = "red";

document.getElementById("topics").style.color = "purple";

let list = document.querySelector(".list");
list.style.border = "3px solid black"

let para = document.querySelector("p");
// para.style.backgroundColor = "lightblue"
para.classList.add("background");

// document.querySelector("body").classList.add("background");

const image = document.querySelector("img");
image.setAttribute("src", "images/web.png");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = "red";
})
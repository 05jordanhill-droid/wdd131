
let displayedRecipe = {
        name: `-`,
        imgSrc: `-`,
        link: `-`,
        times: {
            "time1": {
                title: `-`,
                hour: `-`,
                minute: `-`
            }
        },
        servings: `-`,
        calories: `-`,
        ingredients: [],
        instructions: [],
        notes: ``,
    }

let nameButton = document.querySelector("#nameButton");
nameButton.addEventListener("click", nameToggle);

function nameToggle(event){
	event.preventDefault();

    let inputName = document.querySelector("#name-field input");
    inputName.classList.toggle("hidden");
}

let namePush = document.querySelector("#name-field .push")
namePush.addEventListener("click", pushName);

function pushName(event){
	event.preventDefault();

    let inputName = document.querySelector("#name-field input").value;
    
    if(inputName == ""){
        inputName = "-";
    }
    displayedRecipe.name = inputName;
}


let imageButton = document.querySelector("#imageButton");
imageButton.addEventListener("click", imageToggle);

function imageToggle(event){
	event.preventDefault();

    let inputImage = document.querySelector("#image-field input");
    inputImage.classList.toggle("hidden");
}

let imagePush = document.querySelector("#image-field .push")
imagePush.addEventListener("click", pushImage);

function pushImage(event){
	event.preventDefault();

    let inputImage = document.querySelector("#image-field input").value;
    
    if(inputImage == ""){
        inputImage = "-";
    }
    displayedRecipe.imgSrc = inputImage;
}


let sourceButton = document.querySelector("#sourceButton");
sourceButton.addEventListener("click", sourceToggle);

function sourceToggle(event){
	event.preventDefault();

    let inputSource = document.querySelector("#source-field input");
    inputSource.classList.toggle("hidden");
}

let sourcePush = document.querySelector("#source-field .push")
sourcePush.addEventListener("click", pushSource);

function pushSource(event){
	event.preventDefault();

    let inputSource = document.querySelector("#source-field input").value;
    
    if(inputSource == ""){
        inputSource = "-";
    }
    displayedRecipe.imgSrc = inputSource;

    let iframeContainer = document.querySelector("iframe");
    iframeContainer.src = displayedRecipe.imgSrc;
}


let timeButton = document.querySelector("#timeButton");
timeButton.addEventListener("click", timeToggle);

function timeToggle(event){
	event.preventDefault();

    let inputTimes = document.querySelectorAll("#time-field input");
    inputTimes.forEach(time => time.classList.toggle("hidden"))
}

let timePush = document.querySelector("#time-field .push")
timePush.addEventListener("click", pushTime);

function pushTime(event){
	event.preventDefault();

    let labelContainer = document.querySelector("#time-label").value;
    let minutesContainer = document.querySelector("#time-minute").value;
    let hoursContainer = document.querySelector("#time-hour").value;

    if(labelContainer == ""){
        labelContainer = "-";
    }
    if(minutesContainer == ""){
        minutesContainer = "-";
    }
    if(hoursContainer == ""){
        hoursContainer = "-";
    }

    let counter = Object.keys(displayedRecipe.times).length + 1;

    if(Object.keys(displayedRecipe.times).length == 1){
        counter = 1;
    }

    displayedRecipe.times[`${counter}time`] = {
        title: labelContainer,
        hour: minutesContainer,
        minute: hoursContainer
    }
}


let servingsButton = document.querySelector("#servingsButton");
servingsButton.addEventListener("click", servingsToggle);

function servingsToggle(event){
	event.preventDefault();

    let inputServings = document.querySelector("#servings-field input");
    inputServings.classList.toggle("hidden");
}

let servingsPush = document.querySelector("#servings-field .push")
servingsPush.addEventListener("click", pushServings);

function pushServings(event){
	event.preventDefault();

    let inputServings = document.querySelector("#servings-field input").value;
    
    if(inputServings == ""){
        inputServings = "-";
    }
    displayedRecipe.servings = inputServings;
}


let caloriesButton = document.querySelector("#caloriesButton");
caloriesButton.addEventListener("click", caloriesToggle);

function caloriesToggle(event){
	event.preventDefault();

    let inputCalories = document.querySelector("#calories-field input");
    inputCalories.classList.toggle("hidden");
}

let caloriesPush = document.querySelector("#calories-field .push")
caloriesPush.addEventListener("click", pushCalories);

function pushCalories(event){
	event.preventDefault();

    let inputCalories = document.querySelector("#calories-field input").value;
    
    if(inputCalories == ""){
        inputCalories = "-";
    }

    displayedRecipe.calories = inputCalories;
}


let ingredientsButton = document.querySelector("#ingredientsButton");
ingredientsButton.addEventListener("click", ingredientsToggle);

function ingredientsToggle(event){
	event.preventDefault();
    
    let headingIngredients = document.querySelector("#heading-ingredients-field");
    headingIngredients.classList.toggle("hidden");
    let ingredients = document.querySelector("#ingredient-field");
    ingredients.classList.toggle("hidden");

    let inputIngredients = document.querySelectorAll("#ingredients-field .sub-holding button");
    inputIngredients.forEach(ingredient => ingredient.classList.toggle("hidden"))
}

let headingIngredientsButton = document.querySelector("#headingIngredientsButton");
headingIngredientsButton.addEventListener("click", headingIngredientsToggle);

function headingIngredientsToggle(event){
    event.preventDefault();

    let inputIngredients = document.querySelector("#heading-ingredients-field input");
    inputIngredients.classList.toggle("hidden");
}

let ingredientButton = document.querySelector("#ingredientButton");
ingredientButton.addEventListener("click", ingredientToggle);

function ingredientToggle(event){
    event.preventDefault();

    let inputIngredients = document.querySelector("#ingredient-field input");
    inputIngredients.classList.toggle("hidden");
}

let ingredientsPush = document.querySelector("#ingredients-field .push")
ingredientsPush.addEventListener("click", pushIngredients);

function pushIngredients(event){
	event.preventDefault();

    let headingContainer = document.querySelector("#heading-ingredients-field input").value;
    let ingredientContainer = document.querySelector("#ingredient-field input").value;

    if(headingContainer != ""){
        displayedRecipe.ingredients.push(headingContainer.replace(headingContainer, `$heading$${headingContainer}`));
    }
    if(ingredientContainer != ""){
        displayedRecipe.ingredients.push(ingredientContainer.replace(ingredientContainer, `$sub$${ingredientContainer}`));
    }

}


let instructionsButton = document.querySelector("#instructionsButton");
instructionsButton.addEventListener("click", instructionsToggle);

function instructionsToggle(event){
	event.preventDefault();

    let headingInstructions = document.querySelector("#heading-instructions-field");
    headingInstructions.classList.toggle("hidden");
    let instructions = document.querySelector("#instruction-field");
    instructions.classList.toggle("hidden");

    let inputInstructions = document.querySelectorAll("#instructions-field .sub-holding button");
    inputInstructions.forEach(instructions => instructions.classList.toggle("hidden"))
}

let headingInstructionsButton = document.querySelector("#headingInstructionsButton");
headingInstructionsButton.addEventListener("click", headingInstructionsToggle);

function headingInstructionsToggle(event){
    event.preventDefault();

    let inputInstructions = document.querySelector("#heading-instructions-field input");
    inputInstructions.classList.toggle("hidden");
}

let instructionButton = document.querySelector("#instructionButton");
instructionButton.addEventListener("click", instructionToggle);

function instructionToggle(event){
    event.preventDefault();

    let inputInstruction = document.querySelector("#instruction-field input");
    inputInstruction.classList.toggle("hidden");
}

let instructionsPush = document.querySelector("#instructions-field .push")
instructionsPush.addEventListener("click", pushInstructions);

function pushInstructions(event){
	event.preventDefault();

    let headingContainer = document.querySelector("#heading-instructions-field input").value;
    let instructionsContainer = document.querySelector("#instruction-field input").value;

    if(headingContainer == ""){
        headingContainer = "-";
    }
    if(ingredientContainer == ""){
        instructionsContainer = "-";
    }

    displayedRecipe.instructions.push(headingContainer.replace(headingContainer, `$heading$${headingContainer}`));
    displayedRecipe.instructions.push(instructionContainer.replace(ingredientContainer, `$sub$${ingredientContainer}`));
}


let notesButton = document.querySelector("#notesButton");
notesButton.addEventListener("click", notesToggle);

function notesToggle(event){
	event.preventDefault();

    let inputNotes = document.querySelector("#notes-field input");
    inputNotes.classList.toggle("hidden");
}

let notesPush = document.querySelector("#notes-field .push")
notesPush.addEventListener("click", pushNotes);

function pushNotes(event){
	event.preventDefault();

    let inputNotes = document.querySelector("#notes-field input").value;
    displayedRecipe.notes = inputNotes;
}


function timesTemplate(times) {
    let html = "";

    for (let time in times) {
        let display = times[time];
        html += `<p>${display.title}: ${display.hour} hour(s) ${display.minute} minute(s)</p>`
    }
    return html;
}
function ingredientsTemplate(ingredients) {
    let html = "";
    console.log("test");
    console.log(ingredients);
    ingredients.forEach(ingredient => {
        if(ingredient.includes("$heading$"))
        {
            ingredient = ingredient.replace("$heading$", "");
            
            html += `<h3>${ingredient}</h3>`;
        } 
        else if (ingredient.includes("$sub$"))
        {
            ingredient = ingredient.replace("$sub$", "");
            html += `<p class="sub">•${ingredient}</p>`;
        }
    });
    return html;
}
function instructionsTemplate(instructions) {
    let html = "";
    instructions.forEach(instruction => {
        if(instruction.includes("$heading$"))
        {
            instruction = instruction.replace("$heading$", "");
            html += `<h3>${instruction}</h3>`;
        } 
        else if (instruction.includes("$sub$"))
        {
            instruction = instruction.replace("$sub$", "");
            html += `<p class="sub">•${instruction}</p>`;
        }
    });
    return html;
}
function renderTimes(times, recipeHtml) {
    let html = timesTemplate(times);

    let timesContainer = recipeHtml.querySelector(".timesContainer");
    
    timesContainer.innerHTML += html;
}
function renderIngredients(ingredients, recipeHtml) {
    let html = ingredientsTemplate(ingredients);

    let ingredientsContainer = recipeHtml.querySelector(".ingredientsContainer");
    
    ingredientsContainer.innerHTML += html;
}
function renderInstructions(instructions, recipeHtml) {
    let html = instructionsTemplate(instructions);

    let instructionsContainer = recipeHtml.querySelector(".instructionsContainer");
    
    instructionsContainer.innerHTML += html;
}


function renderRecipe(event) {
    event.preventDefault();

    console.log(displayedRecipe);
    
    let html = recipeTemplate(displayedRecipe);
    recipeContainer.innerHTML = html;

    html = document.querySelector(".recipe");

    renderTimes(displayedRecipe.times, html);
    renderIngredients(displayedRecipe.ingredients, html);
    renderInstructions(displayedRecipe.instructions, html);

    
    let x = document.querySelector(".fa-x");
    x.addEventListener("click", closeSelection => {
        recipeContainer.innerHTML = ``;
    });
}

function recipeTemplate(recipe) {
    return `
        <article class="recipe">
            <section class="header">
                <i class="fa-solid fa-x"></i>
                <h3 class="recipeName"><a href="${recipe.sourceLink}" target="_blank">${recipe.name}</a></h3>
            </section>
            <section class="main">
                <img src="${recipe.imgSrc}" alt="${recipe.name}">
                <section class="timesContainer">
                    <h1>Time</h1>
                </section>
                <section class="miscContainer">
                    <br>
                    <br>
                    <p>Servings: ${recipe.servings}</p>
                    <p>Calories: ${recipe.calories}</p>
                </section>
                <section class="ingredientsContainer">
                    <h1>Ingredients</h1>
                </section>
                <section class="instructionsContainer">
                    <h1>Instructions</h1>
                </section>
            </section>
            <section class="footer">
                <h1>Notes</h1>
                <p class="sub">${recipe.notes}</p>
            </section>
        </article>
    `;
}


let recipeContainer = document.querySelector("#recipe-container");
let submitRecipe = document.querySelector("#submit-button")
submitRecipe.addEventListener("click", renderRecipe);
// renderRecipe(displayedRecipe)
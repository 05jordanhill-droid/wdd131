// Create a character card with: properties: name, class, level, health, and image and methods: attacked and levelUp
// Use an object with properties and methods.
// The .attacked() method will subtract 20 from the health property value. When the health property reaches zero, let the user know the character has died.
// The .levelUp() method will add 1 to the level property value.

function makeCard(name_, class_, level_, health_, image_){
    const card =
        {
            name: name_,
            class: class_,
            level: level_,
            health: health_,
            image: `images/${image_}`,
            attacked: function(){
                if(this.health > 0){
                    this.health -= 20;
                    update();
                }
            },
            levelUp: function(){
                if(this.health > 0){
                    this.level++;
                    update();
                }
            },
            display: function() {
                populateHTML(this);
            }
        }

    return card;
}

function update(){
    let html = `
        <p class="class">Class: ${card.class}</p>
        <p class="level">Level: ${card.level}</p>
        <p class="health">Health: ${card.health}</p>
    `;

    document.querySelector(".stats").innerHTML = html;

    if (card.health <= 0) {
        setTimeout(() => {
            alert("Character died!");
        }, 500);
    }
}

function populateHTML(card){
    const html = `
        <img class="image" src="${card.image}" alt="${card.name}">
        <h3 class="name">${card.name}</h2>
        <section class="stats">
        </section>
        <section class="buttons">
            <button class="attacked">Attacked</button>
            <button class="level-up">Level Up</button>
        </section>
    `;
    document.querySelector(".card").innerHTML = html;

    update();
}

const card = makeCard("Snortleblat", "Swamp Beast Diplomat", 5, 100, "snortleblat.webp");
card.display();

document.querySelector(".attacked").addEventListener("click", function(){
    card.attacked();
});
document.querySelector(".level-up").addEventListener("click", function(){
    card.levelUp();
});
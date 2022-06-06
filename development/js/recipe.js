//text area---------------------------------------------------------------
const textarea = document.querySelectorAll('textarea');
for (const area of textarea) {
    area.addEventListener('keydown', resize);
}
;

function resize() {
    const el = this;
    setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 1);
};
//------------------------------------------------------------------------

const buttonSaveAndClose = document.querySelector(".head__button");

const inputName = document.querySelector(".input--name__input");
const inputDescription = document.querySelector(".input--decr__input");

const instructions = document.querySelector(".main__text--instruction");
const ingredients = document.querySelector(".main__text--ingredients");

const btnInstructions = document.querySelector(".main__btn--instruction");
const btnIngredients = document.querySelector(".main__btn--ingredients");

let recipe = {
    name: "",
    describe: "",
    instruction: [],
    ingredients: [],
}

buttonSaveAndClose.addEventListener("click", (e) => {
    const olListItem = document.querySelectorAll(".olListItem");
    const ulListItem = document.querySelectorAll(".ulListItem");

    e.preventDefault();
    recipe = {
        ...recipe,
        name: inputName.value,
        describe: inputDescription.value,
        instruction: [...olListItem].map(item => item.innerText),
        ingredients: [...ulListItem].map(item => item.innerText),
    }

    //sprawdzenie czy localStorage nie jest puste, dodanie nowego przepisu
    let allOfRecipes = JSON.parse(localStorage.getItem("recipeData"));
    if (allOfRecipes === null) allOfRecipes = [];
    localStorage.setItem('recipeData', JSON.stringify(recipe));
    allOfRecipes.push(recipe);
    localStorage.setItem("recipeData", JSON.stringify(allOfRecipes));
    //
});
//nasłuchiwanie na przycisk dodania nowej instrukcji
btnInstructions.addEventListener("click", () => {
    const cloneOlItem = document.querySelectorAll(".olListItem")[0].cloneNode(true);
    cloneOlItem.querySelector("div > p").innerText = instructions.value;
    document.querySelector(".footer__title--ol").appendChild(cloneOlItem);
});
//nasłuchiwanie na przycisk dodania nowego składnika
btnIngredients.addEventListener("click", () => {
    const cloneUlItem = document.querySelectorAll(".ulListItem")[0].cloneNode(true);
    cloneUlItem.querySelector("div > p").innerText = ingredients.value;
    document.querySelector(".footer__title--ul").appendChild(cloneUlItem);
});
//------------------------------------------------------------------------



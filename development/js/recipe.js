
//text area---------------------------------------------------------------
const textarea = document.querySelectorAll('textarea');
for (const area of textarea) {
    area.addEventListener('keydown', resize);
}

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

const textAreaInstructions = document.querySelector(".main__text--instruction");
const textAreaIngredients = document.querySelector(".main__text--ingredients");

const btnInstructions = document.querySelector(".main__btn--instruction");
const btnIngredients = document.querySelector(".main__btn--ingredients");

let recipe = {
    name: "",
    describe: "",
    instruction: [],
    ingredients: []
}

//nasłuchiwanie na przycisk dodania nowej instrukcji
btnInstructions.addEventListener("click", () => {

    const olLiElement = document.createElement("li");
    olLiElement.classList.add("footer__li", "olListItem")
    olLiElement.innerHTML = `
                            <div class="footer__text">
                               <p></p>
                               <button class="footer__edit"><i class="fa-regular fa-pen-to-square"></i></button>
                               <button class="footer__delete"><i class="fa-solid fa-trash-can"></i></button>
                            </div>
    `;

    if (textAreaInstructions.value.length) {
        olLiElement.querySelector("div > p").innerText = textAreaInstructions.value;
        document.querySelector(".footer__title--ol").appendChild(olLiElement);
        textAreaInstructions.placeholder = "";
        textAreaInstructions.value = "";
        textAreaInstructions.style.border = "";
    } else {
        textAreaInstructions.style.border = "1px solid red";
        textAreaInstructions.placeholder = "Wpisz instrukcję...";
        return null;
    }
});
//nasłuchiwanie na przycisk dodania nowego składnika
btnIngredients.addEventListener("click", () => {
    const ulLiElement = document.createElement("li");
    ulLiElement.classList.add("footer__li", "olListItem")
    ulLiElement.innerHTML = `
                        <div class="footer__text"><p></p>
                           <button class="footer__edit"><i class="fa-regular fa-pen-to-square"></i></button>
                           <button class="footer__delete"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
    `;

    if (textAreaIngredients.value) {
        ulLiElement.querySelector("div > p").innerText = textAreaIngredients.value;
        document.querySelector(".footer__title--ul").appendChild(ulLiElement);
        textAreaIngredients.placeholder = "";
        textAreaIngredients.value = "";
        textAreaIngredients.style.border = "";
    } else {
        textAreaIngredients.style.border = "1px solid red";
        textAreaIngredients.placeholder = "Wpisz nazwę składnika...";
        return null;
    }
});

buttonSaveAndClose.addEventListener("click", () => {
    if (inputName.value && inputDescription.value) {
        const olListItem = document.querySelectorAll(".olListItem");
        const ulListItem = document.querySelectorAll(".ulListItem");

        recipe = {
            ...recipe,
            name: inputName.value,
            describe: inputDescription.value,
            instruction: [...olListItem].map(item => item.innerText),
            ingredients: [...ulListItem].map(item => item.innerText)
        }

        //sprawdzenie czy localStorage nie jest puste, dodanie nowego przepisu
        let allOfRecipes = JSON.parse(localStorage.getItem("recipeData"));
        if (allOfRecipes === null) allOfRecipes = [];
        localStorage.setItem('recipeData', JSON.stringify(recipe));
        allOfRecipes.push(recipe);
        localStorage.setItem("recipeData", JSON.stringify(allOfRecipes));

        inputName.placeholder = "";
        inputName.style.border = "";
        inputDescription.placeholder = "";
        inputDescription.style.border = "";
        inputName.value = "";
        inputDescription.value = "";

        window.frameElement.style.display = "none";
        window.frameElement.nextElementSibling.style.display = "block";
    } else {
        inputName.placeholder = "Wpisz nazwę...";
        inputName.style.border = "1px solid red";
        inputDescription.placeholder = "Dodaj opis...";
        inputDescription.style.border = "1px solid red";
        return null
    }
});
//------------------------------------------------------------------------


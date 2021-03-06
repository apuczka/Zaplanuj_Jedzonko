const barSection = document.querySelectorAll('.main__bar--section');
const mainSection = document.querySelectorAll('.main--section');



barSection.forEach(item => {
   item.addEventListener('click', () => {
      let currentBar = item;
      let sectionClass = currentBar.getAttribute("data-section");
      let currentSection = document.querySelector(sectionClass);
      if (!currentBar.classList.contains('open')) {
         barSection.forEach(item => {
            item.classList.remove('open')
         });
         mainSection.forEach(item => {
            item.classList.remove('open')
         });
         currentBar.classList.add('open');
         currentSection.classList.add('open');
      };
   });
});
document.querySelector('.main__bar--section').click();

//exit widget info

const exitButtons = document.querySelectorAll('.fa-square-xmark');
exitButtons.forEach(button => {
   button.addEventListener("click", function () {
      this.parentElement.style.display = 'none';
   });
});
//kod dla dodaj przepis--------------------------------------------------------------------------------------------------------------------
//const linkAll = document.querySelectorAll('.widget--href');
//for (const link of linkAll) {
//   link.addEventListener('click', () => {
//   document.querySelector('.iframe--recipe').style.display = 'block';
//      document.querySelector('.main__content').style.display = 'none';
//   document.querySelector('.iframe--schedules').style.display = 'none';

//});
//}

//kod dla wpisywania imienia w first message

const desktopBtn = document.querySelector("#startMessage");
const showDesktop = document.querySelector("#desktop");
const hideWelcomeMessage = document.querySelector(".main__section__startMessage");
const nameInput = document.querySelector("#startMessage-form-username");
//funkcja sprawdza czy imię zawaiera jakąś cyfrę
function containsNumber(value) {
  return /\d/.test(value);
}
const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
//funkcja sprawdza czy do inputa nie wpisano jakiegoś znaku nie będącego cyfrą
function containsSpecialCharacters(string){
   if (format.test(string)) {
      return true;
   } else {
      return false;
   }
}


function switchOffdesktop() {
   if (document.querySelector(".main__content").style.display = "block") {
      return document.querySelector(".main__content").style.display = "none";
   }

}
switchOffdesktop();
//kod dla zapisywania imienia w local storage i przełączania z sekcji start message na deskotp
desktopBtn.addEventListener("click", function (event) {
   event.preventDefault;
   if(nameInput.value.length > 0 && nameInput.value.length < 15 && containsNumber(nameInput.value) !== true && containsSpecialCharacters(nameInput.value) !==true){
      document.querySelector(".main__content").style.display = "block";
      hideWelcomeMessage.style.display = "none";
      let saveName = nameInput.value;
      document.querySelector(".header__name").innerHTML = saveName;
      localStorage.setItem('name', saveName);
   }
   else {
       alert("Imię może składać się wyłącznie z maksymalnie 20 liter i nie może zawierać cyfr lub znaków specjalnych");
   }
})
// funkcja zmieniająca plany po nacisnięciu buttona
let IndexValue = 1;
function showNextPlan(e) {
    showPlans(IndexValue += e);
}
function showPlans(e) {
   let i;
   const allPlans = document.querySelectorAll('#userPlan');
   console.log(allPlans);
    if (e > allPlans.length) {
        IndexValue = 1;
    }
    if (e < 1) {
        IndexValue = allPlans.length;
    }
    for (i = 0; i < allPlans.length; i++){
        allPlans[i].style.display = "none";
    }
   allPlans[IndexValue - 1].style.display = "flex";
   [...allPlans].map((item, index) => {
   item.querySelector("caption").innerText = `Twój plan na ${index + 1} tydzień:`
})
}   
showPlans(IndexValue);

//kod dla widgets--------------------------------------------------------------------------------------------------------------------

class ADD {
   constructor(block, child) {
      this.block = block;
      this.child = child;
      const linkAll = document.querySelectorAll('.widget--href');
      const iframe = document.querySelectorAll('iframe');
      console.log(iframe);
         linkAll[`${this.child}`].addEventListener('click', () => {
         document.querySelector(`.iframe--${this.block}`).style.display = 'block';
         document.querySelector('.main__content').style.display = 'none';
         });
   };
};
new ADD('recipe',0);
new ADD('schedules',1);



//number recipes
const numberRecipes = JSON.parse(localStorage.getItem("recipeData")).length;
document.querySelector(".numberRecipes").innerText = `Masz już ${numberRecipes} przepisy, nieźle!`;


const linkAll = document.querySelectorAll('.widget--href');
for (const link of linkAll) {
   link.addEventListener('click', () => {
   document.querySelector('.iframe--recipe').style.display = 'block';
   document.querySelector('.main__content').style.display = 'none';
});
}
//-----------------------------------------------------------------------------------------------------------------------------------------
const regulationsSection = document.getElementById("regulations");

const data = JSON.parse(localStorage.getItem("recipeData"));

data.map((item,index) => {
   const { name, describe } = item;
   const tableBodyElement = document.getElementById("tableBodyFromJs");
   const tableElement = document.querySelector("#tableBodyFromJs > tr").cloneNode(false);
   tableElement.innerHTML = `
                        <td class="table__body__id">${index + 1}</td>
                        <td class="table__body__name">${name}</td>
                        <td class="table__body__describe">${describe}</td>
                        <td class="table__body__icon">
                            <i class="fa-regular fa-pen-to-square"></i>
                            <i class="fa-solid fa-trash-can"></i>
                        </td>
   `;
   tableBodyElement.appendChild(tableElement);
});



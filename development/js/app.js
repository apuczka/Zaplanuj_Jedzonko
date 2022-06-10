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
//   document.querySelector('.main__content').style.display = 'none';
//});
//}

//-----------------------------------------------------------------------------------------------------------------------------------------
// const desktopBtn = document.querySelector("#startMessage");
// const showDesktop = document.querySelector("#desktop");
// const hideWelcomeMessage = document.querySelector(".main__section__startMessage");
// const nameInput = document.querySelector("#startMessage-form-username");
// //funkcja sprawdza czy imię zawaiera jakąś cyfrę
// function containsNumber(value) {
//   return /\d/.test(value);
// }
// const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
//
// function containsSpecialCharacters(string){
//    if (format.test(string)) {
//       return true;
//    } else {
//       return false;
//    }
// }
//funkcja sprawdza czy do inputa nie wpisano jakiegoś znaku nie będącego cyfrą

// desktopBtn.addEventListener("click", function (event) {
//    event.preventDefault;
//    if(nameInput.value.length > 0 && nameInput.value.length < 15 && containsNumber(nameInput.value) !== true && containsSpecialCharacters(nameInput.value) !==true){
//    showDesktop.style.display = "block";
//    hideWelcomeMessage.style.display = "none";
//    }
//    else {
//        alert("Imię może składać się wyłącznie z maksymalnie 20 liter i nie może zawierać cyfr lub znaków specjalnych");
//    }
// })

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
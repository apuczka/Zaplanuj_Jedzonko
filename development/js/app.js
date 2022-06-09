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
const linkAll = document.querySelectorAll('.widget--href');
for (const link of linkAll) {
   link.addEventListener('click', () => {
   document.querySelector('.iframe--recipe').style.display = 'block';
   document.querySelector('.main__content').style.display = 'none';
});
}

//show firstMessage
let desktopBtn = document.querySelector("#startMessage");
let showDesktop = document.querySelector("#desktop");
let hideWelcomeMessage = document.querySelector(".main__section__startMessage");
const nameInput = document.querySelector("#startMessage-form-username").value;
//funkcja sprawdza czy imię zawaiera jakąś cyfrę
function containsNumber(value) {
  return /\d/.test(value);
}
desktopBtn.addEventListener("click", function () {
   if(nameInput.length > 0 && nameInput.length < 15 && containsNumber(nameInput) !== true){
   showDesktop.style.display = "block";
      hideWelcomeMessage.style.display = "none";
   }
   else {
      containsNumber(nameInput);
      alert("Imię może składać się wyłącznie z maksymalnie 20 liter i nie może zawierać cyfr");
   }
})



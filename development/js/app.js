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



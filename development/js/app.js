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

const exitButtons = document.querySelector('.fa-square-xmark');

// exitButtons.addEventListener('click', () => {
//    const widget = document.querySelector('.widget')
//    widget.style.display ="none";
// })

exitButtons.forEach(button => {
   button.addEventListener('click', () => {
      const widgets = document.querySelector(".widget")
    return  widgets.style.background = "red";
   })

})
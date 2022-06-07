//text area---------------------------------------------------------------
const textarea = document.querySelectorAll('textarea');
for (const area of textarea) {
   area.addEventListener('keydown', resize);
};
function resize() {
   const el = this;
   setTimeout(function () {
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
   }, 1);
};
//------------------------------------------------------------------------


//const addRecipe= document.querySelector('.app');
//fetch('/app.html')
//.then(res=>res.text())
//.then(data=>{
//    addRecipe.innerHTML=data
//    const parser = new DOMParser()
//    const doc = parser.parseFromString(data, 'text/html')
//    eval(doc.querySelector('script').textContent)
//})

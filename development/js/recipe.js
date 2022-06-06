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
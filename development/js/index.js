let indexValue = 1; // deklaruje zm
function side_slide(e) {
    showImg(indexValue += e);
}
function showImg(e) {
    let i;
    const img = document.querySelectorAll('.slideshow img');
    if (e > img.length) {
        indexValue = 1;
    }
    if (e < 1) {
        indexValue = img.length;
    }
    for (i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "inline-block";
}   
showImg(indexValue);

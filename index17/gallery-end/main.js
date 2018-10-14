var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
var pics = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
for (var i = 0; i < pics.length; i++) {

    var newImage = document.createElement('img');
    newImage.addEventListener('click', changePic);
    newImage.setAttribute('src', './images/' + pics[i]);
    thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */

tag = false;
btn.onclick = function() {
    if (!tag) {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
    tag = !tag;
}

function changePic() {
    displayedImage.setAttribute('src', this.src);
}
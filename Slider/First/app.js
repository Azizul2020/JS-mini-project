var rightBtn = document.querySelector(".next");
var leftBtn = document.querySelector(".previous");
var imageArea = document.querySelector(".image img");
//here must be link up img tag for src link add.
var images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
];
var count = 0;

function next() {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    imageArea.src = images[count];
}
rightBtn.addEventListener("click", next); //here must be avoid () after function name.
// setInterval(next, 1000);

function prev() {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    imageArea.src = images[count];
}
leftBtn.addEventListener("click", prev); // here must be avoid () after function name.
// setInterval(prev, 1000);
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);/* 0 is indication the position of 1st item here */
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 1000)
    // 1000 means the buttons will react after 1s after every clicks
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}
// INNER SLIDER
var btn = document.getElementsByClassName("btn");
var slide1 = document.getElementById("slider1");
var slide2 = document.getElementById("slider2");
var slide3 = document.getElementById("slider3");

// Function to handle button clicks
function handleButtonClick(index) {
    var offset = index * -800;
    slide1.style.transform = "translateX(" + offset + "px)";
    slide2.style.transform = "translateX(" + offset + "px)";
    slide3.style.transform = "translateX(" + offset + "px)";
    for (var i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
    btn[index].classList.add("active");
}
// Assign click event handlers to buttons
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        var index = parseInt(this.getAttribute("data-index"));
        handleButtonClick(index);
    });
}
nextButton.addEventListener("click", function() {
    var index = 0; // Set index to 0 when clicking nextButton
    handleButtonClick(index);
});




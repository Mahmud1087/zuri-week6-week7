// VARIABLE DECLARATIONS
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel--item');
const totalSlides = slides.length;

const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')


// FUNCTION TO UPDATE THE IMAGE POSITIONS IN THE SLIDE EACH TIME THE BUTTON IS CLICKED
function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('active');
        slide.classList.add('carousel--item--hidden');
    }

    slides[slidePosition].classList.add('active')
}


// FUNCTION THAT ALLOWS TO MOVE TO THE NEXT IMAGE IN THE SLIDE
function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}


// FUNCTION THAT ALLOWS TO MOVE TO BACK TO THE PREVIOUS IMAGE IN THE SLIDE
function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}


// NEXT BUTTON
nextBtn.addEventListener('click', function() {
    moveToNextSlide();
});

// PREVIOUS BUTTON
prevBtn.addEventListener('click', function() {
    moveToPrevSlide();
})
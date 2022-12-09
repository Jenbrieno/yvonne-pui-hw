// Reference code: https://www.w3schools.com/w3css/w3css_slideshow.asp

// Set the first image to '1'
let slideIndex = 1;
// Displays the first image
showDivs(slideIndex);

// Subtracts one or adds 1 to the slideIndex 
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  // If SlideIndex is higher than the number of elements in "mySlides", 
  // the slideIndex will be reset to '1'. The slideshow will display the first image.
  if (n > x.length) {slideIndex = 1}

  // If SlideIndex is lower than '1' the slideIndex will be set to the number
  // of elements in "mySlides". The slideshow will display the first image.
  if (n < 1) {slideIndex = x.length} ;
  
  // Displays the element in "mySlides" with the given slideIndex
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
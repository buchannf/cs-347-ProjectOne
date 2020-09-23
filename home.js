let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let slide = document.getElementsByClassName("slide");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slide.length) {slideIndex = 1}
  slide[slideIndex-1].style.display = "block";
  setTimeout(carousel, 7000); 
}

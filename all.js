var modal = document.querySelector('.user_login') 
var hideModal = document.querySelector('.overlay ')
var closeModal = document.querySelector('.close')
modal.onclick = function()
{
    hideModal.style.display = 'flex'
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === hideModal) {
        hideModal.style.display = "none";
    }
}
closeModal.onclick = function()
{
    hideModal.style.display='none'
}
var menuClick = document.querySelector('.icon-menu') 
var overMenuzz = document.querySelector('.overMenu')
menuClick.onclick = function(e)
{   
    overMenuzz.style.display = 'block'
}
var closeClick = document.querySelector('.header-login-icon-close')
closeClick.onclick = function()
{
    document.querySelector('.overMenu').style.display = 'none'
}


// slide show  
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

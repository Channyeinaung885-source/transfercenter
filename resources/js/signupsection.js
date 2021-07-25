
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const member = document.getElementById('member');

signUpButton.addEventListener('click', (e) => {
 member.classList.add("right-panel-active");
});

signInButton.addEventListener('click', (e) => {
 member.classList.remove("right-panel-active");
});
var slideIndex = 0;
        showSlides();
        
        function showSlides() {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot-slide");
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
          setTimeout(showSlides, 5000); // Change image every 2 seconds
        }

const tutorbot = document.getElementById('tutorbot');
const faqbot = document.getElementById('faqbot');
const phdproject = document.getElementById('phdproject');
const nlp = document.getElementById('nlp');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');

const skill = document.getElementById('skill');
const phdmenu = document.getElementById('phdproject');
const section4 = document.getElementById('section4');
const section5 =document.getElementById('section5');
const spacyMenu = document.getElementById('nlp')
const section6 = document.getElementById('section6');
const formulaire = document.getElementById('formular');
const competence = document.getElementById('comp');
const fahigkeit = document.getElementById('fahigkeit');


const media = document.getElementById('media');


/*tutorbot.addEventListener('click', function(e){
    //alert("bonjour");
    section4.style.display = "none";
    section1.style.display = "none";
    section3.style.display = "none";
    section2.style.display="block";
    section5.style.display = "none";
    section6.style.display = "none";
    skill.style.display = "none"; 
    //console.log(section2.innerHTML);
}, false);*/

/*faqbot.addEventListener('click', function(e){
    section4.style.display = "none";
    section1.style.display="none";
    section2.style.display = "none";
    section3.style.display = "block";
    section5.style.display = "none";
    section6.style.display = "none";
    skill.style.display = "none"; 
}, false);*/




competence.addEventListener('click', function(e){
    section4.style.display = "none";
    section1.style.display="none";
    section2.style.display = "none";
    section3.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
    skill.style.display = "block";
})


/*phdmenu.addEventListener('click', function(e){
    section5.style.display = "none";
    section1.style.display="none";
    section2.style.display = "none";
    section3.style.display = "none";
    skill.style.display = "none";
    section4.style.display = "block";
    section6.style.display = "none";
    
})*/

/*spacyMenu.addEventListener('click', function(e){
    section1.style.display="none";
    section2.style.display = "none";
    section3.style.display = "none";
    skill.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "block";
    section6.style.display = "none";
})
formulaire.addEventListener('click', function(e){
    section1.style.display="none";
    section2.style.display = "none";
    section3.style.display = "none";
    skill.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "block";
})*/

let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slide");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "flex";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 10000); // Change image every 2 seconds
    }

function reveal(){
        var reveals = document.querySelectorAll(".reveal");
        for(var i = 0; i<reveals.length; i++){
        var windowHeight = window.innerHeight; 
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 90; 
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active"); 
        }else{
            reveals[i].classList.remove("active"); 
        }
      }
    }

    window.addEventListener("scroll", reveal);   

    var menuSlideDropDown = document.getElementsByClassName("menuSlideDropDown")[0];
 var webChallenge = document.getElementsByClassName("webChallenge")[0];

 webChallenge.addEventListener('mouseover', function (e){
 menuSlideDropDown.style.display = "flex"; 
 })
 webChallenge.addEventListener('mouseout', function(e){
  menuSlideDropDown.style.display = "none"; 
 });

 menuSlideDropDown.addEventListener('mouseover', function(e){
  menuSlideDropDown.style.display = "flex"; 
 });

 menuSlideDropDown.addEventListener('mouseout', function(e){
  menuSlideDropDown.style.display = "none"; 
 });

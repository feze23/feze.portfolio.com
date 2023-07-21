
    var tutorbot = document.getElementById('tutorbot');
    var faqbot = document.getElementById('faqbot');
    var phdproject = document.getElementById('phdproject');
    var nlp = document.getElementById('nlp');
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');
    var comp = document.getElementById('com');
    var skill = document.getElementById('skill');
    var phdmenu = document.getElementById('phdproject');
    var section4 = document.getElementById('section4');
    var section5 =document.getElementById('section5');
    var spacyMenu = document.getElementById('nlp')
    var section6 = document.getElementById('section6');
    var formulaire = document.getElementById('formular');
    var competence = document.getElementById('comp');
    var fahigkeit = document.getElementById('fahigkeit');
    var ouvrage = document.getElementById('ouvrage');
    var mecontacter = document.getElementById('mecontacter');
    var media = document.getElementById('media');


    tutorbot.addEventListener('click', function(e){
        //alert("bonjour");
        section4.style.display = "none";
        section1.style.display = "none";
        section3.style.display = "none";
        section2.style.display="block";
        section5.style.display = "none";
        section6.style.display = "none";
        skill.style.display = "none"; 
        //console.log(section2.innerHTML);
    }, false);

    faqbot.addEventListener('click', function(e){
        section4.style.display = "none";
        section1.style.display="none";
        section2.style.display = "none";
        section3.style.display = "block";
        section5.style.display = "none";
        section6.style.display = "none";
        skill.style.display = "none"; 
    }, false);


    comp.addEventListener('click', function(e){
        section4.style.display = "none";
        section1.style.display="none";
        section2.style.display = "none";
        section3.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        skill.style.display = "block";
        skill.style.display = "block";
    })

    competence.addEventListener('click', function(e){
        section4.style.display = "none";
        section1.style.display="none";
        section2.style.display = "none";
        section3.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        skill.style.display = "block";
    })


    phdmenu.addEventListener('click', function(e){
        section5.style.display = "none";
        section1.style.display="none";
        section2.style.display = "none";
        section3.style.display = "none";
        skill.style.display = "none";
        section4.style.display = "block";
        section6.style.display = "none";
        
    })

    spacyMenu.addEventListener('click', function(e){
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
    })

    ouvrage.addEventListener('click', function(e){
        section1.style.display="none";
        section3.style.display = "none";
        skill.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section2.style.display = "block";
    })
    mecontacter.addEventListener('click', function(e){
        section1.style.display="none";
        section2.style.display = "none";
        section3.style.display = "none";
        skill.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section2.style.display = "none";
        media.style.display = "block";
    })

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
            var elementVisible = 100; 
            if(elementTop < windowHeight - elementVisible){
                reveals[i].classList.add("active"); 
            }else{
                reveals[i].classList.remove("active"); 
            }
          }
        }

        window.addEventListener("scroll", reveal);   
    


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
        //console.log(section2.innerHTML);
    }, false); 

    faqbot.addEventListener('click', function(e){
        section4.style.display = "none";
        section1.style.display="none";
        section2.style.display = "none";
        section3.style.display = "block";
        section5.style.display = "none";
        section6.style.display = "none";
    }, false);


    comp.addEventListener('click', function(e){
        section4.style.display = "none";
        section1.style.display="none";
        section2.style.display = "none";
        section3.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        skill.style.display = "block";
        fahigkeit.style.display = "block";
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
    

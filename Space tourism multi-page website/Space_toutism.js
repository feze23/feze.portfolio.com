const home = document.querySelector(".home"); 
const destination = document.querySelector(".destination");
const crew = document.querySelector(".crew");
const technologie = document.querySelector(".technologie");
const homeline = document.querySelector(".homeline");
const destinationline = document.querySelector(".destinationline");
const crewline = document.querySelector(".crewline");
const technologieline = document.querySelector(".technologieline");
const secondPage = document.querySelector(".secondPage");
const body = document.querySelector("body"); 
const firstPage = document.querySelector(".firstPage");


home.addEventListener("mouseover", function (){
    homeline.style.display = "block";
})
home.addEventListener("mouseout", function (){
    homeline.style.display = "none";
})
home.addEventListener('mousedown', function (){
    homeline.style.display = "block";
    home.addEventListener("mouseout", function (){
        homeline.style.display = "block";
    })
})

home.addEventListener("click", function (){
    firstPage.style.display = "flex";
    secondPage.style.display = "none";
    thirdPage.style.display = "none";
    fourPage.style.display = "none"; 
    body.style.backgroundImage= "url('background-home-desktop.jpg')"
    destinationline.style.display = "none"; 
    crewline.style.display = "none"; 
    technologieline.style.display ="none"; 
    destination.addEventListener("mouseout", function (){
        destinationline.style.display = "none";
    })
    crew.addEventListener("mouseout", function (){
        crewline.style.display = "none";
    })
    technologie.addEventListener("mouseout", function (){
        technologieline.style.display = "none";
    })

})

///////////////// Destination menu /////////////////////////////////////////////////



destination.addEventListener("click", function (){
    
    firstPage.style.display = "none";
    secondPage.style.display = "flex";
    thirdPage.style.display = "none";
    fourPage.style.display = "none"; 
    body.style.backgroundImage= "url('background-destination-desktop.jpg')";
    homeline.style.display = "none";
    crewline.style.display ="none"; 
    technologieline.style.display ="none"; 
    destinationline.style.display = "block";
    destination.addEventListener("mouseout", function (){
        destinationline.style.display = "block";
    })
    home.addEventListener("mouseout", function (){
        homeline.style.display = "none";
    })
    crew.addEventListener("mouseout", function (){
        crewline.style.display = "none";
    })
    technologie.addEventListener("mouseout", function (){
        technologieline.style.display = "none";
    })

    barre.style.display = "block";
})

destination.addEventListener("mouseover", function (){
    destinationline.style.display = "block";
}) 

destination.addEventListener("mouseout", function (){
    destinationline.style.display = "none";
})



const barre = document.querySelector(".barre"); 
const barreMars = document.querySelector(".barreMars");
const barreEurope = document.querySelector(".barreEuropa"); 
const barreTitan = document.querySelector(".barreTitan");
const moonMenu = document.querySelector(".moon"); 
const marsMenu = document.querySelector(".mars");
const europaMemu = document.querySelector(".europa");
const titanMenu = document.querySelector(".titan");

moonMenu.addEventListener("mouseover", function (){
    barre.style.display = "block";
})
moonMenu.addEventListener("mouseout", function (){
        barre.style.display = "none";
})

marsMenu.addEventListener("mouseover", function (){
    barreMars.style.display = "block";
})

 marsMenu.addEventListener("mouseout", function (){
    barreMars.style.display = "none";
})

europaMemu.addEventListener("mouseover", function (){
    barreEurope.style.display = "block";
})

europaMemu.addEventListener("mouseout", function (){
    barreEurope.style.display = "none";
})
titanMenu.addEventListener("mouseover", function (){
    barreTitan.style.display = "block";
})

titanMenu.addEventListener("mouseout", function (){
    barreTitan.style.display = "none";
})

const mainTitel = document.querySelector(".mainTitel"); 
const text = document.querySelector(".text");
const Miles = document.querySelector(".Miles");
const month = document.querySelector(".month");
const planetImage = document.querySelector (".planetImage"); 
const imyImage = document.getElementById("my-image");

marsMenu.addEventListener("click", function (){
    mainTitel.innerHTML = "MARS";
    text.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! ";
    Miles.innerHTML ="225 mil. km";
    month.innerHTML =" 9 months"; 
    imyImage.src = "image-mars.png"; 
    imyImage.alt ="Image of Mars";
    marsMenu.addEventListener("mouseout", function (){
        barreMars.style.display = "block";
    })
    barreEurope.style.display = "none"; 
    barreTitan.style.display ="none";
    barre.style.display ="none";
    moonMenu.addEventListener("mouseout", function (){
        barre.style.display = "none";
    })
    titanMenu.addEventListener("mouseout", function (){
        barreTitan.style.display = "none";
    })
    europaMemu.addEventListener("mouseout", function (){
        barreEurope.style.display = "none";
    })
})
moonMenu.addEventListener("click", function (){
    mainTitel.innerHTML = "MOON";
    text.innerHTML ="Moon See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites"
    Miles.innerHTML ="384,400 km";
    month.innerHTML ="3 days"; 
    imyImage.src = "image-moon.png";
    imyImage.alt ="Image of Moon";
    barreMars.style.display = "none"; 
    barreEurope.style.display = "none"; 
    barreTitan.style.display ="none";
    marsMenu.addEventListener("mouseout", function (){
        barreMars.style.display = "none";
    })
    titanMenu.addEventListener("mouseout", function (){
        barreTitan.style.display = "none";
    })
    europaMemu.addEventListener("mouseout", function (){
        barreEurope.style.display = "none";
    })
})
europaMemu.addEventListener("click", function (){
    mainTitel.innerHTML = "EUROPA";
    text.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    Miles.innerHTML = "628 mil. km";
    month.innerHTML ="3 years";
    imyImage.src = "image-europa.png";
    imyImage.alt ="Image of Europe";
    barreMars.style.display = "none"; 
    barre.style.display = "none"; 
    barreTitan.style.display ="none";
    marsMenu.addEventListener("mouseout", function (){
        barreMars.style.display = "none";
    })
    titanMenu.addEventListener("mouseout", function (){
        barreTitan.style.display = "none";
    })
    moonMenu.addEventListener("mouseout", function (){
        barre.style.display = "none";
    })
    europaMemu.addEventListener("mouseout", function (){
        barreEurope.style.display = "block";
    })
})
titanMenu.addEventListener("click", function (){
    mainTitel.innerHTML = "TITAN";
    text.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    Miles.innerHTML ="1.6 bil. km";
    month.innerHTML ="7 years";
    imyImage.src ="image-titan.png";
    imyImage.alt="Image of Titan"; 
    barreMars.style.display = "none"; 
    barre.style.display = "none"; 
    barreEurope.style.display ="none";
    marsMenu.addEventListener("mouseout", function (){
        barreMars.style.display = "none";
    })
    titanMenu.addEventListener("mouseout", function (){
        barreTitan.style.display = "block";
    })
    moonMenu.addEventListener("mouseout", function (){
        barre.style.display = "none";
    })
    europaMemu.addEventListener("mouseout", function (){
        barreEurope.style.display = "none";
    })
})


//////////////////////////////// CREW ///////////////////////////////////////////////////////////////////

const number = document.querySelector(".number");
const titel = document.querySelector(".titel");
const thirdPage = document.querySelector(".thirdPage");

crew.addEventListener("mouseover", function (){
    crewline.style.display = "block";
})

crew.addEventListener("mouseout", function (){
    crewline.style.display = "none";
})

crew.addEventListener("click", function(){
    body.style.backgroundImage= "url('background-crew-desktop.jpg')";
    thirdPage.style.display = "flex";
    firstPage.style.display= "none";
    secondPage.style.display ="none";
    fourPage.style.display = "none"; 
    destinationline.style.display = "none"; 
    homeline.style.display ="none";
    technologieline.style.display = "none"; 
    crew.addEventListener("mouseout", function (){
        crewline.style.display = "block";
    })
    home.addEventListener("mouseout", function (){
        homeline.style.display = "none";
    })
   
    technologie.addEventListener("mouseout", function (){
        technologieline.style.display = "none";
    })
    destination.addEventListener("mouseout", function (){
        destinationline.style.display = "none";
    })

})

const radioManu2 = document.querySelector(".radioManu2"); 
const radiomanu3 = document.querySelector(".radiomanu3"); 
const radiomanu4 = document.querySelector(".radiomanu4"); 
const radioManu1 = document.querySelector(".radioManu1"); 
const flight_ingenieur = document.querySelector(".flight_ingenieur"); 
const Anousheh_Ansari = document.querySelector(".Anousheh_Ansari"); 
const crewtexttext = document.getElementById("crewtexttext"); 
const imageActor = document.getElementById("imageActor");

function gotoPilot () {
    radioManu2.style.backgroundColor = "white"; 
    flight_ingenieur.innerHTML ="Pilot"; 
    Anousheh_Ansari.innerHTML ="Victor Glover";
    crewtexttext.innerHTML ="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    radioManu1.style.backgroundColor = "gray"; 
    imageActor.src ="image-victor-glover.png";
    imageActor.alt ="Portrait of Victor Glover";
}

function gotoSpecialist () {
    radiomanu3.style.backgroundColor = "white"; 
    flight_ingenieur.innerHTML ="Specialist"; 
    Anousheh_Ansari.innerHTML ="Mark Shuttleworth";
    crewtexttext.innerHTML ="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    radioManu1.style.backgroundColor = "gray"; 
    radioManu2.style.backgroundColor = "gray";
    imageActor.src ="image-mark-shuttleworth.png";
    imageActor.alt ="Portrait of Mark";
}
function gotoingeneer () {
    radiomanu4.style.backgroundColor = "white"; 
    flight_ingenieur.innerHTML ="Flight Engineer"; 
    Anousheh_Ansari.innerHTML ="Anousheh Ansari";
    crewtexttext.innerHTML ="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    radioManu1.style.backgroundColor = "gray"; 
    radioManu2.style.backgroundColor = "gray"; 
    radiomanu3.style.backgroundColor = "gray"; 
    imageActor.src ="image-anousheh-ansari.png";
    imageActor.alt ="Portrait of Anousheh Ansari";
}

function gotocommander () {
    radioManu1.style.backgroundColor = "white"; 
    flight_ingenieur.innerHTML ="Commander"; 
    Anousheh_Ansari.innerHTML ="Douglas Hurley";
    crewtexttext.innerHTML ="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    radiomanu4.style.backgroundColor = "gray"; 
    radioManu2.style.backgroundColor = "gray"; 
    radiomanu3.style.backgroundColor = "gray"; 
    imageActor.src ="image-douglas-hurley.png";
    imageActor.alt ="Portrait of Douglas Hurley";
}

        setInterval(gotoPilot, 10000); 
        setInterval(gotoSpecialist, 20000); 
        setInterval(gotoingeneer, 30000);
        setInterval(gotocommander, 40000);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const fourPage = document.querySelector (".fourPage");
const technologiecontainMenuNumber1 = document.querySelector(".technologiecontainMenuNumber1"); 
const technologiecontainMenuNumber2 = document.querySelector(".technologiecontainMenuNumber2"); 
const technologiecontainMenuNumber3 = document.querySelector(".technologiecontainMenuNumber3"); 
const technologiecontainTextTechnologie = document.querySelector(".technologiecontainTextTechnologie"); 
const technologiecontainTextTitel = document.querySelector(".technologiecontainTextTitel"); 
const technologiecontainTextTitelText = document.querySelector(".technologiecontainTextTitelText"); 
const imageLaunchVehiclePortrait = document.querySelector(".image-launch-vehicle-portrait"); 
const technologiecontainMenu = document.querySelector(".technologiecontainMenu"); 




technologie.addEventListener("mouseover", function (){
    technologieline.style.display = "block";
})

technologie.addEventListener("mouseout", function (){
    technologieline.style.display = "none";
})
technologie.addEventListener("click", function (){
    fourPage.style.display ="flex";
    body.style.backgroundImage = "url('background-technology-desktop.jpg')";
    thirdPage.style.display = "none";
    firstPage.style.display= "none";
    secondPage.style.display ="none";
    homeline.style.display ="none";
    crewline.style.display ="none";
    destinationline.style.display ="none";
    technologiecontainMenuNumber1.style.backgroundColor = "white"; 
    technologiecontainMenuNumber1.style.color = " rgb(1, 1, 24)";
    technologiecontainMenuNumber2.style.backgroundColor = "transparent"; 
    technologiecontainMenuNumber2.style.color = " white";
    technologiecontainMenuNumber3.style.backgroundColor = "transparent"; 
    technologiecontainMenuNumber3.style.color = " white";

    technologie.addEventListener("mouseout", function (){
        technologieline.style.display = "block"; 
    })
    home.addEventListener("mouseout", function (){
        homeline.style.display = "none"; 
    })
    crew.addEventListener("mouseout", function (){
        crewline.style.display = "none"; 
    })
    destination.addEventListener("mouseout", function (){
        destinationline.style.display = "none"; 
    })
})

technologiecontainMenuNumber2.addEventListener("click", function(){
    technologiecontainMenuNumber2.style.backgroundColor = "white";
    technologiecontainMenuNumber2.style.color = "rgb(1, 2, 24)"; 
    technologiecontainMenuNumber1.style.backgroundColor = "transparent"; 
    technologiecontainMenuNumber1.style.color = "white";
    technologiecontainMenuNumber3.style.backgroundColor = "transparent"; 
    technologiecontainMenuNumber3.style.color = "white";
    technologiecontainTextTitel.innerHTML ="Spaceport"; 
    technologiecontainTextTitelText.innerHTML ="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    imageLaunchVehiclePortrait.src ="image-spaceport-portrait.jpg";
    imageLaunchVehiclePortrait.alt ="image of spaceport"
})

technologiecontainMenuNumber1.addEventListener("click", function(){
    technologiecontainMenuNumber1.style.backgroundColor = "white";
    technologiecontainMenuNumber1.style.color = "rgb(1, 2, 24)"; 
    technologiecontainMenuNumber3.style.backgroundColor = "transparent"; 
    technologiecontainMenuNumber3.style.color = "white";
    technologiecontainMenuNumber2.style.backgroundColor = "transparent"; 
    technologiecontainMenuNumber2.style.color = "white";
    technologiecontainTextTitel.innerHTML ="Launch vehicle"; 
    technologiecontainTextTitelText.innerHTML ="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    imageLaunchVehiclePortrait.src ="image-launch-vehicle-portrait.jpg";
    imageLaunchVehiclePortrait.alt ="image of launch vehicle";
})

technologiecontainMenuNumber3.addEventListener("click", function(){
    technologiecontainMenuNumber3.style.backgroundColor = "white";
    technologiecontainMenuNumber3.style.color = "rgb(1, 2, 24)"; 
    technologiecontainMenuNumber1.style.backgroundColor = "transparent"; 
    technologiecontainMenuNumber1.style.color = "white";
    technologiecontainMenuNumber2.style.backgroundColor = "transparent"; 
    technologiecontainMenuNumber2.style.color = "white";
    technologiecontainTextTitel.innerHTML ="Space capsule"; 
    technologiecontainTextTitelText.innerHTML ="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    imageLaunchVehiclePortrait.src ="image-space-capsule-portrait.jpg";
    imageLaunchVehiclePortrait.alt ="image of spaca capsule"
})

////7////////////////// responsive design////////////////////////////
const responsiveMenu = document.querySelector(".responsiveMenu");
const responsiveButtonClose = document.querySelector(".responsiveButtonClose"); 
const hamburger = document.querySelector(".hamburger"); 
const homeResponsive = document.querySelector(".homeResponsive"); 
const destinationResponsive = document.querySelector(".destinationResponsive"); 
const crewResponsive = document.querySelector(".crewResponsive"); 
const technologieResponsive = document.querySelector(".technologieResponsive"); 

hamburger.addEventListener("click", function(){
    responsiveMenu.style.display = "block"; 
})
responsiveButtonClose.addEventListener("click", function (){
    responsiveMenu.style.display = "none";
})

homeResponsive.addEventListener("click", function(){
    firstPage.style.display = "flex";
    secondPage.style.display = "none"; 
    thirdPage.style.display = "none", 
    fourPage.style.display = "none"; 
    responsiveMenu.style.display = "none";
    body.style.backgroundImage = "url('background-home-mobile.jpg')";
    responsiveMenu.style.backgroundImage = "url('background-home-mobile.jpg')";
    responsiveMenu.style.backgroundRepeat = "no-repeat"; 
    if(screen.width <= 640){
        responsiveMenu.style.width = "87%";
        responsiveMenu.style.height = "400px";
        responsiveMenu.style.backgroundSize ="100% 400px";
        responsiveButtonClose.style.marginLeft = "86%";
    }
    if(screen.width >= 641 && screen.width <= 1222){
        body.style.backgroundImage = "url('background-home-tablet.jpg')";
        body.style.backgroundRepeat= "no-repeat";
        body.style.backgroundSize= "100% 1901px";
        responsiveMenu.style.width ="100%"; 
        responsiveMenu.style.backgroundSize ="98% 706px";
    }
   
})
const menuresponsive = document.querySelector(".menuresponsive"); 
destinationResponsive.addEventListener("click", function(){
    firstPage.style.display = "none";
    secondPage.style.display = "flex"; 
    thirdPage.style.display = "none", 
    fourPage.style.display = "none"; 
    responsiveMenu.style.display = "none";
    body.style.backgroundImage = "url('background-destination-mobile.jpg')";
    body.style.backgroundRepeat= "no-repeat";
    body.style.backgroundSize= "100%  1901px";
    responsiveMenu.style.backgroundImage = "url('background-destination-mobile.jpg')";
    responsiveMenu.style.backgroundRepeat = "no-repeat"; 
    responsiveMenu.style.backgroundSize ="74% 506px";
    responsiveMenu.style.width ="63%";
   
    if(screen.width <= 640){
        responsiveMenu.style.width = "45%";
        responsiveMenu.style.height = "400px";
        responsiveMenu.style.backgroundSize ="100% 400px";
        responsiveButtonClose.style.marginLeft = "86%";
    }
    if(screen.width >= 641 && screen.width <= 1222){
        body.style.backgroundImage = "url('background-destination-tablet.jpg')";
        body.style.backgroundRepeat= "no-repeat";
        body.style.backgroundSize= "100%  1901px";
        responsiveMenu.style.width ="90%"; 
        responsiveMenu.style.backgroundSize ="98% 706px";
    }
})
crewResponsive.addEventListener("click", function(){
    firstPage.style.display = "none";
    secondPage.style.display = "none"; 
    thirdPage.style.display = "flex", 
    fourPage.style.display = "none"; 
    responsiveMenu.style.display = "none";
    body.style.backgroundImage = "url('background-crew-mobile.jpg')"; 
    body.style.backgroundSize ="100% 1467px;"
    responsiveMenu.style.backgroundImage = "url('background-crew-mobile.jpg')";
    responsiveMenu.style.backgroundRepeat = "no-repeat"; 
    responsiveMenu.style.backgroundSize ="98% 506px";
    responsiveMenu.style.width ="100%";
    if(screen.width <= 640){
        responsiveMenu.style.width = "87%";
        responsiveMenu.style.height = "400px";
        responsiveMenu.style.backgroundSize ="100% 400px";
        responsiveButtonClose.style.marginLeft = "86%";
    }
    if(screen.width >= 641 && screen.width <= 1222){
        body.style.backgroundImage = "url('background-crew-tablet.jpg')";
        body.style.backgroundRepeat= "no-repeat";
        body.style.backgroundSize= "100% 2467px";
        responsiveMenu.style.width ="100%"; 
        responsiveMenu.style.backgroundSize ="98% 706px";
        
    }

})



technologieResponsive.addEventListener("click", function(){
    firstPage.style.display = "none";
    secondPage.style.display = "none"; 
    thirdPage.style.display = "none", 
    fourPage.style.display = "flex"; 
    responsiveMenu.style.display = "none";
    body.style.backgroundImage = "url('background-technology-mobile.jpg')"; 
    responsiveMenu.style.backgroundImage = "url('background-technology-mobile.jpg')";
    responsiveMenu.style.backgroundRepeat = "no-repeat"; 
    responsiveMenu.style.backgroundSize ="98% 506px";
    responsiveMenu.style.width ="100%";
    technologiecontainMenuNumber1.style.width ="250%";
    technologiecontainMenuNumber2.style.width ="250%";
    technologiecontainMenuNumber3.style.width ="250%";
    technologiecontainMenuNumber1.style.backgroundColor = "white";
    technologiecontainMenuNumber1.style.color = "rgb(1, 2, 24)"; 
    technologiecontainMenuNumber3.addEventListener("click", function(){
        technologiecontainMenuNumber3.style.width ="250%";
    })

    technologiecontainMenuNumber1.addEventListener("click", function(){
        technologiecontainMenuNumber1.style.width ="250%";
    technologiecontainMenuNumber2.style.width ="250%";
    technologiecontainMenuNumber3.style.width ="250%";
    })

    if(screen.width <= 640){
        responsiveMenu.style.width = "75%";
        responsiveMenu.style.height = "400px";
        responsiveMenu.style.backgroundSize ="100% 400px";
        responsiveButtonClose.style.marginLeft = "86%";
    }

    
    if(screen.width >= 641 && screen.width <= 1222){
        body.style.backgroundImage = "url('background-technology-tablet.jpg')";
        body.style.backgroundRepeat= "no-repeat";
        body.style.backgroundSize= "100%  1901px";
        responsiveMenu.style.width ="100%"; 
        responsiveMenu.style.backgroundSize ="98% 706px";
        technologiecontainMenuNumber1.style.width ="40%";
        technologiecontainMenuNumber2.style.width ="40%";
        technologiecontainMenuNumber3.style.width ="40%";
        technologiecontainMenuNumber1.style.backgroundColor = "white";
        technologiecontainMenuNumber1.style.color = "rgb(1, 2, 24)"; 
        technologiecontainMenuNumber3.addEventListener("click", function(){
        technologiecontainMenuNumber3.style.width ="40%";
        })

        technologiecontainMenuNumber1.addEventListener("click", function(){
            technologiecontainMenuNumber1.style.width ="40%";
            technologiecontainMenuNumber2.style.width ="40%";
            technologiecontainMenuNumber3.style.width ="40%";
        })
        technologiecontainMenuNumber2.addEventListener("click", function(){
            technologiecontainMenuNumber1.style.width ="450%";
            technologiecontainMenuNumber2.style.width ="450%";
            technologiecontainMenuNumber3.style.width ="450%";
        })
        technologiecontainMenuNumber3.addEventListener("click", function(){
            technologiecontainMenuNumber1.style.width ="40%";
            technologiecontainMenuNumber2.style.width ="40%";
            technologiecontainMenuNumber3.style.width ="40%";
        })
        
    }
})

  

    
    


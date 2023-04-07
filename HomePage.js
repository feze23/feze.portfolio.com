const hotDogMenu = document.querySelector(".hotDogMenu"); 
const shaddowContainer = document.querySelector(".shaddowContainer");
const ResponsiveContainer = document.querySelector(".ResponsiveContainer"); 
const close = document.querySelector(".close");
const horizontalMenuItem11 = document.querySelector(".horizontalMenuItem11"); 
const horizontalMenuItem21 = document.querySelector(".horizontalMenuItem21"); 
const horizontalMenuItem31 = document.querySelector(".horizontalMenuItem31"); 
const horizontalMenuItem41 = document.querySelector(".horizontalMenuItem41");
const horizontalMenuItem51 = document.querySelector(".horizontalMenuItem51"); 




function goToResponsiveMenu (){
    shaddowContainer.style.display= "block"; 
    ResponsiveContainer.style.display="flex"; 
}

function goToMainContainer (){
    shaddowContainer.style.display= "none"; 
    ResponsiveContainer.style.display="none";
}

close.addEventListener("click", goToMainContainer);

horizontalMenuItem11.addEventListener("click", goToMainContainer); 
horizontalMenuItem21.addEventListener("click", goToMainContainer); 
horizontalMenuItem31.addEventListener("click", goToMainContainer); 
horizontalMenuItem41.addEventListener("click", goToMainContainer); 
horizontalMenuItem51.addEventListener("click", goToMainContainer); 

hotDogMenu.addEventListener("click", goToResponsiveMenu);

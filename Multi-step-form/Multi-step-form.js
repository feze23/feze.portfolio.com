//varaiable declaration and navagiation in DOM
const formularName = document.querySelector("#name"); 
const formularEmailAdress = document.querySelector("#emailAdress"); 
const formularPhoneNumber = document.querySelector("#phoneNumber"); 
const buttonFormular = document.getElementById('Btn-formular');
const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const inputPhoneNumber = document.querySelector('#inputPhoneNumber'); 
const formular = document.querySelector("#formular");
const formularContainer = document.querySelector(".formular-container");
const payPlan= document.querySelector(".payPlan"); 
const formularErray = [formularName, formularEmailAdress, formularPhoneNumber];

// tag element, attribut and text html vreation
const tagErrorName = document.createElement('div');
let attributeTagErrorName = document.createAttribute('class'); 
let attributeTagErrorNameValue = attributeTagErrorName.value = 'messageError'; 
const tagErrorEmail = document.createElement('div');
let attributeTagErrorEmail = document.createAttribute('class'); 
let attributeTagErrorEmailValue = attributeTagErrorEmail.value = 'messageError';

const tagErrorPhone = document.createElement('div');
let attributeTagErrorPhone = document.createAttribute('class'); 
let attributeTagErrorPhoneValue = attributeTagErrorPhone.value = 'messageError';

tagErrorName.setAttributeNode(attributeTagErrorName); 
tagErrorEmail.setAttributeNode(attributeTagErrorEmail);
tagErrorPhone.setAttributeNode(attributeTagErrorPhone);


// Form control 

function myFunction() {
   if (formularName.value === ""){
        tagErrorName.textContent ="Enter your name"; 
        inputName.insertBefore(tagErrorName, formularName);
        formularName.style.border = "2px solid red";
    }
    if (formularEmailAdress.value === ""){
        tagErrorEmail.textContent ="Enter your email adress"; 
        inputEmail.insertBefore(tagErrorEmail, formularEmailAdress); 
        formularEmailAdress.style.border = "2px solid red";
    }
    if(formularPhoneNumber.value === ""){
        tagErrorPhone.textContent ="Enter phone number"; 
        inputPhoneNumber.insertBefore(tagErrorPhone, formularPhoneNumber); 
        formularPhoneNumber.style.border = "2px solid red";
    }
    if(formularName.value && formularEmailAdress.value && formularPhoneNumber.value){
        formularContainer.style.display = "none";
        payPlan.style.display = "flex"
        buttonStep2.style.backgroundColor = "rgb(186, 235, 219)";
        buttonStep1.style.backgroundColor = "rgb(76, 76, 225)" 
    }
  }

// button side 
buttonFormular.addEventListener("click", myFunction);

const Btn1 = document.querySelector(".Btn-1"); 
const buttonStep1 = document.querySelector(".Btn1")
const buttonStep2 = document.querySelector(".Btn2")

// function to go to form container
function goToFormularContainer (){
    thankYou.style.display= "none";
    payPlan.style.display = "none";
    formularContainer.style.display = "block"; 
    addOns.style.display = "none";
    buttonStep1.style.backgroundColor = "rgb(186, 235, 219)";
    buttonStep1.style.color = "black"; 
    buttonStep2.style.backgroundColor = "rgb(76, 76, 225)";
    buttonStep2.style.color = "white";
    btn3.style.backgroundColor= "rgb(76, 76, 225)";
    btn3.style.color= "white";
    btn4.style.backgroundColor = "rgb(76, 76, 225)"; 
    btn4.style.color = "white"; 
    Summary.style.display= "none";
}

Btn1.addEventListener("click", goToFormularContainer); 
buttonStep2.addEventListener("click", goToPayplan);

// gestion des bouton de navigation

const Btn2 = document.querySelector(".Btn-2"); 

Btn2.addEventListener("click", myFunction); 
const goBackToForm = document.querySelector(".goBack"); 
goBackToForm.addEventListener("click", goToFormularContainer); 

const yearly = document.querySelector(".yearly"); 
const inputSwitch = document.querySelector("#inputSwitch"); 
const ChooseBarMonthly = document.querySelector(".ChooseBarMonthly"); 
const totalpricep = document.querySelector('.totalTextp');

inputSwitch.addEventListener('change',function(){
    if(this.checked === true) {
        yearly.style.color = "navy";
        yearly.style.fontWeight = "bold";
        ChooseBarMonthly.style.fontWeight = "lighter" ;
        summaryPayPlanModeleChoose.insertAdjacentHTML("beforeend", "<span> (Year)</span>");
        totalpricep.insertAdjacentHTML('beforeend', '<span> (Per year)</span>');
    } else{
        ChooseBarMonthly.style.color = "navy";
        yearly.style.fontWeight = "lighter";
        ChooseBarMonthly.style.fontWeight = "bold"; 
        summaryPayPlanModeleChoose.insertAdjacentHTML("beforeend", "<span> (Monthly)</span>");
    }
});

const arcade = document.querySelector('.arcade'); 
const advances = document.querySelector('.advances');
const pro = document.querySelector('.pro');


const  payPlanActivateArcade = () =>{
    arcade.style.backgroundColor = " rgb(216, 216, 209)";
    arcade.style.border = "2px solid navy"; 
    advances.style.backgroundColor = "beige";
    advances.style.border = "2px solid gray";
    pro.style.backgroundColor = " beige";
    pro.style.border = "2px solid gray";
    summaryPayPlanModeleChoose.textContent = 'Arcade'; 
    pricePayPlanSpan.textContent = '9'; 
}
const  payPlanActivateAdvanced = () =>{
    advances.style.backgroundColor = " rgb(216, 216, 209)";
    advances.style.border = "2px solid navy"; 
    pro.style.backgroundColor = " beige";
    pro.style.border = "2px solid gray";
    arcade.style.backgroundColor = " beige";
    arcade.style.border = "2px solid gray";
    summaryPayPlanModeleChoose.textContent = 'Advanced'; 
    pricePayPlanSpan.textContent = '12'; 
}

const  payPlanActivatePro = () =>{
    pro.style.backgroundColor = " rgb(216, 216, 209)";
    pro.style.border = "2px solid navy";
    arcade.style.backgroundColor = " beige";
    arcade.style.border = "2px solid gray"; 
    advances.style.backgroundColor = " beige";
    advances.style.border = "2px solid gray";
    summaryPayPlanModeleChoose.textContent = 'Pro'; 
    pricePayPlanSpan.textContent = '15'; 
}


arcade.addEventListener("click", payPlanActivateArcade);

advances.addEventListener("click", payPlanActivateAdvanced); 

pro.addEventListener("click", payPlanActivatePro);


//////////////////////////////ADD ONS//////////////////////////////////////

const addOnsBtnnext = document.querySelector('.Btnnext');  
const addOnsGoback = document.querySelector('.AddOnsgoBack');  
const addOns = document.querySelector('.addOns'); 
function gotoAddOns (){
    thankYou.style.display= "none";
    addOns.style.display = "flex"; 
    payPlan.style.display = "none"; 
    btn3.style.backgroundColor= "rgb(186, 235, 219)"; 
    btn3.style.color= "black";   
    buttonStep2.style.backgroundColor = "rgb(76, 76, 225)";   
    buttonStep2.style.color = "white";
    buttonStep1.style.backgroundColor = "rgb(76, 76, 225)";
    buttonStep1.style.color = "white";
    formularContainer.style.display = "none"; 
    btn4.style.backgroundColor = "rgb(76, 76, 225)"; 
    btn4.style.color = "white";
    Summary.style.display= "none";
}
addOnsBtnnext.addEventListener("click", gotoAddOns);
function goToPayplan (){
    thankYou.style.display= "none";
    addOns.style.display = "none"; 
    payPlan.style.display = "flex";
    btn3.style.backgroundColor= "rgb(76, 76, 225)";
    btn3.style.color= "white";
    buttonStep2.style.backgroundColor = "rgb(186, 235, 219)";
    buttonStep2.style.color = "black";
    buttonStep1.style.backgroundColor = "rgb(76, 76, 225)";
    buttonStep1.style.color = "white";
    formularContainer.style.display = "none";
    btn4.style.backgroundColor = "rgb(76, 76, 225)"; 
    btn4.style.color = "white";
    Summary.style.display= "none";
}
addOnsGoback.addEventListener("click", goToPayplan);
const btn3= document.querySelector('.Btn3'); 
btn3.addEventListener("click", gotoAddOns);

///////////////////////////////////////////////navigation side //////////////////////////////////////////////////////////////////////

const step1 = document.querySelector('.step-1');
const step2 = document.querySelector('.step-2');
const step3 = document.querySelector('.step-3');
const step4 = document.querySelector('.step-4');

step1.addEventListener("click", goToFormularContainer); 
step2.addEventListener("click", goToPayplan);
step3.addEventListener("click", gotoAddOns);

//Pick odd check if the extra service are ordered

const inputChec = document.querySelector('.larger');
const inputChec1 = document.querySelector('.larger1');
const inputChec2 = document.querySelector('.larger2');

function inputCheckbox (){
    inputChec.checked = true;
    summaryAddOnsChoose1.style.display = "flex";
    valueOnlineService.textContent = '1';
}

function inputCheckbox1 (){
    inputChec1.checked = true;
    summaryAddOnsChoose2.style.display = "flex"; 
    valueLargerStorage.textContent = '2'; 
}

function inputCheckbox2 (){
    inputChec2.checked = true;
    summaryAddOnsChoose3.style.display = "flex"; 
    valueCustomiseProfil.textContent = '2'; 
}

const AddOnsOnlineService = document.querySelector('.AddOnsOnlineService'); 
const AddOnsLargerStorage= document.querySelector('.AddOnsLargerStorage'); 
const AddOnsCustomiseProfile= document.querySelector('.AddOnsCustomiseProfile');

AddOnsOnlineService.addEventListener("click", inputCheckbox); 
AddOnsLargerStorage.addEventListener("click", inputCheckbox1);
AddOnsCustomiseProfile.addEventListener("click", inputCheckbox2);


////////////////////////////JS SUMMARY////////////////////////

const Summary = document.querySelector('.Summary'); 
let summaryPayPlanModeleChoose = document.querySelector('.summaryPayPlanModeleChoose'); 
const pricePayPlanSpan = document.querySelector('.pricePayPlanSpan'); 
const summuryBtn = document.querySelector('.AddOnsBtnnext'); 
const btn4 = document.querySelector('.Btn4'); 
const summaryGoBack = document.querySelector('.summaryGoBack'); 
const summaryLien = document.querySelector('.lien'); 
const summaryAddOnsChoose1 = document.querySelector('.summaryAddOnsChoose1');
const summaryAddOnsChoose2  = document.querySelector('.summaryAddOnsChoose2');
const summaryAddOnsChoose3 = document.querySelector('.summaryAddOnsChoose3');
const totalpricet = document.querySelector('.totalpricet'); 
const valueOnlineService = document.querySelector('.valueOnlineService'); 
const valueLargerStorage = document.querySelector('.valueLargerStorage'); 
const valueCustomiseProfil = document.querySelector('.valueCustomiseProfil'); 
summaryLien.addEventListener("click", goToPayplan ); 

function goToSummary (){
    thankYou.style.display= "none";
    Summary.style.display = "flex"; 
    addOns.style.display = "none"; 
    payPlan.style.display = "none";
    formularContainer.style.display = "none";
    btn4.style.backgroundColor = "rgb(186, 235, 219)";
    btn4.style.color= "black";
    btn3.style.backgroundColor = "rgb(76, 76, 225)";
    btn3.style.color = "white";
    buttonStep2.style.backgroundColor = "rgb(76, 76, 225)"; 
    buttonStep2.style.color = "white";
    buttonStep1.style.backgroundColor = "rgb(76, 76, 225)";
    buttonStep1.style.color = "white"; 
    let total = Number(valueOnlineService.textContent) + Number(valueLargerStorage.textContent) + Number(valueCustomiseProfil.textContent)
                   + Number(pricePayPlanSpan.textContent); 
    totalpricet.textContent= "+$"+ total + "/mo";  
}
 
summuryBtn.addEventListener("click", goToSummary); 
step4.addEventListener("click", goToSummary); 
btn4.addEventListener("click", goToSummary);
summaryGoBack.addEventListener("click", gotoAddOns);

////////////////////////////JS thaks page////////////////////////
const thankYou = document.querySelector('.thankYou'); 
const summaryBtnnext = document.querySelector('.summaryBtnnext'); 
function goTothanksYou (){
    payPlan.style.display = "none";
    formularContainer.style.display = "none"; 
    addOns.style.display = "none";
    buttonStep1.style.backgroundColor = "rgb(76, 76, 225)";
    buttonStep1.style.color = "black"; 
    buttonStep2.style.backgroundColor = "rgb(76, 76, 225)";
    buttonStep2.style.color = "white";
    btn3.style.backgroundColor= "rgb(76, 76, 225)";
    btn3.style.color= "white";
    btn4.style.backgroundColor = "rgb(186, 235, 219)"; 
    btn4.style.color = "white"; 
    Summary.style.display= "none";
    thankYou.style.display= "flex"; 
}

  summaryBtnnext.addEventListener("click", goTothanksYou);   





        var masculin = document.getElementById('masculin');
        var feminin = document.getElementById('feminin');
        var nom = document.getElementById('nom');
        var prenon = document.getElementById('prenom');
        var age = document.getElementById('age');
        var pseudo = document.getElementById('pseudo');
        var motpasse = document.getElementById('motDePasse');
        var motpasse1 = document.getElementById('ConfrirMotDePasse');
        var pays = document.getElementById('pays');
        var mail = document.getElementById('mail');
        var soumettre = document.getElementById('soumettre');
        var recommecer = document.getElementById('recommencer');
        var field = document.getElementById('fiedl');
        var page = document.getElementById('page1'), page1 = document.getElementById('page'),
            page2 = document.getElementById('page2'), page3 = document.getElementById('page3'), page4 = document.getElementById('page4'),
            page5 = document.getElementById('page5'), page6 = document.getElementById('page6'), page7 = document.getElementById('page7');
        var option = document.getElementById('options');
        var alert = document.getElementById('alert')
        var messageAvertissement = "Vérifiez que tous les champs du formulaire sont bien remplis";

         nom.addEventListener('click', function(e){
            page.innerHTML = "(votre nom doit avoir plus de 2 caractères)";
         }, false);

         nom.addEventListener('keypress', function(e){
            page.innerHTML = " ";
         },false);

         field.addEventListener('mouseover', function(e){
            page1.innerHTML = "vous devez choisir votre sexe)";
         }, false);

         masculin.addEventListener('click', function(e){
            page1.innerHTML = " ";
         },);

         feminin.addEventListener('click', function(e){
            page1.innerHTML = " ";
         },);

         field.addEventListener('mouseout', function(e){
            page1.innerHTML = " ";
         }, false);

         prenon.addEventListener('click', function(e){
            page2.innerHTML = "(Votre prénon doit avoir plus de 2 caractères)";
         },false);
         prenon.addEventListener('keypress', function (e){
            page2.innerHTML=" "
         }, false);

         age.addEventListener('click', function(e){
            page3.innerHTML = "(Votre âge doit être un chiffre compris entre 5 et 140)";
         }, false);

         var valeurAge = age.value; 
         age.addEventListener('keypress', function(e){
            page3.innerHTML = " ";   
         }, false);

         
       
         
        
         pseudo.addEventListener('click', function(e){
            page4.innerHTML ="(votre pseudo doit avoir au moins 4 caractères)"
         }, false);
         pseudo.addEventListener('keypress', function(e){
            page4.innerHTML =" "
         }, false);

         motpasse.addEventListener('click', function(e){
            page5.innerHTML ="(votre mot de passe doit avoir au moins 6 caractères)";
         }, false);
         motpasse.addEventListener('keypress', function(e){
            page5.innerHTML =" "
         }, false);

         motpasse1.addEventListener('click', function(e){
            page6.innerHTML ="(ce mot de passe doit être identique au pécédent)";
         }, false);
         motpasse1.addEventListener('keypress', function(e){
            page6.innerHTML =" "
         }, false);

         pays.addEventListener('click', function(e){
            page7.innerHTML ="(Déroulez le menu pour choisir votre pays)";
         }, false);
         pays.addEventListener('mouseout', function(e){
            page7.innerHTML =" ";
         }, false);


        /*soumettre.addEventListener('click', function(e){
            if(masculin.checked == false && feminin.checked == false){
                alert.innerHTML = messageAvertissement;
            }else if(nom.value == ""){
                alert.innerHTML = messageAvertissement;
            }else if(prenon.value == ""){
                alert.innerHTML = messageAvertissement;
            }else if(age.value == ""){
                alert.innerHTML = messageAvertissement;
            }else if(option.value == " "){
                alert.innerHTML = messageAvertissement;
            }else if(motpasse.value == ""){
                alert.innerHTML = messageAvertissement;
            }else if(motpasse1.value == ""){
                alert.innerHTML = messageAvertissement;
            }else if(pseudo.value == ""){
                alert.innerHTML = messageAvertissement;
            }
        
     }, false)*/
     
     var tab = [ masculin, nom, prenon, age, option, motpasse, motpasse1, pseudo];

     console.log(tab[2].value);
     soumettre.addEventListener('click', function(e){
      for(var i = 0; i < tab.length; i++){
              if (tab[i].value != ""){
                  i+1;
                  alert.innerHTML = "Congratulation " + tab[2].value + " " + tab[1].value + " " + "your registration has been successful"
              }else{
                  alert.innerHTML = messageAvertissement;
              }
          };
  },false)

  recommecer.addEventListener('click', function(e){
      alert.innerHTML = " ";
  })
     

   
// ====================      VARIABLES      ===========================//

// On vient de créer un nombre aléatoire entre 1 et 5 
let randomNumber = Math.floor((Math.random()*5)+1);
let body = document.querySelector('body');



// ;;;;;;;;;;;;;;;      METHODS     ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; //

// on 
function changeBG() {
    body.style.background =  "url(img/"+randomNumber+".jpg) center/cover";
}    

// :::::::::::::::::::::::      CODE        ::::::::::::::::::::::::://

// on déclenche le choix de l'image de fond ici
window.onload = changeBG();
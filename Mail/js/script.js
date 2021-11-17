let emailList = ["pippo@gmail.com","helghan@gmail.com","alfredo@gmail.com","chicco@gmail.com"];
const userEmail = prompt('Dimmi la tua email');

let trueFalse = false;
for ( let z = 0; z < emailList.length; z ++){
    let currentEmail = emailList[z];

    if ( userEmail == currentEmail ){
        trueFalse = true;
        alert("la tua email è stata trovata");
    }
}

if(trueFalse === false){
    alert("la tua email non esiste.");
}
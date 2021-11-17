const userNumber = Math.floor(Math.random() * 6) + 1;
const pcNumber = Math.floor(Math.random() * 6) + 1;

const risp = prompt('vuoi giocare ?')

if ( risp === 'si' || risp === 'SI' || risp === 'Si' || risp === 'sI'){

    if (userNumber === pcNumber){
        alert('pareggio');
    }else if ( userNumber < pcNumber ){
        alert('vincitore pc');
    }else if ( pcNumber < userNumber ){
        alert('vincitore human');
    }
}else if (risp === 'no' || risp === 'NO' || risp === 'No' || risp === 'nO'){
    alert('ciao');
}else{
    alert('Risposta non valida');
}

// Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
let array = [];

for (let i = 0; i < 6; i++){
    const number = Number(prompt('Inserisci numero'));
    if(number % 2 != 0){
        array[i] =number;
    }
}

console.log(array);
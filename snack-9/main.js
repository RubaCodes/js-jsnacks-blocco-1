//Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.
const nomi = ['Pippo', 'Pluto', 'Paperino'];
const colori = ['Bianco', 'Verde', 'Rosso', 'Giallo', 'Arancione'];

//const colori = ['Bianco', 'Verde'];

let newArray = [];
let firstIsLonger;
let offset;
if (nomi.length > colori.length) {
    offset = nomi.length - colori.length;
    newArray = [...colori,...nomi.slice(0,offset)];
} else if(nomi.length < colori.length) {
    offset = colori.length - nomi.length;
    newArray = [...nomi,...colori.slice(0,offset)];
}else{
    console.log('Le due stringhe sono uguali, nessuna copia');
    offset = 0;
}
console.log(newArray);

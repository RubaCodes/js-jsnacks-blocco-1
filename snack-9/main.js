//Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.
const nomi = ['Pippo', 'Pluto', 'Paperino'];
const colori = ['Bianco', 'Verde', 'Rosso', 'Blu', 'Giallo'];

//const colori = ['Bianco', 'Verde'];

let newArray = [];
let firstIsLonger = false;
let offset;
if (nomi.length > colori.length) {
    offset = nomi.length - colori.length;
    firstIsLonger = true;
} else {
    offset = colori.length - nomi.length;
}
 
console.log(offset, firstIsLonger);

if(firstIsLonger){
    newArray = [...colori,...nomi.slice(0,offset)];
}else{
    newArray = [...nomi,...colori.slice(0,offset)];
}
console.log(newArray);

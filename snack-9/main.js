//Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.
const nomi = ['Pippo', 'Pluto', 'Paperino'];
const cognomi = ['Bianco', 'Verde', 'Rosso', 'Blu', 'Giallo'];

let firstIsLonger = false;
let offset;
if (nomi.length > cognomi.length) {
    offset = nomi.length - cognomi.length;
    firstIsLonger = true;
} else {
    offset = cognomi.length - nomi.length;
}
 
console.log(offset, firstIsLonger);


//  for (let i = 0; i <  nomi.length + offset; i++) {
//      if(firstIsLonger){
//          nomi.push(cognomi[i]);
//      }else{
//          cognomi.push(nomi[i]);
//      }
//  }

//  console.log(nomi);
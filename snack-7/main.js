//Generatore di "nomi cognomi" casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const nomi = ['Pippo','Paperino', 'Pluto'];
const cognomi = ['Rossi','Verdi','Bianchi'];

const indexNomi = Math.floor(Math.random() * 3);
const indexCognomi = Math.floor(Math.random() * 3);

const randomName =  `${nomi[indexNomi]} ${cognomi[indexCognomi]}`;
console.log(randomName);
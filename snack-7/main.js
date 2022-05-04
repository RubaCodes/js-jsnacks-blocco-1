//Generatore di "nomi cognomi" casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const nomi = ['Pippo', 'Paperino', 'Pluto'];
const cognomi = ['Rossi', 'Verdi', 'Bianchi'];

let randomName = [];
for (let i = 0; i < 3; i++) {
    //calcolo index random 0-2
    const indexNomi = Math.floor(Math.random() * nomi.length);
    const indexCognomi = Math.floor(Math.random() * cognomi.length);
    //chain stringa
    randomName.push(`${nomi[indexNomi]} ${cognomi[indexCognomi]}`);
}
// log nome
console.log(randomName);
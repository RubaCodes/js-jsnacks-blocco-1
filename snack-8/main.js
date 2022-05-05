//Snack 8
//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let sum = 0;
for (let i = 0; i < number.length; i++) {
    if(i%2 !==0){
    sum += number[i];
    }
}

console.log(sum);


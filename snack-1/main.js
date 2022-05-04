const firstNumber = Number(prompt('inserisci primo nummero:'));
const secondNumber = Number(prompt('inserisci secondo nummero:'));

if(firstNumber > secondNumber){
    console.log('primo numero maggiore del secondo');
} else if(firstNumber < secondNumber){
    console.log('primo numero minore del secondo');
}else {
    console.log('i due numeri sono uguali');
}

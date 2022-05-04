const firstNumber = Number(prompt('inserisci primo nummero:'));
const secondNumber = Number(prompt('inserisci secondo nummero:'));

console.log(firstNumber ,secondNumber);

if(firstNumber > secondNumber){
    console.log('primo numero maggiore del secondo ' + firstNumber);
} else if(firstNumber < secondNumber){
    console.log('primo numero minore del secondo '+ secondNumber);
}else {
    console.log('i due numeri sono uguali');
}

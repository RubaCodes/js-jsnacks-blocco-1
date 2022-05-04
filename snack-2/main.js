// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt('inserisci prima parola:');
const secondWord = prompt('inserisci seconda parola:');

if (firstWord.length < secondWord.length) {
    console.log(firstWord, secondWord);
}else if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord);
}else {
    console.log(`le due parole hanno la stessa lunghezza ${firstWord} ${secondWord}`);
}
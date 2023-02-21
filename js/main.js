'use strict';

const km = parseInt(prompt('Inserisci il numero di chilometri che vuoi percorrere'));
const ageUser = parseInt(prompt('Inserisci la tua età'));

console.log(km);
console.log(ageUser);

const prezzoBigliettoIntero = km * 0.21;

let  prezzoBigliettoRidotto;

if (ageUser < 18) {
    prezzoBigliettoRidotto = (prezzoBigliettoIntero - (prezzoBigliettoIntero / 100 * 20));
    console.log(prezzoBigliettoRidotto);
} else if (ageUser > 65) {
    prezzoBigliettoRidotto = (prezzoBigliettoIntero - (prezzoBigliettoIntero / 100 * 40));
    console.log(prezzoBigliettoRidotto);
}
else {
    console.log(prezzoBigliettoIntero);
}


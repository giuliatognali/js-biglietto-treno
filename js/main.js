'use strict';

const km = parseInt(prompt('Inserisci il numero di chilometri che vuoi percorrere'));
const ageUser = parseInt(prompt('Inserisci la tua età'));

let ticketPrice = km * 0.21;
let messaggio = 'Prezzo biglietto';

console.log(km);
console.log(ageUser);
console.log(ticketPrice);


if (ageUser < 18) {
    ticketPrice = ticketPrice - ticketPrice * 0.2;
    messaggio = 'Prezzo con sconto minorenni'
//    ticketPrice -= ticketPrice * 0,2; altro modo per scrivere quest'operazione
} 
else if (ageUser >=65) {
    ticketPrice = ticketPrice - ticketPrice * 0.4;
    messaggio = 'Prezzo con sconto over 65'
}

//console.log(ticketPrice); //questo è un numero
console.log( `${messaggio}: ${ticketPrice.toFixed(2)} €`); //questa è una stringa 
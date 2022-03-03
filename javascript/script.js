console.log("js-ok")

const nome = prompt('Inserisci nome');
const cognome = prompt('Inserisci cognome');
const colore = prompt('Inserisci colore preferito');

const nomecompleto = nome + cognome + colore + 21

console.log(nomecompleto)

document.getElementById('informazioni').innerHTML = nomecompleto;
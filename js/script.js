var chilometri = parseInt(prompt('Quanti chilometri vuoi fare?'));
var eta = parseInt(prompt('Inserisci la tua eta'));

var prezzo_intero_biglietto = (chilometri * 0.21);

console.log(chilometri);
console.log(eta);
console.log(prezzo_intero_biglietto);

var sconto_minori = ((prezzo_intero_biglietto / 100) * 20);
console.log(sconto_minori);

var sconto_anziani = ((prezzo_intero_biglietto / 100) * 40);
console.log(sconto_anziani);

var prezzo = prezzo_intero_biglietto

if (eta < 18) {
    var prezzo = prezzo_intero_biglietto - sconto_minori;
    alert(prezzo);
}

else if (eta > 65) {
    var prezzo = prezzo_intero_biglietto - sconto_anziani;
    alert(prezzo);
}

else {
    alert(prezzo);
}


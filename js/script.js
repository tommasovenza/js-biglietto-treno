// impostazioni domande prompt
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

// l'if
if (eta < 18) {
    var prezzo = prezzo_intero_biglietto - sconto_minori;
    alert('Il costo del biglietto é ' + prezzo + ' grazie ad uno sconto minorenni di ' + sconto_minori + ' euro');
}

else if (eta > 65) {
    var prezzo = prezzo_intero_biglietto - sconto_anziani;
    alert('Il costo del biglietto é ' + prezzo + ' grazie ad uno sconto per anziani di ' + sconto_anziani + ' euro');
}

else {
    alert('Il costo del biglietto é ' + prezzo + ' euro');
}


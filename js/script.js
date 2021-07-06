/*
Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/

// creazione array
var lastNames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

// input utente e validazione
var userLastName;

do {
    userLastName = prompt("Inserisci il tuo cognome").trim();
} while (!userLastName || userLastName.length < 2);

// capitalize cognome e inserirlo nell'array 
lastNames.push(userLastName[0].toUpperCase() + userLastName.slice(1));

console.table(lastNames);

// ordinare alfabeticamente array
lastNames.sort();

console.table(lastNames);

// stampa lista ordinata e posizione cognome inserito
for (var i = 0; i < lastNames.length; i++) {
    console.log(i + 1, lastNames[i]);
    if (userLastName.toLowerCase() === lastNames[i].toLowerCase()) {
        console.log("il tuo cognome si trova in posizione: " + (i + 1));
    }
}
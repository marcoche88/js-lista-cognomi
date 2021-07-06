/*
Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/

// variabili
var list = document.getElementById("list-surname");
var position = document.getElementById("position-surname");
var listItem = "";
var positionItem;

// creazione array
var surnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

// input utente e validazione
var userLastName;
var isContent;

do {
    userLastName = prompt("Inserisci il tuo cognome").trim();
    isContent = false;
    for (i = 0; i < surnames.length; i++) {
        if (userLastName.toLowerCase() === surnames[i].toLowerCase()) {
            isContent = true;
            alert("Cognome già presente");
        }
    }
} while (!userLastName || isContent);

// capitalize cognome e inserimento nell'array 
surnames.push(userLastName[0].toUpperCase() + userLastName.slice(1));

console.table(surnames);

// ordinamento alfabetico array
surnames.sort();

console.table(surnames);

// stampa lista ordinata e posizione cognome inserito
for (var i = 0; i < surnames.length; i++) {
    console.log(i + 1, surnames[i]);
    listItem += "<li>" + (i + 1) + " " + surnames[i] + "</li>";
    if (userLastName.toLowerCase() === surnames[i].toLowerCase()) {
        console.log("Il tuo cognome si trova in posizione: " + (i + 1));
        positionItem = "Il tuo cognome si trova in posizione: " + (i + 1);
    }
}

// stampa in pagina

list.innerHTML = listItem;
position.innerText = positionItem;

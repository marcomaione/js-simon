//genero 5 numeri casuali tra uno e 100

n = 5;

testo = "";

for (i = 0; i < n; i++) {

    numeri = Math.round(Math.random() * 100 + 1);

    if (i > 0) {

        testo += ", ";
    }
        testo += numeri;
}

document.getElementById("random").innerHTML = testo;

//imposto timer di 30 secondi poi chiedo all'utente di inserire i numeri visti precedentemente

let secondi = 5;
let nInseriti = "";
function ricorda() {
    alert("inserisci i numeri visti precedentemente");
    for(let i = 0; i < 5; i++) {
        let nInseriti = parseInt(prompt("inserisci i numeri"));
        console.log(nInseriti);
}
    if(!nInseriti.includes(numeri)) {
        console.log('hai inserito' + nInseriti);

    }
}
    
setTimeout(ricorda, secondi * 1000);

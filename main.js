//imposto un timer di 30sec

let secondi = 30;

function ricorda() {
    alert("scrivi i numeri visti precedentemente")
}

setTimeout(ricorda, secondi * 1000);



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
     
     
  
  
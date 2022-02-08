// arrey per immagazzinare numeri generati

const numeriGenerati = [];

// genero 5 numeri casuali

while (numeriGenerati.length < 5) {

    const numeroCasuale = getRandomNumber(1, 100);

    if (!numeriGenerati.includes(numeroCasuale)) {
        numeriGenerati.push(numeroCasuale);
    }
}

// creo riferimento al tag html

const elemMessaggio = document.getElementById('random');
elemMessaggio.innerHTML = numeriGenerati;

setTimeout(resetMessaggio, 30 * 1000);

const ritardo = 30;

// timeout che nasconde i numeri mostrati 
setTimeout(resetMessaggio, ritardo * 1000);

// timeout compatibilita con chrome un sec che chiede i numeri visti precedentemente
setTimeout(function() {
   
    const numeriInseriti = getNumeriUtente();
    console.log(numeriInseriti);

    const numeriInovinati = verifaNumeri(numeriGenerati, numeriInseriti);

    stampaNumeriIndovinati(numeriInovinati);

}, (ritardo + 1) * 1000);

function stampaNumeriIndovinati(arreyNumeriIndovinati) {

    const qtaNumeriIndovinati = arreyNumeriIndovinati.length;

    elemMessaggio.innerHTML = 'hai indovinato' + qtaNumeriIndovinati + 'numeri.' + arreyNumeriIndovinati;
    

}

function verifaNumeri(arreyNumeriGenerati, arreyNumeriInseriti) {

    const indovinati = [];

    for (let i = 0; i < arreyNumeriInseriti.length; i ++) {

        if (arreyNumeriGenerati.includes(numeriInseriti[i])) {
            indovinati.push(arreyNumeriInseriti[i]);
        }

    }

    return indovinati;
}

// funzione che chiede di inserire 5 numeri che pensa di ricordare e verifico siano corretti
function getNumeriUtente() {

    const numeriUtente = [];

    while (numeriUtente.length < 5) {

        const numero = parseInt(prompt('inserisci numero'));

        if (!numeriUtente.includes(numero) && isNaN (numero) && numero <= 100 && numero > 0) {
            numeriUtente.push(numero);
        }
    }


    return numeriUtente;
}


//funzione che ripulisce html dopo 30 sec
function resetMessaggio() {
    elemMessaggio.innerHTML = '';
}

//genero un numero casuale tra min e max

function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

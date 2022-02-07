//genero 5 numeri casuali tra uno e 100

 n = 5;

if (n > 0 && n <= 100) {
    testo = "";
      for (i = 0; i < n; i++) {
           numeri = Math.round(Math.random()*100 + 1);
        if (i > 0) {
             testo += ", ";
        }
         testo += numeri;
    }

    document.getElementById("random").innerHTML = testo;
     
} 
     
  
  
let risultato = document.getElementById("risultato");
let bottone = document.getElementById("bottone");
let contatore = document.getElementById("contatore");
function Lancio() {
    let numero = Math.random();
    let x = 0
        if (numero < 0.5) {
            x = "<p>Hai fatto Testa!</p>"
            console.log("Testa")
        } 
        else {
            x = "<p>Hai fatto Croce!</p>"
            console.log("Croce")
        }
    risultato.innerHTML = x;
}
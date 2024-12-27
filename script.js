let numeroRandom = Math.floor(Math.random()*100)+1;
let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intentos");
let intentos = 0;
let intentosMax = 10;

//esto se ejecuta cuando se pulsa el botón reiniciar
function reiniciar() {
    numeroEntrada.value = "";
    intento.textContent = 0;
    intentos = 0;
    numeroRandom = Math.floor(Math.random()*100)+1;
    mensaje.textContent = "Intenta Adivinar el número";
    mensaje.style.color = "black";
}

//esto se ejecuta cuando se pulsa el botón chequear
function chequearResultado() {
    intentos++;
    intento.textContent = intentos;
    if (intentos === intentosMax) {
        mensaje.textContent = "¡Lo siento! Ha agotado los intentos";
        mensaje.style.color = "red";
        // reseteamos los valores y reiniciamos el numero aleatorio
        numeroEntrada.value = "";
        intento.textContent = 0;
        intentos = 0;
        numeroRandom = Math.floor(Math.random()*100)+1;
        alert("¡Lo siento! Has agotado los intentos, el numero aleatorio era " +  " " + numeroRandom + " " + "intentalo de nuevo!");
        return;
    }
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "El número ingresado no es válido, pone uno entre 1 y 100";
        mensaje.style.color = "black";
        return;
    }
    
    if (numeroIngresado === numeroRandom) {
        mensaje.textContent = "¡Felicidades! Adivinaste el número";
        mensaje.style.color = "green";
        alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos");
        alert("¡Vamos a jugar de nuevo!");
        // reseteamos los valores y reiniciamos el numero aleatorio
        numeroEntrada.value = "";
        intento.textContent = 0;
        intentos = 0;
        numeroRandom = Math.floor(Math.random()*100)+1;
        let numerosAnteriores = document.getElementById("numerosAnteriores");
            numerosAnteriores.textContent = numeroRandom;
        return;
    }   else if (numeroIngresado > numeroRandom) {
        mensaje.textContent = "El número es menor";
        mensaje.style.color = "blue";
    }   else {
        mensaje.textContent = "El número es mayor";
        mensaje.style.color = "red";
    }


};
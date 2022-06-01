/*function diHola() {
    return "Hola ";
 }
 function saludar(saludo, nombre) {
   console.log(saludo() + nombre);
 }
 // Pasamos `diHola` como argumento de la función `saludar`
 saludar(diHola, "JavaScript!");*/

function sumar(a, b, c) {
    return a + b + c;
}
let numeros = [1, 2, 3];
console.log(numeros);
console.log(sumar(...numeros));

let nombreVariable= () =>consolo.log("hola mundo");
let suma = (a,b) => a+ b;
console.log(suma(2,3))
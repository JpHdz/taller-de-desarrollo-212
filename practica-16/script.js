var titulo = document.getElementById("titulo");
titulo.innerHTML = "Feliz regreso de vacaciones";

var texto;
texto = document.querySelector("#texto");
texto.innerHTML = "Tristin";
texto.style.fontSize = "50px";
texto.style.backgroundColor = "red";

var colores;
colores = document.getElementById("colores");
colores.style.color = "purple";
colores.style.display = "none";
colores.style.display = "block";

function cambiarColor() {
  console.log("Si entro la funcion", 5 + 10);
  colores.style.color = "brown";
}

cambiarColor();

document.write("Este es un numero generado con JS:");
document.write(40 / 23);

// window.alert("Esta es una alerta");

let cadena = "Hola desde la consola";
console.log(cadena);

let a, b, c;
a = "si";
b = "no";
c = "tal vez";
console.log(a);
console.log(b);
console.log(c);

let radio = 10;
const PI = 3.1416;

calcArea = () => {
  let areaTemporal = PI * radio * radio;
  return areaTemporal;
};

console.log(calcArea());

let numero = 10.5;
let numeroNuevo = 10;

let soyCadena = "jeje";
let soyCadena1 = "jeje";
let soyCadena2 = "jeje";

let $multi_plica = numero * numeroNuevo;
let sinValor;
console.log(sinValor);

let variableLocal = 10;

{
  let variableLocal = 2;
  console.log("Variable local: " + variableLocal);
}
console.log("Variable local numero 2  : " + variableLocal);

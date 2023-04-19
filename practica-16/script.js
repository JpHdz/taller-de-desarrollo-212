var titulo = document.getElementById('titulo');
titulo.innerHTML = 'Feliz regreso de vacaciones';

var texto;
texto = document.querySelector('#texto');
texto.innerHTML = 'Tristin';
texto.style.fontSize = '50px';
texto.style.backgroundColor = 'red';

var colores;
colores = document.getElementById('colores');
colores.style.color = 'purple';
colores.style.display = 'none';
colores.style.display = 'block';

function cambiarColor() {
  console.log('Si entro la funcion', 5 + 10);
  colores.style.color = 'brown';
}

cambiarColor();

document.write('Este es un numero generado con JS:');
document.write(40 / 23);

// window.alert("Esta es una alerta");

let cadena = 'Hola desde la consola';
console.log(cadena);

let a, b, c;
a = 'si';
b = 'no';
c = 'tal vez';
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

let soyCadena = 'jeje';
let soyCadena1 = 'jeje';
let soyCadena2 = 'jeje';

let $multi_plica = numero * numeroNuevo;
let sinValor;
console.log(sinValor);

let variableLocal = 10;

{
  let variableLocal = 2;
  console.log('Variable local: ' + variableLocal);
}
console.log('Variable local numero 2  : ' + variableLocal);

const autos = ['Gtr', 'Porchesito 911', 'Huracan', 1, true, 'La ferrari'];
console.log(autos);
console.log(autos[0]);
console.log(autos[4]);
console.log(autos.length);
console.log(autos[autos.length - 1]);

const autoNuevo = {
  tipo: 'Lamborghini Huracan',
  modelo: 500,
  color: 'Blanco',
};

console.log(autoNuevo.tipo, autoNuevo.modelo, autoNuevo.color);
autoNuevo.color = 'Rojo';
console.log(autoNuevo.tipo, autoNuevo.modelo, autoNuevo.color);

var x1 = 4.5;
console.log(typeof x1);

var z1 = '4.5';
console.log(typeof z1);

console.log(typeof autoNuevo);
console.log(typeof autos);

console.log('Thor' > 'Iron man');
console.log('a' > 'b');
console.log('de' > 'bc');
console.log(true && false);
console.log(true && true);
console.log(true || false);
console.log(true ? 1 : 2);
console.log(2 > 1 ? 'chi' : 'no');

console.log(8 * null);
console.log('5' - 1);
console.log('5' + 1);
console.log(+'5' + 1);

let valor = 0;
console.log();

while (valor <= 12) {
  console.log(valor);
  valor++;
}
console.log('For');

for (let i = 0; i <= 12; i++) {
  if (i % 7 == 0) console.log(`Entro porque el residuo actual es: ${i}`);
}

let cuenta = 2;
cuenta *= 2;
console.log(cuenta);

let x1_ = 5;
let y1_ = 2;
let z1_ = x1_ % y1_;
console.log(z1_);

let x4 = 5;
let z4 = x4 ** 3;
console.log(z4);

let x5 = 5;
let z5 = Math.pow(x5, 2);
console.log(z5);

let x6 = (100 + 50) * 3;
console.log(x6);

let car = '';

mifunction = (a, b) => a * b;

console.log(mifunction(a, b));

const persona = {
  nombre: 'Juan',
  apellido: 'Hdz',
  id: 123,
  nombreCompleto: function () {
    return `${this.nombre} ${this.apellido}`;
  },
};

console.log(persona.nombreCompleto());
console.log(persona['apellido']);

const personax = {
  nombre: 'Jose',
  edad: '31',
  ciudad: 'Leon',
};
console.log(personax);

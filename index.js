//1
const arrayVacio = [];
//2
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//3
const arrayNumerosPares = [0, 2, 4, 6, 8];
//4
const arrayBidimensional = [[0, 1, 2],['a', 'b', 'c']];
//5
function suma (a, b) {
  let resultado = a + b
  return resultado
}
//6
function potenciacion (a, b) {
  let resultado = Math.pow(a, b)
  return resultado
}
//7
function separarPalabras (string) {
  let separadas = string.split(' ')
  return separadas
}
//8
function repetirString (string, x) {
  let repeater = string.repeat(x)
  return repeater
}
//9
function esPrimo(x) {
  if (x <= 1) {
    return false;
  }
  for (let i=2; i<=x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}
//10
function ordenarArray (arrayNumeros) {
  let x = arrayNumeros.sort()
  return x
}
//11
function obtenerPares(arrayNum) {
  let pares = [];
  for (let x = 0; x < arrayNum.length; x++) {
    if (arrayNum[x] % 2 === 0) {
      pares.push(arrayNum[x]);
    }
  }
  return pares;
}
//12
function pintarArray(array) {
  return arr.toString();
}
//13
function arrayMapi(array, func) {
  return array.map((element, index) => func(element, index));
}
//14._
function eliminarDuplicados(array) {
  return [...new Set(array)];
}
//---------------------------------------//
// Iteraciones 🏰 proyecto individual 🏰 //
//15._
let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
//16._
let holaMundo = ['Hola', 'Mundo'];
//17._
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
//18._
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
//19._
function multiplicacion(a,b) {
  return a*b;
}
//20._
function division(a,b) {
  return a/b;
}
//21._
function esPar(numero) {
  return numero % 2 === 0;
}
//22._
let arrayFunciones = [suma, resta, multiplicacion];
function resta(a, b) {  //no la pide, pero para que esté bien el código hay que añadir la funcion, o quitar la resta del array//
return a - b;
}
//23._
function ordenarArray2(array) {
  return array.sort(function(a, b) { 
      return b - a;
  });
}
//24._
function obtenerImpares(array) {
  return array.filter(function(numero) {
      return numero % 2 !== 0;
  });
}
//25._
function sumarArray(array) {
  return array.reduce(function(acumulador, numero) {
      return acumulador + numero;
  }, 0);
}
//26._
function multiplicarArray(array) {
  return array.reduce(function(acumulador, numero) {
      return acumulador * numero;
  }, 1);
}

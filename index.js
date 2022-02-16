//01. Crear variable de nombre arrayVacio cuyo valor sea un array vacío
let arrayVacio = [];

//02. Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];

//03. Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
let arrayNumerosPares = [0,2,4,6,8];

//04.Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]
let arrayBidimensional =[[0, 1, 2], ['a', 'b', 'c']];


/*Funciones*/

//05.Crea la función **suma** que acepte como argumento **dos números** y devuelva **el resultado de su suma**
function suma(a,b){
    return a+b;
}

//06.Crea la función **potenciacion** que acepte como argumento **dos números** y devuelva **el resultado de elevar el primero(a) al segundo(b) (a^b)**
function potenciacion(a,b){
    return a**b;
}

//07.Crea la función **separarPalabras** que acepte como argumento **un string** y devuelva **un array de palabras 'hola mundo' => [hola, mundo]**
function separarPalabras(str){
    return str.split(" ");
}

//08.Crea la función **repetirString** que acepte como argumento **un string y un número** y devuelva **un string que sea el resultado de concatenar el primer string el número dado de veces**
function repetirString(str, num) {
    let string = str;
    for (let i = 1; i < num; i++) {
        string += str;
    }
    return string;
};

//09.Crea la función **esPrimo** que acepte como argumento **un número** y devuelva ****true si es primo y false si no lo es****

function esPrimo(num) {
    for (var i = 2; i < num; i++) {
        if (num%i==0){
            return false;
        }
    };
    return true;
}

//10.Crear la función **ordenarArray** que acepta como argumento **un array de números** y devuelva un **array ordenado de menor a mayor**
function ordenarArray(arr){
    return arr.sort();
}

//11.Crear la función **obtenerPares** que acepta como argumento **un array de números** y devuelva un **array con los elementos pares**
function obtenerPares(arr) {
    let result = [];
    for(let i=0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            result.push(arr[i]);
        }     
    }
  return result;
}

//12. Crear la función **pintarArray** que acepte como argumento **un array** y devuelva **una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'**
function pintarArray(arr){
    let arrString = "";
    for(let i=0; i<arr.length; ++i){
      if(i!==0){
        arrString += " " +arr[i].toString()+","
      }else if(i === (arr.length)){
        arrString += arr[i].toString()
      }else {
        arrString += arr[i].toString()+","
      }
    }
  let respuesta = "["+arrString.slice(0, -1)+"]"
  return respuesta

}


//13. Crear la función **arrayMapi** que acepte como argumento **un Array y una función** y devuelva **un array en el que se haya aplicado la función a cada elemento del array**

function arrayMapi(arr, func){
    let resp = [];
    for(let i = 0; i < arr.length; i++){
      resp.push(func(arr[i]));
    }
    return resp;
  }

//14.Crear la función **eliminarDuplicados** que acepte como argumento **un array** y devuelva **un array en el que se hayan eliminado los duplicados**

function eliminarDuplicados(arr){
    let chars = arr;
    let uniqueChars = [...new Set(chars)];
    return uniqueChars;
}

/** Arrays **/ 
//15.Crear variable de nombre **arrayNumerosNeg** declarada con un **array de números del 0 al -9 (0, -1, -2...)**
let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]

//16. Crear variable de nombre **holaMundo** declarada con valor **array con las palabras 'Hola' y 'Mundo'**
let holaMundo = ['Hola', 'Mundo']

//17.Crear variable de nombre **loGuardoTodo** declarada con valor **array con valores 'hola', 'que', 23, 42.33 y 'tal'**
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']

//18. Crear variable de nombre **arrayDeArrays** declarada con valor **array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]**
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]


/**Funciones**/
//19.Crea la función **multiplicacion** que acepte como argumento **dos números** y devuelva **el resultado de su multiplicación**
function multiplicacion(a,b){
    return a*b;
}

//20.- Crea la función **division** que acepte como argumento **dos números** y devuelva **el resultado de su division**
function division(a,b){
    return a/b;
}

//21.- Crea la función **esPar** que acepte como argumento **un número** y devuelva **true si es par y false si es impar**
function esPar(num){
    return num%2 === 0;
}

//22.- Crea el array **arrayFunciones** que tenga como valor **las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)**

let arrayFunciones = [function suma(a,b){return a+b}, function resta(a,b){return a-b}, function multiplicacion(a,b){return a*b}]

//23.-  Crear la función **ordenarArray2** que acepta como argumento **un array de números** y devuelva un **array ordenado de mayor a menor**
function ordenarArray2(arr){
    arr.sort()
    return arr.reverse()
}

//Crear la función **obtenerImpares** que acepta como argumento **un array de números** y devuelva un **array con los elementos impares**
function obtenerImpares(arr){
    let respuesta = []
    for(let i = 0; i <arr.length; i++){
        if(arr[i]%2!==0){
            respuesta.push(arr[i])
        }
    }
    return respuesta;
}

//25.- Crear la función **sumarArray** que acepte como argumento **un array numérico** y devuelva **la suma de los números en el array Array: [1, 2, 3] resultado: 6**

function sumarArray(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total = total +arr[i];
    }
    return total
}

//26.- Crear la función **multiplicarArray** que acepte como argumento **un array numérico** y devuelva **la multiplicación de los números en el array Array:  [2, 3, 4] resultado: 24**

function multiplicarArray(arr){
    let total = arr[0];
    for(let i = 1; i < arr.length; i++){
        total = total *arr[i];
    }
    return total
}
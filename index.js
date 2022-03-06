
//1
const arrayVacio = []

//2
const arrayNumeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//3
const arrayNumerosPares = [ 0, 2, 4, 6, 8]

//4
const arrayBidimensional = [[ 0, 1, 2], [ 'a', 'b', 'c']]


//5
function suma ( a, b) {
    return a + b
}

//6
function potenciacion ( a, b) {
    return a ** b
}

//7
function separarPalabras (string) {
    return string.split(' ')
}

//8
function repetirString (string, number) {
    return string.repeat(number)
}

//9
function esPrimo (number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}


//10
function ordenarArray ( array) {
    return array.sort()
}

//11
function obtenerPares( array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array [i] % 2 === 0)
        newArray.push(array[i])
    }
    return newArray
}

//12  no va
function pintarArray (array) {
    let newString = ''
    for (let i = 0; i < array.length; i++) {    
        if (i !== 0 && (i+1) < array.length){       //elements in between
            newString += ' ' + array[i].toString() + ','
        } else if ((i+1) === array.length) {        //last element
            newString += ' ' + array[i].toString() +']'
        } else {                                    //first element
            newString += '['+ array[i].toString() + ','
        }
    }
    return newString
}

//13
function arrayMapi (array, fArray) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        fArray(array[i])
        newArray.push(fArray(array[i]))
        
    }
    return newArray
} 

//14   al crear una instancia con nuestro array, se eliminan todos los repetidos
function eliminarDuplicados(array) {
    return [...new Set(array)]
}


//15
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

//16
const holaMundo = ['Hola', 'Mundo']

//17
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']

//18
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]


//19
function multiplicacion (a, b) {
    return a * b
}

//20
function division (a, b) {
    return a / b
}

//21
function esPar (a) {
    if (a % 2 === 0) {
        return true
    }
    return false
}

//22
const arrayFunciones = [
    function suma(a, b) {
        return a + b
    }, 
    function resta(a, b) {
        return a - b
    },
    function multiplicacion(a, b) {
        return a * b
    }]


//23
function ordenarArray2 (array) {
    return array.sort()
}

//24
function obtenerImpares(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArray.push(array[i])
        } 
    }
    return newArray
}

//25
function sumarArray (array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array [i]
    }
    return suma
}

//26
function multiplicarArray (array) {
    let multiplicacion = 1
    for (let i = 0; i < array.length; i++) {
        multiplicacion *= array [i]
        
    }
    return multiplicacion
}
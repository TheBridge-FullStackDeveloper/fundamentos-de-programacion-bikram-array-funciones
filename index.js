
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

// EXERCICI 1

var greeting = "Hola mundo";
console.log(greeting);

// EXERCICI 2

alert('¡Me llamo Vanesa!');

// EXERCICI 3

var myName = 'Vanesa';
var lastName = 'Perea';
console.log(myName + ' ' + lastName);

// EXERCICI 4

var num1 = 70;
var num2 = 30;
var sum = num1 + num2;
console.log('La suma entre ' + num1 + ' i ' + num2 + ' és ' + sum);

// EXERCICI 5

var nota_examen;

do {
    nota_examen = parseInt(prompt('Introdueix la nota: '));
}while(nota_examen < 0 || nota_examen > 10)

if(nota_examen >= 5){
    alert('Has aprovat l\'examen amb un '+ nota_examen);
}else {
    alert('Has suspés l\'examen amb un ' + nota_examen);
}

// EXERCICI 6

// Primera part
var car = 'Tinc un cotxe de color blau';
console.log(car);
var carList = car.split(" ");
carList[carList.length - 1] = 'verd';
car = carList.join(' ');
console.log(car);

// Segona part
var car2 = 'Tinc un cotxe de color blau';
var carList2 = car2.split(''); 
console.log(carList2);

for (var i = 0; i <= carList2.length; i++) {
    if(carList2[i] == 'o') {
        carList2[i] = 'u';
    }
}

console.log(carList2);
car2 = carList2.join('');
console.log(car2);


// EXERCICI 7

let arrObjectes = ['taula', 'cadira', 'ordinador', 'llibreta'];
let j;
let arrLen = arrObjectes.length;

for(j = 0; j < arrLen; j++) {
    console.log('L\'objecte ' + arrObjectes[j] + ' està a la posició ' + j + '.');
}

// EXERCICI 8

function calculadora(operator,value1,value2) {
    //let value1 = parseInt(prompt('Introdueix un valor: '));
    //let operator = prompt('Introdueix un operador: + / - / *');
    //let value2 = parseInt(prompt('Introdueix un altre valor: '));
    let result;

    switch(operator){
        case 'suma':
            result = value1 + value2;
            break;
        case 'resta':
            result = value1 - value2;
            break;
        case 'multiplicació':
            result = value1 * value2;
            break;
    }

    return 'El resultat de la ' + operator + ' és: ' + result;

}

var resultat = calculadora('resta',40,20);
console.log(resultat);

// EXERCICI NIVELL 2

function calculadora(operator,value1,value2) {
    let result;

    switch(operator){
        case 'suma':
            result = 'El resultat de la ' + operator + ' és: ' + (value1 + value2);
            break;
        case 'resta':
            result = 'El resultat de la ' + operator + ' és: ' + (value1 - value2);
            break;
        case 'multiplicació':
            result = 'El resultat de la ' + operator + ' és: ' + (value1 * value2);
            break;
        case 'divisió':
            if(value2 == 0){
                result = 'No és possible dividir per 0';
            }else {
                result = 'El resultat de la ' + operator + ' és: ' + (value1 / value2);
            }            
            break;
    }

    return result;

}

var resultat = calculadora('resta',40,20);
console.log(resultat);
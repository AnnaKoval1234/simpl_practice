// Напишите функцию randomInteger(min, max), которая 
// генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно 
// появляться с одинаковой вероятностью.


function randomINteger(min, max) {
    let number;
    do {
        number = Math.trunc( Math.random() * 10 );
    } while (!(min <= number && number < max));
    return number
}

alert( randomINteger(1, 5) );
alert( randomINteger(1, 5) );
alert( randomINteger(1, 5) );
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

function ucFirst(str) {
    return (!str) ? str : str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("вася") );
alert( ucFirst("петя") );
alert( ucFirst("коля") );
alert( ucFirst("") );

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, 
// потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
    str = str.split('-');
    for (let i = 1; i < str.length; i++) {
        str[i] = ( str[i].at(0) ).toUpperCase() + str[i].slice(1);
    }
    str = str.join('');
    return str;
}

alert( camelize("background-color") );
alert( camelize("list-style-image") );
alert( camelize("-webkit-transition") );
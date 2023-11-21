// Напишите функцию checkSpam(str), возвращающую true,
// если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру

function checkSpam(str) {
    return ((str.toLowerCase()).includes('viagra') 
    || (str.toLowerCase()).includes('xxx'));
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam('innocent rabbit') );
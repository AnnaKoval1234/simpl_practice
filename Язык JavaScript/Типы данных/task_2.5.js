// Встроенный метод Math.random() возвращает 
// случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая 
// генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random(min, max) {
    let number;
    do {
        number = Math.random() * 10;
    } while (!(min <= number && number < max));
    return number
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
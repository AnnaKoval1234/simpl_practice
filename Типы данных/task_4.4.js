// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
    let array = [];
    let input;
    let sum = 0;
    do {
        input = prompt("Введите число");
        if (input != '' && input != null && !isNaN(input)) {
            array.push(+input);
        }
    } while (input != '' && input != null && !isNaN(input))
    for (let a of array) {
        sum += a;
    }
    return sum;
}

alert( sumInput() );
// Создайте функцию readNumber, 
// которая будет запрашивать ввод числового значения 
// до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, 
// отправив пустую строку или нажав «Отмена». 
// В этом случае функция должна вернуть null.

function readNumber() {
    let is_number = false;
    let number;
    do {
        number = prompt("Введите число");
        if (number == +number) {
            is_number = true;
        }
    } while (!is_number && number !== null)
    if (number === null || number === '')
      return null
    return +number;
}

readNumber();
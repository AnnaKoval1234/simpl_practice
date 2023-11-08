//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

let num1 = +prompt("Введите первое число", 0);
let num2 = +prompt("Введите второе число", 0);

if (!(isNaN(num1) || isNaN(num2)) && (isFinite(num1) && isFinite(num2))) {
    alert(num1 + num2);
}
else {
    
    alert("Введены не числа!")
}

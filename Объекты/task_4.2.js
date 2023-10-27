// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  read() {
    this.fst = +prompt("Введите первое значение");
    this.snd = +prompt("Введите второе значение");
  },
  sum() {
    return this.fst + this.snd;
  },
  mul() {
    return this.fst * this.snd;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
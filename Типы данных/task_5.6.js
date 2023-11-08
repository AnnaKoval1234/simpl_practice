// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
function Calculator() {
    
    // Реализуйте метод calculate(str), который 
    // принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) 
    // и возвращает результат. Метод должен понимать плюс + и минус -.
    this.calculate = function(str) {
      str = str.split(' ');
      let a = +str[0], b = +str[2];
      let op = str[1];
      if (isNaN(a) || isNaN(b) || !this.methods[op]) return NaN;
      return this.methods[op](a, b);
    };
    
    // Затем добавьте метод addMethod(name, func), 
    // который добавляет в калькулятор новые операции. 
    // Он принимает оператор name и функцию с двумя аргументами
    //  func(a,b), которая описывает его.
    
    // сюда добавляем методы
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
      };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
      };
  }; 

let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
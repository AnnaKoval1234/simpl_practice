// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.

function makeCounter() {
    
    function counter() {
      return counter.count++;
    };
    
    counter.set = function(value) {
        counter.count = value;
    }

    counter.decrease = function() {
        counter.count--;
    }

    counter.count = 0;

    return counter;
}
  
let counter = makeCounter();
  
alert( counter() );
counter.set(6);
alert( counter() );
counter.decrease();
alert( counter() );
// Выведите односвязный список из предыдущего задания в обратном порядке.

function printReverseList(list) {
    // let str = [];
    // while (list != null) {
    //     str.push(list.value);
    //     list = list.next;
    // }
    // str.reverse();
    // return str.join(' ');
    
    if (list.next) {
        printReverseList(list.next);
    }
    alert(list.value);
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

alert( printReverseList(list) );

// Напишите функцию printList(list), которая выводит элементы списка по одному.

function printList(list) {
    // let str = "";
    // while (list != null) {
    //     str += list.value + " ";
    //     list = list.next;
    // }
    // return str;
    
    alert(list.value);
    if (list) {
        printList(list.next);
    }
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

alert( printList(list) );
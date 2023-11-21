// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая 
// возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
    let res = [];
    for (let a of arr) {
        if (!res.includes(a)) {
            res.push(a);
        }
    }
    return res;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O
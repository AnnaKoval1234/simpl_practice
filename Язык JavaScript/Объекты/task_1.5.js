// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] == "number") {
            obj[prop] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);

for (let prop in menu) {
    alert( menu[prop] );
}
// Напишите функцию getAverageAge(users), которая принимает 
// массив объектов со свойством age и возвращает средний возраст.

function getAverageAge(users) {
    let ave_age = 0; let n = 0;
    for (let user of users) {
        ave_age += user.age;
        n++;
    }
    ave_age /= n;
    return ave_age;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};

let jsonUser = JSON.stringify(user);
alert( jsonUser );

let user2 = JSON.parse(jsonUser);
alert(user2);

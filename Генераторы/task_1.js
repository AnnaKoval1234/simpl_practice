// Псевдослучайный генератор
// Задачей является создать функцию-генератор pseudoRandom(seed), 
// которая получает seed и создаёт генератор с указанной формулой.

function* pseudoRandom(seed) {
    let previous, next;
    previous = seed;
    while (true) {
        yield next = previous * 16807 % 2147483647;
        previous = next;
    }
}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073
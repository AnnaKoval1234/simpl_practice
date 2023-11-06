// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
function aclean(arr) {
    let mapAnagram = new Map();
    let key;
    let result = [];
    for (let a of arr) {
        key = a.toLowerCase()
                .split('')
                .sort()
                .join('');
        mapAnagram.set(key, a);
    }
    for (let m of mapAnagram.values()) {
        result.push(m);
    }
    return result;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
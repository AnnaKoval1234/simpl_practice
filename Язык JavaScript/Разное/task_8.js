// Используя Intl.Collator, отсортируйте массив:

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
let comparer = Intl.Collator(undefined, {sensitivity: "accent"});

animals.sort(comparer.compare);

alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК
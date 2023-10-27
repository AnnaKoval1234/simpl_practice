// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
    let list_properties = "";
    for (let prop in obj)
        list_properties += prop;
    if (list_properties === "") 
        return true;
    else 
        return false;
}

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

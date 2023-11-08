// У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
    let topEmployee = null;
    let topSalary = 0;
    for (let [employee, salary] of Object.entries(salaries)) {
        if (salary > topSalary) {
            [topEmployee, topSalary] = [employee, salary];
        }
    }
    return topEmployee;
}

alert( topSalary(salaries) );
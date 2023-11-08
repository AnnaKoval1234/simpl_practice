// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". 
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
    let diff = Date.now() - date.getTime();
    if (diff < 1000) return "прямо сейчас";
    else if (diff < 1000 * 60) return `${Math.round(diff / 1000)} сек. назад`;
    else if (diff < 1000 * 60 * 60) return `${Math.round(diff / 60000)} мин. назад`;
    else {
        let res = "";
        let [dd, mm, yyyy, hh, MM] = [date.getDate(), date.getMonth() + 1, date.getFullYear(), 
            date.getHours(), date.getMinutes()];
        if (dd < 10) res += '0';
        res += dd + '.';
        if (mm < 10) res += '0';
        res += mm + '.' + yyyy + ' ';
        if (hh < 10) res += '0';
        res += hh + ':';
        if (MM < 10) res += '0';
        res += MM;

        return res;
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
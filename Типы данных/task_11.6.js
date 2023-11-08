// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

function getSecondsToday() {
    let start = new Date();
    start.setHours(0, 0, 0, 0);
    
    let now = new Date();
    return ( now.getTime() - start.getTime() ) / 1000;
}

alert( getSecondsToday() );
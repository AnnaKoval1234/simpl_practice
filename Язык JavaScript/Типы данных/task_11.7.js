// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    return ( tomorrow.getTime() - today.getTime() ) / 1000;
}

alert( getSecondsToTomorrow() );
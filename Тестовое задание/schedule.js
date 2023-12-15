let dr = document.forms.dr;
dr.addEventListener('click', getSchedule);

function getSchedule(event) {
    if (event.target.tagName == 'INPUT') {
        let db = database.result;
        let readTransaction = db.transaction('doctors', 'readonly');
        doctors = readTransaction.objectStore("doctors");

        let key = +(event.target.id.slice(3));
        let request = doctors.get(key);
        request.onsuccess = function(e) {
            let doctor = e.target.result;
            if (!document.querySelector(`div#id_${key}`)) {

                let div_doctor = document.createElement('div');
                div_doctor.id = `id_${key}`;
                div_doctor.textContent = doctor.name;
                
                let start = doctor.timeStart;
                let end = doctor.timeEnd;
                for (let time = start; time <= end; time += 30) {
                    let button = document.createElement('button');
                    button.textContent = formatTime(time);
    
                    let div_button = document.createElement('div');
                    div_button.id = 'div_button';
                    div_button.style.width = '100%';
    
                    div_button.append(button);
                    div_doctor.append(div_button);
                }
    
                dr.append(div_doctor);
            }
            else {
                let div_doctor = document.querySelector(`div#id_${key}`);
                if (!event.target.checked) {
                    div_doctor.style.display = 'none';
                }
                else {
                    div_doctor.style.display = 'block';
                }
            }
        }
    }
}

function formatTime(number) {
    let hours = Math.trunc(number / 60);
    if (hours < 10) {
        hours = '0' + hours;
    }
    let minutes = number % 60;
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return `${hours}:${minutes}`;
}

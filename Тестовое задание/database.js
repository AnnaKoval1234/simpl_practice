let database = indexedDB.open('database', 1);
database.onupgradeneeded = function() {
    let db = database.result;
    if (!db.objectStoreNames.contains('doctors')) {
        // db.createObjectStore('doctors', {keyPath: 'id', autoIncrement: true});
        db.createObjectStore('doctors');
    }
}
database.onsuccess = function() {
  let db = database.result;

  let writeTransaction = db.transaction('doctors', 'readwrite');
  let doctors = writeTransaction.objectStore("doctors");

  doctors.clear();

  doctors.add({name: 'Василенко О.П.', timeStart: 9 * 60 + 30, timeEnd: 17 * 60 + 30}, 1);
  doctors.add({name: 'Матвиенко В.Н.', timeStart: 10 * 60, timeEnd: 14 * 60}, 2);
  doctors.add({name: 'Татищев П.А.', timeStart: 8 * 60 + 30, timeEnd: 16 * 60}, 3);
  doctors.add({name: 'Дятлов М.Н.', timeStart: 10 * 60, timeEnd: 18 * 60}, 4);
  doctors.add({name: 'Листова М.А.', timeStart: 8 * 60, timeEnd: 17 * 60}, 5);
  doctors.add({name: 'Клочкова Т.Н.', timeStart: 8 * 60, timeEnd: 17 * 60}, 6);
  doctors.add({name: 'Хорошилов А.И.', timeStart: 9 * 60, timeEnd: 12 * 60}, 7);
  doctors.add({name: 'Карлышев М.К.', timeStart: 8 * 60, timeEnd: 16 * 60}, 8);
  doctors.add({name: 'Карпов М.О.', timeStart: 10 * 60, timeEnd: 17 * 60 + 30}, 9);
  doctors.add({name: 'Техеева И.С.', timeStart: 11 * 60, timeEnd: 13 * 60}, 10);
  doctors.add({name: 'Ларина Н.С.', timeStart: 8 * 60, timeEnd: 17 * 60 + 30}, 11);
  doctors.add({name: 'Антонова М.Е.', timeStart: 9 * 60, timeEnd: 15 * 60}, 12);
  
  
  let readTransaction = db.transaction('doctors', 'readonly');
  doctors = readTransaction.objectStore("doctors");
  let request = doctors.openCursor();

  request.onsuccess = function(event) {

    let cursor = event.target.result;
    if (cursor != null) {
      let input = document.createElement('input');
      let label = document.createElement('label');
      let br = document.createElement('br');

      input.type = 'checkbox';
      input.id = `id_${cursor.key}`;

      label.for = input.id;
      label.textContent = cursor.value.name;

      document.forms[0].append(input);
      document.forms[0].append(label);
      document.forms[0].append(br);

      cursor.continue();
    }
  }

}

// let delreq = indexedDB.deleteDatabase('database');
// delreq.onsuccess = () => console.log('Удалила');
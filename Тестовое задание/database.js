let database = indexedDB.open('database', 1);

database.onupgradeneeded = function() {
    let db = database.result;
    if (!db.objectStoreNames.contains('doctors')) {
        // db.createObjectStore('doctors', {keyPath: 'id', autoIncrement: true});
        db.createObjectStore('doctors');
    }
}

database.addEventListener('success', fillDB);

function fillDB() {
  let db = database.result;

  let writeTransaction = db.transaction('doctors', 'readwrite');
  let doctors = writeTransaction.objectStore("doctors");
  // doctors.clear();

  doctors.put({name: 'Василенко О.П.', timeStart: 9 * 60 + 30, timeEnd: 17 * 60 + 30, dateset: new Set()}, 1);
  doctors.put({name: 'Матвиенко В.Н.', timeStart: 10 * 60, timeEnd: 14 * 60, dateset: new Set()}, 2);
  doctors.put({name: 'Татищев П.А.', timeStart: 8 * 60 + 30, timeEnd: 16 * 60, dateset: new Set()}, 3);
  doctors.put({name: 'Дятлов М.Н.', timeStart: 10 * 60, timeEnd: 18 * 60, dateset: new Set()}, 4);
  doctors.put({name: 'Листова М.А.', timeStart: 8 * 60, timeEnd: 17 * 60, dateset: new Set()}, 5);
  doctors.put({name: 'Клочкова Т.Н.', timeStart: 8 * 60, timeEnd: 17 * 60, dateset: new Set()}, 6);
  doctors.put({name: 'Хорошилов А.И.', timeStart: 9 * 60, timeEnd: 12 * 60, dateset: new Set()}, 7);
  doctors.put({name: 'Карлышев М.К.', timeStart: 8 * 60, timeEnd: 16 * 60, dateset: new Set()}, 8);
  doctors.put({name: 'Карпов М.О.', timeStart: 10 * 60, timeEnd: 17 * 60 + 30, dateset: new Set()}, 9);
  doctors.put({name: 'Техеева И.С.', timeStart: 11 * 60, timeEnd: 13 * 60, dateset: new Set()}, 10);
  doctors.put({name: 'Ларина Н.С.', timeStart: 8 * 60, timeEnd: 17 * 60 + 30, dateset: new Set()}, 11);
  doctors.put({name: 'Антонова М.Е.', timeStart: 9 * 60, timeEnd: 15 * 60, dateset: new Set()}, 12);
}

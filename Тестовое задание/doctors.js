database.addEventListener('success', getDoctors);

function getDoctors() {
    let db = database.result;
  
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
  
        document.forms.dr.append(input);
        document.forms.dr.append(label);
        document.forms.dr.append(br);
  
        cursor.continue();
      }
    }
}

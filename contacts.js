const path = require('path');
const fs = require('fs');
const baseName = 'contacts.json';
const contactsPath = path.resolve(baseName);

function listContacts() {
  const data = fs.readFile(baseName, 'utf8', function (error, data) {
    console.log('Асинхронное чтение файла');
    if (error) throw error; // если возникла ошибка
    console.log(data); // выводим считанные данные
  });
  console.log('fs.readFile - ', data);
}

function getContactById(contactId) {
  console.log('getContactById - id = ', contactId);
}

function removeContact(contactId) {
  console.log('removeContact - id = ', contactId);
}

function addContact(name, email, phone) {
  console.log('addContact - name = ', name);
  console.log('addContact - email = ', email);
  console.log('addContact - phone = ', phone);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

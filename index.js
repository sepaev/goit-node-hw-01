const { addContact, getContactById, listContacts, removeContact } = require('./contacts');
const argv = require('yargs').argv;

console.log('hello world');
console.log('argv - ', argv._);

// TODO: рефакторить
async function invokeAction([action, id, name, email, phone]) {
  switch (action) {
    case 'list':
      const data = await listContacts();
      console.log(data);
      break;

    case 'get':
      const contact = await getContactById(id);
      console.dir(contact);
      break;

    case 'add':
      const addResult = await addContact(name, email, phone);
      console.log('addResult - ', addResult ? 'Добавлено ' + name : 'Не добавлено');
      break;

    case 'remove':
      const removeResult = await removeContact(id);
      console.log('removeResult - ', removeResult ? 'Удалено id -' + id : 'Не удалено');
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv._);

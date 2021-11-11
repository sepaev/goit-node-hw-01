const { addContact, getContactById, listContacts, removeContact } = require('./controllers/contacts');
const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');
program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      return await listContacts();

    case 'get':
      return await getContactById(parseInt(id));

    case 'add':
      return await addContact(name, email, phone);

    case 'remove':
      return await removeContact(parseInt(id));

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

(async () => {
  await invokeAction(argv);
})();

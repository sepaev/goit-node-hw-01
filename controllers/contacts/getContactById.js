const listContacts = require('./listContacts');

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.filter(contact => contact.id === contactId);
  console.table(contact);
  return contact;
}

module.exports = getContactById;

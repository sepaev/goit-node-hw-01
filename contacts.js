const path = require('path');
const fs = require('fs').promises;
const shortPath = './db/contacts.json';
const contactsPath = path.resolve(shortPath);
const { checkNewContact, getMaxId } = require('./functions');

function listContacts() {
  try {
    return (async () => {
      const data = await fs.readFile(contactsPath, 'utf8');
      return JSON.parse(data);
    })();
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  return contacts.filter(contact => contact.id === contactId);
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const filtredContacts = contacts.filter(contact => contact.id !== contactId);
  if (contacts.length === filtredContacts.length) return false;
  try {
    (async () => {
      await fs.writeFile(contactsPath, JSON.stringify(filtredContacts), 'utf8');
    })();
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const id = getMaxId(contacts) + 1;
  if (phone.length !== 10) {
    console.log('short phone number');
    return false;
  }
  const phoneString = '(' + phone.slice(0, 3) + ') ' + phone.slice(3, 6) + '-' + phone.slice(6, 10);
  if (!checkNewContact({ id, name, email, phone: phoneString }, contacts)) return false;
  try {
    (async () => {
      await fs.writeFile(contactsPath, JSON.stringify([...contacts, { id, name, email, phone: phoneString }]), 'utf8');
    })();
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

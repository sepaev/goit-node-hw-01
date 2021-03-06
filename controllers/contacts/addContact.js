const listContacts = require('./listContacts');
const { checkNewContact, getMaxId } = require('../../helpers/functions');
const path = require('path');
const fs = require('fs').promises;
const { dbPath } = require('../../settings');
const contactsPath = path.resolve(dbPath);

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const id = getMaxId(contacts) + 1;
  console.log('phone', phone);

  if (phone.length !== 10) {
    console.log('Incorrect phone number. Number must contain 10 didgit like 3621234567');
    return;
  }
  const phoneString = '(' + phone.slice(0, 3) + ') ' + phone.slice(3, 6) + '-' + phone.slice(6, 10);
  const newContact = { id, name, email, phone: phoneString };
  if (!checkNewContact(newContact, contacts)) return;
  try {
    fs.writeFile(contactsPath, JSON.stringify([...contacts, newContact]), 'utf8');
    console.log('contact successfully created');
    console.table(newContact);
    return newContact;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = addContact;

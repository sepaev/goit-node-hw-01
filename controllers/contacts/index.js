const addContact = require('./addContact');
const getContactById = require('./getContactById');
const listContacts = require('./listContacts');
const removeContact = require('./removeContact');

const contacts = { addContact, listContacts, getContactById, removeContact };
module.exports = contacts;

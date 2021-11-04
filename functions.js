const getMaxId = contacts => {
  let maxId = 0;
  contacts.forEach(({ id }) => {
    if (id > maxId) maxId = id;
  });
  console.log('maxId - ', maxId);
  return maxId;
};
const checkNewContact = ({ name, email, phone }, contacts) => {
  let result = true;
  let message = '';
  contacts.forEach(contact => {
    if (contact.name === name) {
      message = 'error, name - ' + name + ' already exists';
      result = false;
    }
    if (contact.email === email) {
      message = 'error, email - ' + email + ' already exists';
      result = false;
    }
    if (contact.phone === phone) {
      message = 'error, phone - ' + phone + ' already exists';
      result = false;
    }
  });
  if (message) console.log(message);
  return result;
};

module.exports = {
  getMaxId,
  checkNewContact,
};

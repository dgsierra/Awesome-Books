import {
  list, listBtn, addBtn, contactBtn, texttest, contact, addForm,
} from './DOMElements.js';

// End of Clock
// WEB APP
export default () => {
  listBtn.addEventListener('click', () => {
    list.className = 'display';
    contact.className = 'contact nodisplay';
    addForm.className = 'display-form nodisplay';
    texttest.innerText = 'All awesome books';
  });
  contactBtn.addEventListener('click', () => {
    list.className = 'nodisplay';
    contact.className = 'contact display';
    addForm.className = 'display-form nodisplay';
    texttest.innerText = 'Contact Information';
  });
  addBtn.addEventListener('click', () => {
    list.className = 'nodisplay';
    contact.className = 'contact nodisplay';
    addForm.className = 'display-form display';
    texttest.innerText = 'Add a new book';
  });
};

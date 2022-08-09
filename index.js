import mytest from './modules/testing.js';
mytest(20);
import { list, listBtn, addBtn, contactBtn, texttest, contact, addForm, dateElement } from './modules/DOMElements.js';
import Collection from './modules/bookClass.js';
// import addBooksEvents from './modules/addBooksEvents.js';
export const books = new Collection();
// Local Storage Retrieval
const mystorage = JSON.parse(localStorage.getItem('data').split(','));
console.log(mystorage);
document.addEventListener('DOMContentLoaded', () => {
  mystorage.forEach((element) => {
    const { title, author } = element;
    books.addBook(title, author);
    books.removeBook();
    books.counter += 1;
  });
});
// Clock
const localdate = () => {
  const date = new Date();
  const dateString = date.toLocaleString();
  dateElement.textContent = dateString;
};

setInterval(localdate, 1000);
// End of Clock
// WEB APP
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
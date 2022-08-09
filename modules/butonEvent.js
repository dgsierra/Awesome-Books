import { authorName, bookTitle, button } from './DOMElements.js';
import dataform from './localStorage.js';
import { books } from '../index.js';

export default () => {
  console.log("This is a in the module addBooksEvents.js");
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const book = bookTitle.value;
    const author = authorName.value;
    books.addBook(book, author);
    books.removeBook();
    dataform();
    books.counter += 1;
    authorName.value = '';
    bookTitle.value = '';
  })};

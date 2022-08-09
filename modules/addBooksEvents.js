import { button } from './DOMElements.js';
import dataform from './localStorage.js';

export default () => {button.addEventListener('click', (e) => {
    e.preventDefault();
    const book = bookTitle.value;
    const author = authorName.value;
    books.addBook(book, author);
    books.removeBook();
    // RESET-VALUES
    authorName.value = '';
    bookTitle.value = '';
    // LOCAL-STORAGE
    dataform();
    // COUNTER-TRACKER
    books.counter += 1;
  })};
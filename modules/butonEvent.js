import { authorName, bookTitle, button } from './DOMElements.js';
import dataform from './localStorage.js';
import { books } from './booksClassCall.js';

export default () => {
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
  });
};

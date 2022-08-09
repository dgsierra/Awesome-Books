import { mystorage } from './DOMElements.js';
import { books } from './booksClassCall.js';

// Local Storage Retrieval
export default () => {
  if (mystorage.length > 0) {
    document.addEventListener('DOMContentLoaded', () => {
      mystorage.forEach((element) => {
        const { title, author } = element;
        books.addBook(title, author);
        books.removeBook();
        books.counter += 1;
      });
    });
  }
};

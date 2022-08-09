import { mystorage } from './DOMElements.js';
import { books } from '../index.js';

// Local Storage Retrieval
export default () => {document.addEventListener('DOMContentLoaded', () => {
  mystorage.forEach((element) => {
    const { title, author } = element;
    books.addBook(title, author);
    books.removeBook();
    books.counter += 1;
  });
})};

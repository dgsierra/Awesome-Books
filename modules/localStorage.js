import { books } from './booksClassCall.js';

export default () => {
  localStorage.setItem('data', JSON.stringify(books.bookArray));
};
import { books } from '../index.js';

export default () => {
    localStorage.setItem('data', JSON.stringify(books.bookArray)),
    console.log(books.bookArray),
    console.log("This is a in the module localStorage.js");
  };
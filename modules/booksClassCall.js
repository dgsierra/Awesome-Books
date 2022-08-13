import { bookTitle, authorName } from './DOMElements.js';
import Collection from './bookClass.js';
// eslint-disable-next-line no-undef
// export default books = new Collection();
export const books = new Collection();
export default () => {
  document.addEventListener('media', (e) => {
    e.preventDefault();
    const book = bookTitle.value;
    const author = authorName.value;
    books.addBook(book, author);
    books.removeBook();
  });
};
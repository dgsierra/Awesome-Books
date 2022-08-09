import { dateElement } from './DOMElements.js';
import { DateTime } from './luxon/build/es6/luxon.js';

export default () => {
  const date = DateTime.now().toLocaleString(DateTime.DATE_FULL);
  dateElement.textContent = date;
};

import DOMLoad from './modules/DOMLoad.js';
import navDisplay from './modules/navDisplay.js';
import addEvent from './modules/butonEvent.js';
import myDate from './modules/dateLuxor.js';

// Add event listener to the button
addEvent();
// Local Storage Retrieval
DOMLoad();
// Date
myDate();
// Nav Display
navDisplay();

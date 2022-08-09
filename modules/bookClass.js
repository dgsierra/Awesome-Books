import { list } from './DOMElements.js';
export default class Collection {
    constructor() {
      this.bookArray = [];
      this.counter = 0;
      this.delcounter = 0;
    }
  
    addBook(book, author) {
      this.object = {};
      this.object.id = this.counter;
      this.object.title = book;
      this.object.author = author;
      this.bookArray.push(this.object);
      this.display(book, author);
    }
  
    display(book, author) {
      const li = document.createElement('li');
      this.removebtn = document.createElement('button');
      li.setAttribute('id', `${this.counter}`);
      li.className = 'lists';
      li.textContent = `${book} by ${author}`;
      // REMOVE BUTTON
      this.removebtn.className = 'removebuttons';
      this.removebtn.textContent = 'Remove';
      li.appendChild(this.removebtn);
      list.appendChild(li);
    }
  
    removeBook() {
      this.buttons = document.querySelectorAll('.removebuttons');
      this.buttons[this.buttons.length - 1].addEventListener('click', (e) => {
        e.preventDefault();
        this.elid = e.target.parentNode.id;
        this.remotion = e.target.parentNode;
        this.localcount = (this.elid - this.delcounter);
        list.removeChild(this.remotion);
        this.bookArray.splice(this.localcount, 1);
        this.delcounter += 1;
        this.dataLog();
      });
    }
  
    dataLog() {
      localStorage.setItem('data', JSON.stringify(this.bookArray));
    }
  }
import { BookManager } from './modules/bookManager.js';
import { updateDom } from './modules/domUpdater.js';
import ShowTime from './modules/ShowTime.js';
const bookForm = document.querySelector('.book-form');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitleInput = document.querySelector('.book-title');
  const bookAuthorInput = document.querySelector('.book-author');
  const bookTitle = bookTitleInput.value;
  const bookAuthor = bookAuthorInput.value;
  BookManager.addNewBook(bookTitle, bookAuthor);
  bookTitleInput.value = '';
  bookAuthorInput.value = '';
});

BookManager.displayBooks();
updateDom();
ShowTime(DateTime);
import { BookManager } from './modules/bookManager';
import { updateDom } from './modules/domUpdater';

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
const myLibrary = [];

// function Book(title, author, pages, isRead, bookIdNumber) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.isRead = isRead;
//   this.bookIdNumber = bookIdNumber;
// }

// Book.prototype.read = function () {
//   this.isRead = !this.isRead;
// };

class Book {
  constructor(title, author, pages, isRead, bookIdNumber) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.bookIdNumber = bookIdNumber;
  }

  read() {
    this.isRead = !this.isRead;
  }
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

function displayLibrary() {
  const library = document.querySelector(".bookshelf");
  library.innerHTML = "";
  myLibrary.forEach((index, book) => createBookCard(index, book));
}

const createBookCard = (book, index) => {
  const library = document.querySelector(".bookshelf");

  const bookdiv = document.createElement("div");
  bookdiv.classList.add("book-card");
  bookdiv.setAttribute("id", index);

  const contentdiv = document.createElement("div");
  contentdiv.classList.add("content-holder");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", function (e) {
    myLibrary.splice(index, 1);
    this.parentNode.remove();
    displayLibrary();
  });

  const readButton = document.createElement("button");
  readButton.classList.add("isReadButton");
  readButton.textContent = "Read";
  if (book.isRead) {
    readButton.classList.add("isRead");
  }

  readButton.addEventListener("click", function (e) {
    myLibrary[index].read();
    displayLibrary();
  });

  const booktitle = document.createElement("p");
  booktitle.classList.add("title");
  booktitle.textContent = book.title;

  const bookauthor = document.createElement("p");
  bookauthor.classList.add("author");
  bookauthor.textContent = book.author;

  const bookpages = document.createElement("p");
  bookpages.classList.add("pages");
  bookpages.textContent = book.pages;

  //   const bookisRead = document.createElement("p");
  //   bookisRead.classList.add("isRead");
  //   bookisRead.textContent = book.isRead;

  contentdiv.appendChild(deleteButton);
  contentdiv.appendChild(booktitle);
  contentdiv.appendChild(bookauthor);
  contentdiv.appendChild(bookpages);
  //   bookdiv.appendChild(bookisRead);
  contentdiv.appendChild(readButton);

  bookdiv.appendChild(contentdiv);

  library.appendChild(bookdiv);
};

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const titleInput = document.getElementById("book-title");
const authorInput = document.getElementById("book-author");
const pagesInput = document.getElementById("book-pages");
const isReadInput = document.getElementById("book-isRead");

const inputs = document.querySelectorAll("input");

// const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  const book = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    isReadInput.checked,
    (bookIdNumber = `book-${myLibrary.length + 1}`)
  );

  console.log(myLibrary.length);

  addBookToLibrary(book);

  displayLibrary();

  //createBookCard(book);

  favDialog.close(); // Have to send the select box value here.

  inputs.forEach((input) => (input.value = ""));
  isReadInput.checked = false;
});

const myLibrary = [];

function Book(title, author, numPages, isRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

const createBookCard = (book) => {
  const library = document.querySelector(".bookshelf");
  const bookdiv = document.createElement("div");
  bookdiv.classList.add("book-card");

  const booktitle = document.createElement("p");
  booktitle.classList.add("title");
  booktitle.textContent = book.title;

  const bookauthor = document.createElement("p");
  bookauthor.classList.add("author");
  bookauthor.textContent = book.author;

  const bookpages = document.createElement("p");
  bookpages.classList.add("pages");
  bookpages.textContent = book.pages;

  const bookisRead = document.createElement("p");
  bookisRead.classList.add("isRead");
  bookisRead.textContent = book.isRead;

  bookdiv.appendChild(booktitle);
  bookdiv.appendChild(bookauthor);
  bookdiv.appendChild(bookpages);
  bookdiv.appendChild(bookisRead);

  library.appendChild(bookdiv);
};

let theHobbit = new Book("The Hobbit", "JRR Tolkein", "269", false);

let projectHailMary = new Book("Project Hail Mary", "Any Weir", "352", true);

let slaughterHouseFive = new Book(
  "Slaughter House Five",
  "Kurt Vonnegut",
  "110",
  true
);

addBookToLibrary(theHobbit);
addBookToLibrary(projectHailMary);
addBookToLibrary(slaughterHouseFive);

myLibrary.forEach(createBookCard);

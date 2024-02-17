const addButton = document.querySelector(".add-button")

let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.unshift(book);
    console.log(myLibrary)
}

addButton.addEventListener(("click"), () => {
    let name = document.querySelector("#name");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    let read = document.querySelector("#read");

    const newBook = new Book(name.value, author.value, pages.value, read.checked);

    addBookToLibrary(newBook);

    name.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
})
const addButton = document.querySelector(".add-button");
const libraryContainer = document.querySelector(".lybrary-container");
const createCard = document.querySelector(".create-card");

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

function createBookCard(name, author, pages, read) {
    const cardDiv = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const readDiv = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    cardDiv.classList.add("card");

    input.setAttribute("type", "checkbox")
    input.setAttribute("id", "read")

    createCard.parentNode.insertBefore(cardDiv, createCard.nextSibling);
    cardDiv.appendChild(h2);
    cardDiv.appendChild(h3);
    cardDiv.appendChild(p);
    cardDiv.appendChild(readDiv);
    readDiv.appendChild(label);
    readDiv.appendChild(input);

    h2.textContent = name;
    h3.textContent = author;
    p.textContent = pages;
    label.textContent = "Read:"
    input.checked = read;
}

addButton.addEventListener(("click"), () => {
    let name = document.querySelector("#name");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    let read = document.querySelector("#read");

    const newBook = new Book(name.value, author.value, pages.value, read.checked);

    addBookToLibrary(newBook);
    createBookCard(name.value, author.value, pages.value, read.checked);

    name.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
})
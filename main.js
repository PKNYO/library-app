const addButton = document.querySelector(".add-button");
const createCard = document.querySelector(".create-card");

let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);

    createBookCard(newBook.name, newBook.author, newBook.pages, newBook.read);
    updateLibrary()
}

function createBookCard(name, author, pages, read) {
    const cardDiv = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const readDiv = document.createElement("div");
    const label = document.createElement("label");
    const readText = document.createElement("p");
    const buttonDiv = document.createElement("div");
    const deleteButton = document.createElement("button");
    const readButton = document.createElement("button");

    cardDiv.classList.add("card");
    cardDiv.classList.add("book-card");
    deleteButton.classList.add("button");
    readButton.classList.add("button");

    readText.setAttribute("id", "read");

    createCard.parentNode.insertBefore(cardDiv, createCard.nextSibling);
    cardDiv.appendChild(h2);
    cardDiv.appendChild(h3);
    cardDiv.appendChild(p);
    cardDiv.appendChild(readDiv);
    cardDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(deleteButton);
    buttonDiv.appendChild(readButton);
    readDiv.appendChild(label);
    readDiv.appendChild(readText);

    h2.textContent = name;
    h3.textContent = author;
    p.textContent = pages;
    label.textContent = "Read:";
    readText.textContent = (read === true) ? "YES" : "NO";
    console.log(readText.textContent)
    deleteButton.textContent = "Delete";
    readButton.textContent = "Read";

    deleteButton.addEventListener("click", (e) => deleteCard(e));
    readButton.addEventListener("click", (e) => {isRead(e)});
}

function deleteCard(element) {
    element.target.parentNode.parentNode.remove();

    updateLibrary();
}

function isRead(element) {
    let readElement = element.target.parentNode.parentNode.querySelector("#read");

    readElement.textContent = (readElement.textContent === "YES") ? "NO" : "YES";
    console.log(readElement.textContent);

    updateLibrary();
}

function updateLibrary() {
    const cards = document.querySelectorAll(".book-card");

    myLibrary = [];

    cards.forEach((card) => {
        const name = card.querySelector("h2").textContent;
        const author = card.querySelector("h3").textContent;
        const pages = card.querySelector("p").textContent;
        const read = (card.querySelector("#read").textContent === "YES") ? true : false;
        const book = new Book(name, author, pages, read);

        myLibrary.push(book);
    })
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
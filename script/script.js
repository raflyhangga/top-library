let myLib = [];

function Book(title,author,pages,read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

Book.prototype.toggleRead = function (){
    this.read = !this.read;
}

function addBookToLib() {
    let title = document.querySelector("#bookTitle").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value == "true" ? true : false ;

    let tempObject = new Book(title,author,pages,read);
    myLib.push(tempObject);
    return;
}

function render() {
    let content = document.querySelector(".content");
    content.innerHTML="";
    for(i = 0; i < myLib.length; i++){
        let cardPrototype = document.createElement("div");
        cardPrototype.classList.add("card");
        let book = myLib[i];
        cardPrototype.innerHTML = `<div class="title">
        <h2>${book.title}</h2>
    </div>
    <div class="card-container">
        <div class="author">
            <h2>Author</h2>
            <p>${book.author}</p>
        </div>
        <div class="pages">
            <h2>Pages</h2>
            <p>${book.pages}</p>
        </div>
        <div class="read">
            <h2>Read</h2>
            <p>${book.read == true ? "Yes" : "No"}</p>
        </div>
        <div class="button">
            <button type="submit" onClick = "changeReadStatus(${i})">Read Status</button>
            <button type="submit" onClick="removeBook(${i})">Delete</button>
        </div>
    </div>`
        content.appendChild(cardPrototype);
        console.log(book.read);
    }
}

function removeBook(index){
    myLib.splice(index,1);
    console.log(myLib);
    render();
    return;
}

function changeReadStatus(index) {
    let book = myLib[index];
    book.toggleRead();
    render();
}

// DOM

// Form's DOM
let addBookButton = document.querySelector(".main-title button#addBook")
let form = document.querySelector("form");

addBookButton.addEventListener('click',()=>{
    //Toggle form's display 
    form.classList.toggle("none");
})

let newBookButton = document.querySelector(".form form #newBook");

newBookButton.addEventListener('click',(e)=> {
    // Put user's data into array and disable form's display
    addBookToLib();
    e.preventDefault();
    form.classList.add("none");
    render();
    return;
})

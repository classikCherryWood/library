const myLibrary = [];

function Book(name, author, page, read){

    if(!new.target) throw Error("Make sure to use the `new` keyword!!!");
    this.id = crypto.randomUUID();
    this.name = name, 
    this.author = author,
    this.page = page, 
    this.read = read
    
};

function addBookToLibrary(name, author, page, read){
    let newBook = new Book(name, author, page, read);
    myLibrary.push(newBook);
}


// loop throught the array and display books in it
function displayBook(arr){
    let container = document.getElementById('book-container');
    
    arr.forEach((book) => {
        let card = document.createElement('div');
        card.className = "book-card";
        card.innerHTML = `
        <h3 class="book-title-text">${book.name}</h3>
        <p><strong class="book-title-text">Author:</strong> ${book.author} </p>
        <p><strong class="book-title-text">Page:</strong> ${book.page}</p>
        <p><strong class="book-title-text">Read?:</strong> ${book.read}</p>        
        `
        container.appendChild(card);
    });
    
}


addBookToLibrary("Never Let Me Go", "Kazuo Ishiguro", 250, true);
addBookToLibrary("Half Life Romance", "Eileen Chang", 280, true);
addBookToLibrary("Metamorphosis", "Franz Kafka", 115, false);
addBookToLibrary("Book of Laughter and Forgetting", "Milan Kundera", 312, true);
addBookToLibrary("Serotonin", "Michel Houellebecq", 240, false);
displayBook(myLibrary);

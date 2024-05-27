//book constructor
function book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//ui constructor
function ui() {}

//add book to list
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // create tr (table row
  const row = document.createElement('row');

}

//eventlistener
document.getElementById('book-form').addEventListener('submit', function(e){
 const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value

      //instantiate book
      const book = new book (title, author, isbn);

      //instantiate ui

    const UI = new UI();

    //add book to list
    UI.addBookToList(book);


    console.log(book);
 

  e.preventDefault();
});
class Library {
    constructor() {
      this.books = [];
      this.nextId = 1;
    }
  
    // Add a new book to the library
    addBook(title, author, year, genre) {
      const book = {
        id: this.nextId++,
        title,
        author,
        year,
        genre,
        available: true
      };
      this.books.push(book);
      return book;
    }
  
    // Delete a book from the library by ID
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        const deletedBook = this.books.splice(index, 1)[0];
        return deletedBook;
      }
      return null;
    }
  
    // Update a book's information
    updateBook(id, updates) {
      const book = this.getBook(id);
      if (book) {
        Object.assign(book, updates);
        return book;
      }
      return null;
    }
  
    // Get a single book by ID
    getBook(id) {
      return this.books.find(book => book.id === id) || null;
    }
  
    // View all books in the library
    viewAllBooks() {
      return [...this.books]; // Return a copy to prevent direct modification
    }
  
    // Search books by title, author, or genre
    searchBooks(query) {
      const lowerQuery = query.toLowerCase();
      return this.books.filter(book => 
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery) ||
        book.genre.toLowerCase().includes(lowerQuery)
      );
    }
  
    // Check out a book (mark as unavailable)
    checkOutBook(id) {
      const book = this.getBook(id);
      if (book && book.available) {
        book.available = false;
        return true;
      }
      return false;
    }
  
    // Return a book (mark as available)
    returnBook(id) {
      const book = this.getBook(id);
      if (book && !book.available) {
        book.available = true;
        return true;
      }
      return false;
    }
  }
  
  // Example usage:
  const myLibrary = new Library();
  
  // Add some books
  myLibrary.addBook("The Hobbit", "J.R.R. Tolkien", 1937, "Fantasy");
  myLibrary.addBook("1984", "George Orwell", 1949, "Dystopian");
  myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
  
  // View all books
  console.log("All books:");
  console.log(myLibrary.viewAllBooks());
  
  // Get a specific book
  const book = myLibrary.getBook(2);
  console.log("\nBook with ID 2:");
  console.log(book);
  
  // Update a book
  myLibrary.updateBook(2, { year: 1948 });
  console.log("\nUpdated book 2:");
  console.log(myLibrary.getBook(2));
  
  // Delete a book
  const deleted = myLibrary.deleteBook(1);
  console.log("\nDeleted book:");
  console.log(deleted);
  
  // View remaining books
  console.log("\nRemaining books:");
  console.log(myLibrary.viewAllBooks());
  
  // Search books
  console.log("\nSearch results for 'or':");
  console.log(myLibrary.searchBooks("or"));
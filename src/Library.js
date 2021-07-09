function createLibrary(library) {
  return {
    name: library,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  };
};

function addBook(library, book) {
  library.shelves[book.genre].push(book);
};

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
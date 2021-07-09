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




module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};
class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name) {
    return `Hello, ${name}!`
  };
  
};
module.exports = Librarian;
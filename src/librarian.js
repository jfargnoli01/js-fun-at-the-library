class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, isMorning) {
    if(isMorning === true) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  };
  
};
module.exports = Librarian;
class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  };

  greetPatron(name, isMorning) {
    if(isMorning === true) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  };

  findBook(title) {
    for (var i = 0; i < this.library.shelves.fantasy.length; i++) {
      if(this.library.shelves.fantasy[i].title === title) {
        this.library.shelves.fantasy.splice(i, 1);
        return `Yes, we have ${title}`;
      } 
    }
    return `Sorry, we do not have ${title}`;
  };

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * .25);
  };
};
module.exports = Librarian;
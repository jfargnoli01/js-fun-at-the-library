function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
  return {name: name, age: age, pronouns: pronouns};
};

function saveReview(review, reviews) {
  if(!reviews.includes(review)) {
    reviews.push(review);
  }
};

function calculatePageCount(bookTitle) {
 return bookTitle.length * 20; 
};

function writeBook(title, mainCharacter, genre) {
  return {
    title: title,
    mainCharacter: mainCharacter,
    genre: genre,
    pageCount: calculatePageCount(title),
  };
};

function editBook(book) {
  book.pageCount = calculatePageCount(book.title) * .75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
};
function shelfBook(book, shelf) {
  if(shelf.length < 3) {
    shelf.unshift(book);
  }
};

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === title) {
      shelf.splice(i, 1);
    }
  } 
};

function listTitles(shelf) {
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  return titles.join(", ");
};

//should tell us if title is on shelf
//function accepting 2 params (shelf,title)
function searchShelf(shelf, title) {
  //creat a loop to iterate over shelf array lenghth
  for (var i = 0; i < shelf.length; i++) {
    //if array includes title
    if(shelf[i].title === title) {
      //return true
      return true;
    }
  } 
  //why does return false work
  return false;
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
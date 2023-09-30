const getTheTitles = function(books) {
    const bookTitles = []
    books.forEach(element => {
        bookTitles.push(element['title'])
    });
    console.log(bookTitles);
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;

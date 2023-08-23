let myLib = [
    {
        title : "Game Kelaparan",
        author : "Udean",
        pages : 123,
        read : true
    },
    {
        title : "Heri Pottah",
        author : "Udeanx",
        pages : 124,
        read : false
    }
];


function addBookToLib(bookTitle,authorName,pagesNumber,isRead) {
    let bookObject = {
        title : bookTitle,
        author : authorName,
        pages : pagesNumber,
        read : isRead
    }
    myLib.push(bookObject);
    return;
}


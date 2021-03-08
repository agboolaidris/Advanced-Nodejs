const fs = require("fs");

// const book = { book: "The hunter man", author: "Dewale Babalola" };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("file.json", bookJSON);
const dataBuffer = fs.readFileSync("file.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);

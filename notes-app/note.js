const fs = require("fs");
const addNote = (title, body) => {};

const loadNote = () => {
  try {
    const dataBuffer = fs.readFileSync("note.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = not;

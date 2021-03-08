const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const data = loadNote();
  data.push({ title: title, body: body });
  saveNote(data);
};

const saveNote = (e) => {
  console.log(e);
  const data = JSON.stringify(e);
  fs.writeFileSync("note.json", data);
};
const loadNote = () => {
  try {
    const dataBuffer = fs.readFileSync("note.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote,
};

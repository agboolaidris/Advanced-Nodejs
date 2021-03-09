const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const data = loadNote();
  const filter = data.filter((e) => (e.title = title));
  if (!filter) {
    data.push({ title: title, body: body });
    saveNote(data);
    console.log("note! added");
  } else {
    console.log("note! exist in json");
  }
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

const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const data = loadNote();
  const filter = data.filter((e) => e.title === title);

  if (filter.length === 0) {
    data.push({ title: title, body: body });
    saveNote(data);
    console.log("note! added");
  } else {
    console.log("note! exist in json");
  }
};

const removeNote = (title) => {
  const data = loadNote();
  const res = data.find((e) => e.title === title);

  if (res) {
    const e = data.filter((e) => e.title !== title);
    saveNote(e);
    console.log(chalk.bgGreen("note remove!"));
  } else {
    console.log(chalk.bgRed("note does not exist"));
  }
};

const listNote = () => {
  const data = loadNote();
  data.forEach((element) => {
    console.log(element.title);
  });
};

const readNote = (title) => {
  const data = loadNote();
  const res = data.find((e) => e.title === title);
  debugger;
  if (res) {
    console.log(chalk.bgGreen(res.title));
    console.log(res.body);
  } else {
    console.log(chalk.bgRed("note not found"));
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
  removeNote,
  listNote,
  readNote,
};

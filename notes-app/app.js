const { addNote, removeNote, listNote, readNote } = require("./note");
const chalk = require("chalk");
const yargs = require("yargs");

//yargs version
yargs.version("1.1.0");

//add a note
yargs.command({
  command: "add",
  describe: "add a note!",
  builder: {
    title: {
      describe: "add title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "add body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    addNote(argv.title, argv.body);
  },
});

//remove a note
yargs.command({
  command: "remove",
  describe: "REmove a note!",
  builder: {
    title: {
      describe: "remove title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    removeNote(argv.title);
  },
});

//read a note
yargs.command({
  command: "read",
  builder: {
    title: {
      describe: "read title",
      demandOption: true,
      type: "string",
    },
  },
  describe: "Read a note!",
  handler: (argv) => {
    readNote(argv.title);
  },
});

//list a note
yargs.command({
  command: "list",
  describe: "List a note!",
  handler: () => {
    listNote();
  },
});
yargs.parse();
//const fs = require("fs");
//fs.writeFileSync("note.txt", "my name is idris.");
//fs.appendFileSync("note.txt", " I live in Laos, Nigeria");

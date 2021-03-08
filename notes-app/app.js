const note = require("./note");
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
    console.log("body: " + argv.body);
  },
});

//delete a note
yargs.command({
  command: "remove",
  describe: "REmove a note!",
  handler: () => {
    console.log("removing a note");
  },
});

//read a note
yargs.command({
  command: "read",
  describe: "Read a note!",
  handler: () => {
    console.log("remove a note");
  },
});

//list a note
yargs.command({
  command: "list",
  describe: "List a note!",
  handler: () => {
    console.log("list a note!");
  },
});

console.log(yargs.argv);

//const fs = require("fs");
//fs.writeFileSync("note.txt", "my name is idris.");
//fs.appendFileSync("note.txt", " I live in Laos, Nigeria");

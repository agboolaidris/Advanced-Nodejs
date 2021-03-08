const note = require("./note");
const chalk = require("chalk");

const command = process.argv[2];
if (command === "add") {
  console.log("add note!");
} else if (command === "remove") {
  console.log("remove note!");
} else {
  console.log("note!");
}

//const fs = require("fs");
//fs.writeFileSync("note.txt", "my name is idris.");
//fs.appendFileSync("note.txt", " I live in Laos, Nigeria");

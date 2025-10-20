const fs = require("fs");
________________________________________________________________________________________________
/*
//creating new files
fs.writeFileSync("files/apple.txt", "This is fruit");
fs.writeFileSync("files/banana.txt", "This is fruit");

//deleting a file
fs.unlinkSync("files/banana.txt");

//reading a file
const data = fs.readFileSync("files/apple.txt", "utf-8");
console.log(data);

//updating a file
fs.appendFileSync("files/apple.txt", " and this is good for health");
*/

//CRUD OPERATIONS USING TERMINAL COMMANDS
const operation = process.argv[2];
________________________________________________________________________________________________

// creating file from terminal -- node index.js Write fileName "your content"
if (operation === "Write") {
  const name = process.argv[3];
  const content = process.argv[4];
  fs.writeFileSync(`files/${name}.txt`, content);
  console.log("File Created");
}

// reading file from terminal -- node index.js Read fileName
else if (operation === "Read") {
  const name = process.argv[3];
  const data = fs.readFileSync(`files/${name}.txt`, "utf-8");
  console.log(data);
}

//updating file from terminal -- node index.js update fileName "new content"
else if (operation === "update") {
  const name = process.argv[3];
  const content = process.argv[4];
  fs.appendFileSync(`files/${name}.txt`, content);
}

//delete a file from terminal -- node index.js delete fileName
else if (operation === "delete") {
  const name = process.argv[3];
  fs.unlinkSync(`files/${name}.txt`);
}

//fallback case
else {
  console.log("Operation not found");
}

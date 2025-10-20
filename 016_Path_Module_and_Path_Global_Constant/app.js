const path = require("path");
const file = "text/peter.txt";

console.log(path.extname(file)); // Output: .txt
console.log(path.dirname(file)); // Output: text
console.log(path.basename(file)); // Output: peter.txt
console.log(path.resolve("text", "peter.text")); // Output: absolute path to text/peter.text
console.log(path.isAbsolute(file)); // Output: false (if the path is not absolute)
console.log(__dirname); // Output: current directory path
console.log(__filename); // Output: current file path
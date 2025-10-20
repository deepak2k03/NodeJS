const http = require('http');

const argv = process.argv;

http.createServer((req, res) => {
  res.write("hello");
  res.end();
}).listen(argv[2], () => {
    console.log(`Server running at http://localhost:${argv[2]}/`);
});
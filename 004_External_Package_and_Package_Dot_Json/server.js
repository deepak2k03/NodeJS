const http = require("http");

http
  .createServer((req, resp) => {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<h1>Hello this is deepak</h1>");
    resp.end("Hello");
  })
  .listen(3000);

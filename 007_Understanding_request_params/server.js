// const http = require("http");

// http
//   .createServer((req, resp) => {
//     console.log(req.url); // Log the requested URL
//     console.log(req.headers); // Log the request headers
//     console.log(req.headers.host); // Log the host
//     console.log(req.method); // Log the HTTP method (GET, POST, etc.)
//   })
//   .listen(5000);

const http = require("http");

http
  .createServer((req, resp) => {
    if (req.url == "/") {
      resp.write("<h1>Home page</h1>");
    } else if (req.url == "/login") {
      resp.write("<h1>Login page</h1>");
    } else {
      resp.write("<h1>Other page</h1>");
    }
    resp.end(); // End the response
  })
  .listen(5000);

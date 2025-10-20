const http = require("http");
const fs = require("fs");

http
  .createServer((req, resp) => {
    if (req.url == "/") {
      fs.readFile("html/home.html", "utf-8", (error, data) => {
        if (error) {
          resp.writeHead(500, { "content-type": "text/plain" });
          resp.end("internal server error");
          return;
        }

        resp.writeHead(200, { "content-type": "text/html" });
        resp.end(data);
      });
    } else if (req.url == "/style.css") {
      fs.readFile("html/style.css", "utf-8", (error, data) => {
        if (error) {
          resp.writeHead(500, { "content-type": "text/plain" });
          resp.end("css not found");
          return;
        }

        resp.writeHead(200, { "content-type": "text/css" });
        resp.end(data);
      });
    } else {
      resp.writeHead(404, { "content-type": "text/plain" });
      resp.end("Not Found");
    }
  })
  .listen(3200, () => console.log("Server running on http://localhost:3200"));

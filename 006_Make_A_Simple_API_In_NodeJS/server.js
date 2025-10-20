const http = require("http");

const age = 29;

http
  .createServer((req, resp) => {
    resp.setHeader("Content-Type", "text/html");

    resp.write(`
      <html>
        <head>
          <title>Code Step by Step</title>
        </head>
        <body>
          <h1>Hello Anil Sidhu</h1>
          <h2>Age: ${age}</h2>
          <h2>Current Date & Time: ${Date()}</h2>
        </body>
      </html>
    `);

    resp.end();
  })
  .listen(4800);

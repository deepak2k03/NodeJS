const http = require("http");
const fs = require("fs");
const queryString = require("querystring");

http
  .createServer((req, resp) => {
    fs.readFile("html/form.html", "utf-8", (error, data) => {
      if (error) {
        resp.writeHead(500, { "content-type": "text/plain" });
        resp.end("internal server error");
        return;
      }

      resp.writeHead(200, { "content-type": "text/html" });

      if (req.url === "/") {
        resp.write(data);
        resp.end(); // Added closing for the GET request
      } else if (req.url == "/submit") {
        let dataBody = [];
        req.on("data", (chunk) => {
          dataBody.push(chunk);
        });

        req.on("end", () => {
          let rawData = Buffer.concat(dataBody).toString();
          let readableData = queryString.parse(rawData);
          let dataString = "Name: " + readableData.name + ", email:" + readableData.email + "\n";
          
          fs.writeFile("File/" + readableData.name + ".txt", dataString, (err) => {
            if (err) {
              console.error("Error writing file:", err); // Corrected log to console.error
            } else {
              console.log("File written successfully"); // Corrected log to console.log
            }
            
            // Final response and closure MUST be inside the end handler
            resp.write("<h1>Data submitted</h1>");
            resp.end(); // MOVED HERE
          });
        });
        
      } else {
        resp.end(); // Added closing for other requests
      }
    });
  }) // Closing parenthesis for createServer and its callback (THIS WAS MISSING)
  .listen(3200);
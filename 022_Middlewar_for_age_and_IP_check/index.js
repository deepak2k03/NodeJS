import express from "express";

const app = express();

/*
function ageCheck(req, resp, next) {
  if (!req.query.age || req.query.age < 18) {
    resp.send("Alert ! You can not access this page");
  } else {
    next();
  }
}
  
app.use(ageCheck); // Applies globally to all routes
*/


function ipCheck(req, resp, next) {
  const ip = req.socket.remoteAddress;
  console.log(ip); // View in terminal

  if (ip.includes("192.168.1.23")) {
    resp.send("Alert ! You can not access this page");
  } else {
    next();
  }
}

app.use(ipCheck); // Applies globally



app.get("/", (req, resp) => {
  resp.send("<h1>Home Page</h1>");
});

app.get("/login", (req, resp) => {
  resp.send("<h1>Login Page</h1>");
});

app.get("/admin", (req, resp) => {
  resp.send("<h1>Admin Page</h1>");
});

app.listen(3200);
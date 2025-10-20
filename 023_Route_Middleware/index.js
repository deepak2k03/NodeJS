import express from "express";

const app = express();


function ageCheck(req, resp, next) {
  if (!req.query.age || req.query.age < 18) {
    resp.send("Alert ! You can not access this page");
  } else {
    next();
  }
}

app.get("/",  (req, resp) => {
  resp.send("<h1>Home Page</h1>");
});

app.get("/login", ageCheck, (req, resp) => {
  resp.send("<h1>Login Page</h1>");
});

app.get("/admin", ageCheck, (req, resp) => {
  resp.send("<h1>Admin Page</h1>");
});

app.listen(3200);
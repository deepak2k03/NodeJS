import express from "express";

const app = express();

/*
function checkRoute(req, resp, next) {
  console.log("user is acessing " + req.url + " Page");
  next();
}

app.use(checkRoute);
*/

// the commented code is same as
app.use((req, resp, next) => {
  console.log("user is acessing " + req.url + " Page");
  next();
});

app.get("/", (req, resp) => {
  resp.send("Home Page");
});

app.get("/users", (req, resp) => {
  resp.send("users Page");
});

app.get("/products", (req, resp) => {
  resp.send("Products Page");
});

app.listen(3200);
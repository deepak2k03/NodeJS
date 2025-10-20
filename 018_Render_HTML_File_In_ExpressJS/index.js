import express from "express";
import path from "path";

const app = express();

app.get("/", (req, resp) => {
  const absPath = path.resolve("view/home.html");
  resp.sendFile(absPath);
});

app.get("/login", (req, resp) => {
  const absPath = path.resolve("view/login.html");
  resp.sendFile(absPath);
});

app.get("/about", (req, resp) => {
  const absPath = path.resolve("view/about.html");
  resp.sendFile(absPath);
});
app.listen(3200);
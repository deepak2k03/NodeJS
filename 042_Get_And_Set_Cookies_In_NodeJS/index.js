import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/profile", (req, res) => {
  console.log(req.body.name);
  res.cookie("loggedIn", "true");
  res.cookie("name", req.body.name);
  res.render("profile");
});

app.get("/", (req, res) => {
  let cookiesData = req.get("Cookie");
  cookiesData = cookiesData.split(";");
  cookiesData = cookiesData[1].split("=");
  res.render("home", { name: cookiesData[1] });
});

app.listen(3000);

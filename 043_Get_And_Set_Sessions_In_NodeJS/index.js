import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret:'apple',
  resave:false,
  saveUninitialized:true
}))

app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/profile", (req, res) => {
  req.session.data = req.body;
  res.render("profile");
});

app.get("/", (req, res) => {
  const data = req.session.data;
  res.render("home", { data});
});
app.listen(3000);

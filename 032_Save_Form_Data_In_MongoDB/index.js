import express, { urlencoded } from "express";
import { MongoClient } from "mongodb";

const dbName = "school";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const app = express();
app.use(urlencoded({ extended: true }));
app.set("view engine", "ejs");

client.connect().then((connection) => {
  const db = connection.db(dbName);

  app.get("/add", async (req, res) => {
    res.render("add-student");
  });

  app.post("/add-student", async (req, res) => {
    const collection = db.collection("students");
    const result = await collection.insertOne(req.body);
    res.send("Data Added");
  });
}); 

app.listen(3200);

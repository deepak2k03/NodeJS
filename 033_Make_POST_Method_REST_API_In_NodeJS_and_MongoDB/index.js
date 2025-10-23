import express, { urlencoded } from "express";
import { MongoClient } from "mongodb";

const dbName = "school";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.json());

client.connect().then((connection) => {
  const db = connection.db(dbName);
  app.post("/add-student-api", async (req, res) => {  
    const collection = db.collection("students");
    const result = await collection.insertOne(req.body);
    res.send({ message: "Data Added", id: result.insertedId });
  });
}); 

app.listen(3200);

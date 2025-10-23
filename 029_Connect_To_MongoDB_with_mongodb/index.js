import express from "express";
import { MongoClient } from "mongodb";

const dbName="school"
const url="mongodb://localhost:27017"
const client = new MongoClient(url);

async function dbConeection(){
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("students");
  const result = await collection.find().toArray();
  console.log(result);
}

dbConeection()

const app = express();
const PORT = 3200;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
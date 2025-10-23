import { MongoClient } from "mongodb";

const url ="<connection url>";
const database = "school";
const collection = "student";
const client = new MongoClient(url);
client.connect().then(() => {
  console.log("Connected to MongoDB");
});

async function dbConnection() {
  const db = client.db(database);
  const collectResult = db.collection(collection);
  const result = await collectResult.find().toArray();
  console.log(result);
}

dbConnection();

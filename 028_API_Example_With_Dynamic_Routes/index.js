import express from "express";
import userData from "./users.json" with { type: "json" };

const app = express();
const PORT = 3200;

// Default route to send full user list
app.get("/", (req, resp) => {
  resp.send(userData);
});

// Route to get user by ID
app.get("/user/:id", (req, resp) => {
  const id = req.params.id;
  const filteredData = userData.filter((user) => user.id == id);
  resp.send(filteredData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
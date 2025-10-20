import express from 'express'
import path from 'path'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.get("/", (req, resp) => {
    resp.sendFile(path.resolve("view/home.html"))
})


app.get("/login", (req, resp) => {
    resp.send(`
      <form action="/submit" method="post">
        <input type="email" name="email" placeholder="email" />
        <br></br>
        <input type="password" name="password" placeholder="Password" />
        <br></br>
        <button type="submit">Login</button>
      </form>
      `)
})

app.post("/submit", (req, resp) => {
    console.log(req.body)
    resp.send("submit Page")
})

app.get("/users", (req, resp) => {
    resp.send("User Page")
})

app.listen(3200);
import { name } from 'ejs';
import express from 'express'
const app = express();

app.set('view engine', 'ejs')
app.get("/", (req, resp) => {
    resp.render('home',{name: "Suman", age: 24});
})

app.listen(3200)
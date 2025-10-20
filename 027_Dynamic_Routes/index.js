import express from 'express'
const app = express();

app.get("/", (req, resp) => {
    const users = ["Alice", "Bob", "Charlie"];
    let data = `<ul>`;
    for(let i=0; i<users.length; i++) {
        data += `<li><a href="${users[i]}">${users[i]}</a></li>`;
    }    
    data += `</ul>`;
    resp.send(data);

})

app.get("/:name", (req, resp) => {
    const name = req.params.name;
    resp.send(`<h1>Hello, ${name}!</h1>`);
});

app.listen(3200)
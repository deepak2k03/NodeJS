const http = require('http');
const userForm = require('./userForm');
const userDataSubmit = require('./userDataSubmit');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url=="/"){
        userForm(req,res);
    }
    else if(req.url=="/submit"){
        userDataSubmit(req,res);
    }
    res.end();
}).listen(3000);
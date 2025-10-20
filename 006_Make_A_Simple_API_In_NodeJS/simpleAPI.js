const http = require('http');

const usersData=[
    {
        name:'anil',
        age:30,
        email:'anil@test.com'
    },
    {
        name:'sam',
        age:20,
        email:'sam@test.com'
    },
    {
        name:'peter',
        age:30,
        email:'peter@test.com'
    }
]

http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify(usersData));
    res.end();
}).listen(6001)
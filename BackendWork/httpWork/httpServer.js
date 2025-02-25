const http = require('http')
const port = 2020;

http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    if(req.url =="/hello"){
        res.end("<h2>Hello World</h2>");
    }
    else if(req.url =="/"){
        res.end("<h2>Welcome to ABES Engineering College</h2>");
    }
    else{
        res.end("<h2>404 Error BC</h2>");
    }
    
    
}).listen(port,()=>{
    console.log(`Server is running on ${port}`)
})




const http=require('http');
const fs=require('fs').promises;

const PORT = 3005
const server = http.createServer((req,res)=>{

    if(req.url=="/register" && req.method=="POST"){
        let body = '';

        req.on('data',chunk=>{
            body=body+" "+chunk
        })
        req.on('end',()=>{
            console.log(body);
        })
        res.end(JSON.stringify({msg:"User is Successfully Registered"}));
    }
})

server.listen(PORT,()=>{
    console.log("Server is running on :: ",PORT);
    
})
const { stat } = require('fs');
const http=require('http');
const fs=require('fs').promises;

const PORT = 3005
const server = http.createServer((req,res)=>{

    if(req.url=="/register" && req.method=="POST"){
        let body = '';
        let arr=[];

        req.on('data',chunk=>{
            body+=chunk
        })
        req.on('end',async()=>{
            const {name,email,password}=JSON.parse(body);
            console.log("Name= "+name);

            const data1 = await fs.readFile('student.json',{encoding:'utf-8'});
            arr=JSON.parse(data1);

            const status = arr.find(ele=>ele.email==email);
            console.log(status)
            if(status){
                return res.end(JSON.stringify({msg:"User's Email is Already Registered"}));
            }
            else{
                arr.push({name,email,password});
                fs.writeFile('student.json',JSON.stringify(arr));
                res.end(JSON.stringify({msg:"User is Successfully Registered"}));
            }
            

        })
        
    }
})

server.listen(PORT,()=>{
    console.log("Server is running on :: ",PORT);
    
})
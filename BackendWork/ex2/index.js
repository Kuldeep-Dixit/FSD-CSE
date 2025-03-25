const express = require('express');
const path = require("path")

const app = express();
const port = 3000;
const fs = require('fs');
// const path = require('path');

const User = [{id:101,name:"IIT"},{
    id:101,name:"NIT"
}]
// app.get('/',(req,res)=>{
//     console.log("data send by the user==",req.query.name)
//     res.send(`Welcome, ${req.query.name}`)
// })

// app.get('/home',(req,res)=>{
//     // res.send("This is our Home Page.")
//     res.sendFile(path.join("/Users/kuldeepdixit/Desktop/Coding/Web Development/FSD-CSE/BackendWork/ex2/index.html") )
// })
// app.get('/about',(req,res)=>{
//     // res.send("This is our About Page.")
//     // res.json(User)
//     // /Users/kuldeepdixit/Desktop/Coding/Web Development/FSD-CSE/BackendWork/Custom
//     console.log(path.join(__dirname,"index.html"));
//     res.sendFile(path.join("/Users/kuldeepdixit/Desktop/Coding/Web Development/FSD-CSE/BackendWork/ex2/about.html") )
// })
// app.get('/contact',(req,res)=>{
//     res.sendFile(path.join("/Users/kuldeepdixit/Desktop/Coding/Web Development/FSD-CSE/BackendWork/ex2/contact.html") )
// })

var name = document.querySelector('name').textContent;

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
    console.log(`Server is running on http://localhost:${port}`)
})
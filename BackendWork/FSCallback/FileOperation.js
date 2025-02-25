const { ifError } = require('assert');
const { error } = require('console');
const fs = require('fs');

function writeData(file,string){
        fs.writeFile(file,string,(err)=>{
            if(err){
                console.log("error during writting the file");
            }else{
                console.log("Data written Successfully")
            }
        });
}
function readData(path){
        var read = fs.readFile(path,{encoding:'utf-8'},(err,data)=>{
            if(err){
                console.log("error during reading the file");
            }
            else{
                console.log(data);
            }
        });
        return read;
        
}
function appendData(file,data){
        fs.appendFile(file,data, (err)=>{
            if(err){
                console.log("Error during appending in file "+err);
            }
            else{
                console.log("data appended successfully");
            }
        });
}
function deleteData(path){
    fs.unlink(path,(err)=>{
        if(err){
            console.log("Error during deleting in file "+err);
        }
        else{
            console.log("File Deleted Successfully");
        }
    })
}



module.exports={writeData,readData,appendData,deleteData};
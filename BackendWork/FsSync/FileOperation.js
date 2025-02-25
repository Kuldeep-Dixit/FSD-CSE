const fs = require('fs');

function writeData(file,string){
    try{
        fs.writeFileSync(file,string);
    console.log("Data is written Successfully");
    }catch(err){
        console.log("Error during writing in file "+err);
    }
    
}
function readData(path){
    try{
        var read = fs.readFileSync(path,{encoding:'utf-8'});
        return read;
    }catch(err){
        console.log("Error during reading in file "+err);
    }
}
function appendData(file,data){
    try{
        fs.appendFileSync(file,data);
        console.log("data appended successfully");
    }catch(err){
        console.log("Error during appending in file "+err);
    }
}
function deleteData(path){
    try{
        fs.unlinkSync(path);
    }
    catch(err){
        console.log("Error during deleting in file "+err);
    }
}



module.exports={writeData,readData,appendData,deleteData};
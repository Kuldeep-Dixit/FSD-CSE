const { write, read, readFile } = require('fs');

const fs = require('fs').promises;
 // Writting in File
 function writeData(path,data){
    fs.writeFile(path,data).then(()=>{
        console.log("Data written Successfully");  
    }).catch((err)=>{
        console.log("Error AA gyi BC")
    })
    // .finally(()=>{
    //     console.log("Resource Closed")
    // })
}


// Reading from File
//Method One
function readData(path){
    fs.readFile(path,"utf-8").catch((err)=>{
        console.log(err);
    })
    
}

// Method Two

async function readFilepromise(path){
    try{
        const data = await fs.readFile(path,'utf-8')
        return data
        
    }
    catch{
        console.log("Error BC")
    }
    // return data
}



module.exports={writeData,readData,readFilepromise}


// console.log(pd);
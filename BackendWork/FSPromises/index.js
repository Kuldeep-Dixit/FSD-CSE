// const { write } = require('node:fs')
// const { log } = require('console')
const {writeData,readData,readFilepromise} = require('./FileOperation')

let path = 'student.pdf'
let data = "CSE Student Data"

// writeData(path,data)
readData(path)
// readFilepromise(path).then((data)=>{
//     console.log(data);
    
// })
const {writeData,readData,appendData,deleteData} = require('./FileOperation')

var file='data.txt'
var data ="Welcome to NODE JS FS Module"
var app="\nthis is appended data";
writeData(file,data);
appendData(file,app)
console.log(readData(file))
deleteData(file)
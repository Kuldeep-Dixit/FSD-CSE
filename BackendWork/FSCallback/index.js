const {writeData,readData,appendData,deleteData} = require('./FileOperation')

var file='data.pdf'
var data ="Welcome to NODE JS FS Module"
var app="\nthis is appended data";
// writeData(file,data);
appendData(file,app)
readData(file)
// deleteData(file)
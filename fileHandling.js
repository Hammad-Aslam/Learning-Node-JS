// const fs = require('fs')

const os = require('os')
console.log(os.cpus().length);


// Create an Async file with text but note that it include the third paramter which is error.
// we cannot store this code into a variable because it is Async and also except error callback function.
// fs.writeFile('./AsyncWriteFile.txt','This is Async File store in variable', (err)=>{})


// Create an Sync file with text but note that it doesn't include the third paramter which is error.
// we can store this code into a variable because it is Sync.
// let a = fs.writeFileSync('./SyncFile.txt', 'This is Sync File')
// console.log(a);


// Read File Async.. with text but note that it include the third paramter which is error.
// we cannot store this code into a variable because it is ASync.
// fs.readFile('./AsyncWriteFile.txt', 'utf-8', (err, result)=>{
//     if(err){
//     console.log(err);
//     }
//     else{
//     console.log(result);
//     }
// })


// Read Sync file with text but note that it doesn't include the third paramter which is error.
// we can store this code into a variable because it is Sync.
// let a = fs.readFileSync('./SyncFile.txt', 'utf-8')
// console.log(a);



// Append the Data in File if don't used it the data is over write
// fs.appendFile('AsyncWriteFile.txt', new Date().getDate().toLocaleString(), (err, result)=>{
// if(err){
// console.log(err);
// }
// else{
// console.log(result);
// }})

// same as for Sync but don't except third argument

//cpySync -- copy the file

// unlinkSync -- delete the file


// this tells about all information of file
// console.log(fs.statSync('./SyncFile.txt').isFile());

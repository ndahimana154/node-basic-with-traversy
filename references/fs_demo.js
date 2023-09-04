const fs = require('fs')
const path = require('path')


// Create a folder
// fs.mkdir(path.join(__dirname,'/working'), {}, err => {
//     if(err) throw err;
//     console.log("Folder is created succcesfully");
// })


// Create a file
// fs.writeFile(path.join(__dirname, '/Working','Hello.txt'), "Hello what is this word?", err => {
//     if (err) throw err
//         console.log("File is create suc")
// })

// Read file
// fs.readFile(path.join(__dirname, 'working', 'Hello.txt'), 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });


// Rename file
fs.rename(path.join(__dirname, 'working', 'Hello.txt'), path.join(__dirname, 'working', 'Hi.txt'), (err) => {
    if (err) throw err;
    console.log("Renamed successfully");
  });
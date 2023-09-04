const path = require('path')

// Base filename
console.log(path.basename(__filename))


// Directory name
console.log(path.dirname(__filename))

// Extension
console.log(path.extname(__filename))

// Also the filename
console.log(path.parse(__filename).base)

// COncatenate paths
console.log(path.join(__dirname, 'test','testwhat?', 'hello.html'))
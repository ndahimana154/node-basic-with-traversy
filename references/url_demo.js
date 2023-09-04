const url = require('url')

const myUrl = new  URL('http:mywebsite.com/hello.html?id=100&status=active')


// Serialized URL 
console.log(myUrl.href)
console.log(myUrl.toString())

// Host(Root Main)
console.log(myUrl.host)
// Host name(doesn't get the port)
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)


// Serialized MediaQueryList
console.log(myUrl.search)

// Param object
console.log(myUrl.searchParams)


// Add parameters
myUrl.searchParams.append('name', 'ndahimana154');
console.log(myUrl.searchParams)

// 

console.log(myUrl.href)

// Loop through parameters
myUrl.searchParams.forEach((name, value) => console.log(`${name}, ${value}`))

// const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);
//Hostname (does not get port)
console.log(myUrl.hostname);
//port
console.log(myUrl.port);
//Serialized query
console.log(myUrl.search);
//params object
console.log(myUrl.searchParams);
//Add Param
myUrl.searchParams.append("abc","123");
//Loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name} : ${value}`));

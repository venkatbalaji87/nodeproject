# nodeproject
This is my first open source project

Basic Node Server Project
Node Project is an platform where u can able to see that how to create a http server and how to use yarn and nodemon

Following steps was covered :

Creating HTTP Server
how to export modules (i.e., how to write a function and reuse the same content again and again in other files)
how to write a function with try and catch
nodemon developer dependices used
how to get JSON Stringify and and get an output
Creating simple node server :
First use the require module to import the modules necessary for creating server
Then create server with request and response, with the necessary write funciton and listen function with port
Eg:
http.createServer((request,response)=> {
// if(request.url == “books”) {
// //do some action regarding books.
// }
//response.writeHead(200, {‘Content-Type’: ‘text/html’}); //Mime type
response.writeHead(200, {“Content-Type”: “application/json”});
//response.write(“Hello…”);
const queryObject = getQueryString(request.url);
//response.write(JSON.stringify({ status: “Success”}));
response.write(JSON.stringify(queryObject));
response.end();
}).listen(8080);
Module export
Write a indvidual module and use module.exports = function name

Eg:
const url = require(“url”); //module which is used commonly to other files
const getQueryString = urlString => {
try {
return url.parse(urlString, true).query
console.log(“test”);
} catch(e) {
console.error(e);
return {};
}
}
module.exports = getQueryString;
Use the Following commands :
yarn start
yarn nodemon ( To restart the server automatically)
To make automatic in # Package.json
give some conditon in scripts

//Require is a way to import all modules.

// req contains message , response  respond for the message
const http = require("http");
const getQueryString = require("./getQueryString");

//function
http.createServer((request,response)=> {
    // if(request.url == "books") {
    //     //do some action regarding books.
    // }
    //response.writeHead(200, {'Content-Type': 'text/html'}); //Mime type
    response.writeHead(200, {"Content-Type": "application/json"});
   //response.write("Hello..");
    const queryObject = getQueryString(request.url);
    //response.write(JSON.stringify({ status: "Success"}));
    response.write(JSON.stringify(queryObject));
    response.end();
}).listen(8080);

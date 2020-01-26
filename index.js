//Require is a way to import all modules.

// req contains message , response  respond for the message
const http = require("http");
const url = require("url");

//function
const getURLRequest = urlString => {
    try {
        return url.parse(urlString, true).query
    } catch(e) {
        console.error(e);
        return {};
    }
}

http.createServer((request,response)=> {
    // if(request.url == "books") {
    //     //do some action regarding books.
    // }
    //response.writeHead(200, {'Content-Type': 'text/html'}); //Mime type
    response.writeHead(200, {"Content-Type": "application/json"});
   //response.write("Hello..");
    const queryObject = getURLRequest(request.url);
    //response.write(JSON.stringify({ status: "Success"}));
    response.write(JSON.stringify(queryObject));
    response.end();
}).listen(9000);

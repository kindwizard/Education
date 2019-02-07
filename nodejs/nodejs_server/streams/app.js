const http = require("http");
const fs = require("fs");
 
http.createServer(function(request, response){
     
    if(request.url=="/some.docx"){
        response.writeHead(200, {"Content-Type" : "application/msword"});
        fs.createReadStream("some.docx").pipe(response);
    }
    else{
        response.end("hello world!");
    }
     
}).listen(3000);
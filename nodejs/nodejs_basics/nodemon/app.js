const http = require("http");
 
let message = "Привет мир! Здравствуйте!";
http.createServer(function(request,response){
     
	response.writeHead(200, {"Content-type": "text/plain; charset=utf-8;"})
    console.log(message);
    response.end(message);
     
}).listen(3000, "127.0.0.1",()=>{
    console.log("Сервер начал прослушивание запросов");
});
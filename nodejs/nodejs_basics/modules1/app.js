const http = require("http");
const os = require("os");
const greeting = require("./greeting");

http.createServer(function(request,response){
     
let userName = os.userInfo().username;
 
 
/* console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName)); */
 
    response.end(`Дата запроса: ${greeting.date}` + " " + greeting.getMessage(userName));
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});
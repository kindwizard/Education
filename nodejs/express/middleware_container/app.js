const express = require("express");
 
const app = express();
app.use(function(request, response, next){
     
    console.log("Middleware 1");
    next();
});
app.use("/about", function(request, response, next){
     
    console.log("Middleware 2");
    response.send("Middleware 2");
});
 
app.get("/", function(request, response){
     
    console.log("Route /");
    response.send("Hello");
});
app.listen(3000);
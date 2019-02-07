const express = require("express");
const app = express();
 
app.use("/ind",function (request, response) {
  response.sendFile(__dirname + "/ind.html");
});

app.use("/home",function (request, response) {
  response.statusCode = 404;
  response.send(`Ресурс не найден`);
});
 
app.listen(3000);
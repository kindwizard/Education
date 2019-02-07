// получаем модуль Express
const express = require("express");
// создаем приложение
const app = express();
 
// устанавливаем обработчик для маршрута "/"
app.get("/", function(request, response){
 
    response.end("Hello from Express!");
});

app.get("/about", function(request, response){
 
    response.end("NodeJS application!");
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000);
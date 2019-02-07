const fs = require("fs");
 
// асинхронное чтение
fs.readFile("file.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});
 
// синхронное чтение
console.log("Синхронное чтение файла")
let fileContent = fs.readFileSync("file.txt", "utf8");
console.log(fileContent);
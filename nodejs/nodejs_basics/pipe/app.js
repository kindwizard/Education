const fs = require("fs");
 
let readableStream = fs.createReadStream("hello.txt", "utf8");
 
let writeableStream = fs.createWriteStream("some2.txt");
 
readableStream.pipe(writeableStream);
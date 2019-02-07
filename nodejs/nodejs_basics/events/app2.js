const util = require("util");
const EventEmitter = require("events");
 
function User(){
}
util.inherits(User, EventEmitter);
 
let eventName = "greet";
User.prototype.sayHi = function(data){
    this.emit(eventName, data);
}
let user = new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName, function(data){
    console.log(data);
});
 
user.sayHi("Мне нужна твоя одежда...");
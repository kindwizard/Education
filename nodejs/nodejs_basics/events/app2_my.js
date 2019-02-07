const util = require("util");
const EventEmitter = require("events");
 let eventName = "greet";
function User(){
	this.sayHi = function(data){
		this.emit(eventName, data);
	}
}
util.inherits(User, EventEmitter);

let user = new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName, function(data){
    console.log(data);
});
 
user.sayHi("Мне нужна твоя одежда... мать твою");
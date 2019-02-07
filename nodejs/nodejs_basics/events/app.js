const Emitter = require("events");
let emitter = new Emitter();
let emitter2 = new Emitter();
let eventName = "greet";
emitter.on(eventName, function(){
    console.log("Hello all!");
});
 
emitter.on(eventName, function(){
    console.log("Привет!");
});
emitter2.on(eventName, function(data){
    console.log(data);
});
 
emitter.emit(eventName);
emitter2.emit(eventName, "Пока!");
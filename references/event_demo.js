const EventEmitter = require('events');
// const { EventEmitter } = require('stream');

//Create class
class MyEmitter extends EventEmitter{

}

//Init Object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on("event",()=>{
    console.log('Event Fired!');
});

//Init Event
myEmitter.emit("event");
myEmitter.emit("event");


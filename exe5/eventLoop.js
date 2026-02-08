// Exercise 5: Event Loop
// Write a program demonstrating the execution order of setTimeout, setImmediate,
// process.nextTick, and Promise callbacks.


function setTimeout(){
    setTimeout(()=>{                         //using setTimeout to execute the callback function after 2 seconds.
        console.log("this mess use setTimeout after 2 sec");
    },2000);
}

function setImmediate(){
    setImmediate(()=>{                         //using setImmediate to execute the callback function immediately fter the current loop.
        console.log("this mess use setImmediate after setImmediate");

    });
}

function processNextTick(){
    process.nextTick(()=>{               //using process.nextTick to execeute the callback function after the current operation complete but before the event loop continues.
        console.log("this mess use process.nextTick after process.nextRtick");
    });

}
function promise(){
    Promise.resolve().then(()=>{              //ussing promise.resolve to create a resolve promise and then using then to execute the callback function after the promise is resolve.
        console.log("this mess use promise after resolve the promise");
    });
}

module.exports={
    setTimeout,
    setImmediate,
    processNextTick,
    promise
}
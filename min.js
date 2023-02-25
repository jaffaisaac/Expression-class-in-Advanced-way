 const starting =document.getElementById('start')
 const moving = document.getElementById('move')
 const stopping = document.getElementById('stop')
 
 function CarFactory(car){
    return new car;
 }

 const Toyota = CarFactory( class{
    start(){
        console.log(`The car is ready to move to  the Destination`);
        document.body.append(starting);
        starting.innerText='The car is ready to move to  the Destination';
    }
    stop(){
        console.log(`The engine is shutting down`);
        document.body.appendChild(stopping).innerText =`The engine is shutting down`
       
    }
    move(){
        console.log(`The car is moving to desitination`);
        document.body.appendChild(moving).innerText =`he car is moving to desitination`;
        
    }

 });

 Toyota.start()
 Toyota.move()
 Toyota.stop();
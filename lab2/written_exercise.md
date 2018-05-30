1. setTimeout schedules a callback to run after a specific time, 
   the functions are registered in the timers phase of the event loop
   but setImmediate will schedule a callback to run at check phase 
   of the event loop after IO events'callbacks. So setImmediate has a 
   higher probability to execute before setTimeout it's why we want sometimes
   to use setImmediate instead of using setTimeout.
   
2. process.nextTick() is not part of event loop, it adds the callback into the nextTick queue 
   but setImmediate() is the part of event loop and schedule a callback to run at check phase.
   All callback functions in the nextTick queue are executed before the callback functions of event loop queue.
   process.nextTick() is always processed before processing setImmediate(). 
   
   
3. 10 modules that Node provides by default:
     1- global
	 2- module
	 3- process
	 4- buffer
	 5- console
	 6- require()
	 7- clearInterval()
	 8- setImmediate()
	 9- setTimeout()
	 10- setInterval()
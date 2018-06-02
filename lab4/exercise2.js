const os = require('os');
const {Observable} = require('rxjs');

function checkSystem(){
    console.log("Checking your system...");
    const checkMemory = new Promise(function(resolve, reject){
        if(os.freemem()<2147483648){
           reject("This app needs at least 2 GB of RAM.");
        }
        else{
            resolve("System is checked successfully.")
        }
    });
    const checkProcessor = new Promise(function(resolve, reject){
        if(os.cpus().length < 2){
            reject("Processor is not supported.");
        }
        else{
            resolve("System is checked successfully.")
        }
    });
    Promise.all([checkMemory, checkProcessor])
           .then((data)=>{console.log(data[0]);})
           .catch(err=>{console.error(err);});
}
checkSystem();

Observable.create(observer=>{
    observer.next("Checking your system...");
    if(os.freemem()<2147483648){
        observer.next("This app needs at least 2 GB of RAM.");
     }
    else if(os.cpus().length < 2){
        observer.next("Processor is not supported.");
    }
    else{
        observer.next("System is checked successfully.");
    }
}).subscribe(message=>console.log(message));
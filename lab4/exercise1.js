const {Subject}=require('rxjs');
const url=require('url');
const {fork}=require('child_process');

const subject = new Subject();

subject.subscribe(function(param){
    if(param.filestream==='end'){
        param.res.statusCode = 200;
        param.res.end();  
    }
    else{
        param.res.write(param.filestream);
    }
    
});

const http=require('http');
let filestream='';
http.createServer((req, res)=>{
    const url_parts = url.parse(req.url, true);
    const query = url_parts.query;

    const childProcess = fork('./exercise1ChildProcess.js');
    childProcess.send(query.url);
    childProcess.on('message', stream=>{
        
            if(stream==='end'){
                console.log('Killing child process');
                childProcess.kill();
            }
            subject.next({req: req, res: res, filestream:stream});
    });    
}).listen(4000, 'localhost');
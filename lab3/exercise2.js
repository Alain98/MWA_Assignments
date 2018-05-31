let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
	fs.createReadStream("./Snake_River.jpg").pipe(res);
}).listen(5000, '127.0.0.1');

http.createServer(function (req, res) {
    
	res.writeHead(200, {'Content-Type': 'image/jpeg'});
    
	let image = fs.readFileSync(__dirname + './Snake_River.jpg');
    
	res.end(image);

}).listen(6000, '127.0.0.1');

http.createServer(function (req, res) {
	fs.readFile('./Snake_River.jpg', function(err, image){
	   if(err) throw err;
	   res.end(image);
	});
	res.end(image);
}).listen(7000, '127.0.0.1');
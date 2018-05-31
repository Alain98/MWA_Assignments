let fs = require('fs');
let zlib = require('zlib');
let path = require('path');

let gzip = zlib.createGzip();
let gunzip = zlib.createGunzip();

let readable1 = fs.createReadStream(path.join(__dirname,'/testZip.txt'));

let compressed = fs.createWriteStream(path.join(__dirname,'/testZip.txt.gz'));

readable1.pipe(gzip).pipe(compressed);

let readable2 = fs.createReadStream(path.join(__dirname,'/testUnzip.txt.gz'));

let decompressed = fs.createWriteStream(path.join(__dirname,'/testUnzip.txt'));

readable2.pipe(gunzip).pipe(decompressed);
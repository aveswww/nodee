
var http = require('http');
var fs = require('fs');
http.createServer(function(req, odpowiedzSerwera){
odpowiedzSerwera.writeHead(200, {'content-type': 'text/plain'});
var html = fs.readFileSync('./cw1.js');
odpowiedzSerwera.end(html);
}).listen(3000);
console.log('Serwer uruchomiony...');

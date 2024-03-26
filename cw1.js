//kopiowanie za pomoca strumienia
///pipe - laczy dwa strumienia

var fs = require('fs');
var readable = fs.createWriteStream('./data.txt');
var writeable = fs.createWriteStream('./data_kopia.txt');

readable.pipe(writeable)




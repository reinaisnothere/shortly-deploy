var app = require('./server-config.js');

var port = 8000;
console.log(port);

app.listen(port);

console.log('Server now listening on port ' + port);
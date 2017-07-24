var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.use(express.static('client/build'));

io.on('connection', function(socket) {
  socket.on('chat', (question) => {
    console.log( question, " from question" )
    io.sockets.emit('chat', question)
  }) 
  // socket.on('chat', (answer) => {
  //   console.log( answer, " from answer" )
  //   io.sockets.emit('chat', answer)
  // })
})

var server = http.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

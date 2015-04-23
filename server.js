var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path             = require('path');



app.use( express.static( path.join( __dirname, 'public' )));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(incomingMsg){
  	console.log("Server got a message! ", incomingMsg);
  	if (incomingMsg === 'marco') {
  		io.emit('chat message', 'polo');
  	}
  });
});

http.listen(9999, function(){
  console.log('listening on *:9999');
});













//var application_root = __dirname,
//    express 		 = require('express'),
//    app 			 = express(),
//	http 			 = require('http').Server(app),
//	io 				 = require('socket.io')(http),
//    bodyParser       = require('body-parser'),
//    path             = require('path'),
//    logger           = require('morgan'),
//    models           = require('./models');
//
////start socket
//
//io.on('connection', function(socket){
//  console.log('a user connected');
//});
//
//
//// Server Configuration
//app.use(logger('dev'));
//app.use( bodyParser() );
//app.use( express.static( path.join( application_root, 'public' )))
//app.use( express.static( path.join( application_root, 'browser' )))
//
//// Routes
//
//
//
//
//// Export app as module
////module.exports = app;
//
//app.listen(9888, function() {
//  console.log('Express server listening on port 9888' );
//});//
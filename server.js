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
  	if (incomingMsg.indexOf("INIT") != -1) {
  		if (incomingMsg.indexOf("Quotebot") != -1){
  			console.log("QUOTEBOT REQUESTED")
  			var bot = require('child_process').spawn(__dirname + '/node_modules/bot/bin/bot', {stdio: ['pipe', 'pipe', 'pipe']});
			bot.stdin.setEncoding = 'utf-8'; 
			bot.stdout.setEncoding = 'utf-8';
			socket.on('chat message', function(myMsg){
  			bot.stdin.write(myMsg + '\n');
    		console.log("I sent the bot a message: ", myMsg);
    		//io.emit('chat message', myMsg);
	});
  
  	bot.stdout.on('data', function(botMsg){
    	botMsg = botMsg.toString();
    	if (botMsg.indexOf('[36') != -1 ) {
    		console.log("{36 found!");
    		var ending = botMsg.lastIndexOf('[35');
    		console.log("Ending: ", ending)
    		botMsg = botMsg.substring(15);
    		console.log("the bot said: ", botMsg);
    		io.emit('chat message', botMsg);
    		}
 		});
  		}
  	}
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
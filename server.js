var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var RiveScript = require('rivescript');
var path             = require('path');



app.use( express.static( path.join( __dirname, 'public' )));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(incomingMsg){
  	console.log("Server got a message! ", incomingMsg);
  	if (incomingMsg.indexOf("INIT") != -1) {
  		if (incomingMsg.indexOf("Quotebot") != -1){
  			console.log("QUOTEBOT REQUESTED");
  			var quotebot = require('child_process').spawn(__dirname + '/node_modules/bot/bin/bot', {stdio: ['pipe', 'pipe', 'pipe']});
			quotebot.stdin.setEncoding = 'utf-8'; 
			quotebot.stdout.setEncoding = 'utf-8';
			socket.on('chat message', function(myMsg){
  			quotebot.stdin.write(myMsg + '\n');
    		console.log("I sent the bot a message: ", myMsg);
    		//io.emit('chat message', myMsg);
		});
  
  		quotebot.stdout.on('data', function(botMsg){
    	botMsg = botMsg.toString();
    	if (botMsg.indexOf('[36') != -1 ) {
    		console.log("{36 found!");
    		var ending = botMsg.lastIndexOf('[35');
    		console.log("Ending: ", ending)
        if (ending != -1) {
          botMsg = botMsg.substring(0, ending);
        }
    		botMsg = botMsg.substring(15);
    		console.log("the bot said: ", botMsg);
    		io.emit('quotebot message', botMsg);
    		}
 		});
  		} else if (incomingMsg.indexOf("Alice") != -1){
  			console.log("ALICE REQUESTED!");
  			var alicebot = new RiveScript();
  			alicebot.loadDirectory("./robot_data/alice_rivescript", loading_done, loading_error);
  			function loading_error(err){
  				console.log("ERROR JACK: ", err);
  			} 
  			function loading_done(){
          console.log("Alice loading done!")
  				alicebot.sortReplies();
  				socket.on('chat message', function(myMsg){
  					io.emit('alice message', alicebot.reply('User', myMsg) )
  				});
  			}

  		}
  	}
  	if (incomingMsg === 'marco') {
  		io.emit('bot message', 'polo');
  	}
  });
});

var port = process.env.PORT || 5000;

http.listen(port, function(){
  console.log('listening on *: ', port);
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
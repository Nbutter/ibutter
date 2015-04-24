var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	User: {
		name: 'Bruce Wilcox'
	},
	currentRobot: 'no robot selected',
	socket: {}
};

$(function() {
	console.log('app.js is loaded');
	App.mainRouter = new App.Routers.Main();
	App.mainView = new App.Views.Main();
	Backbone.history.start({root:''});  //pushState: true
	console.log("history started");
	App.socket = io();
	
	App.socket.on('quotebot message', function(botMsg){
		if (App.currentRobot === 'Quotebot'){
			var botPrompt = App.currentRobot + ": ";
    	$('#messages').append($('<li>').text(botPrompt + botMsg));
    }
  	});
	
	App.socket.on('alice message', function(botMsg){
		if (App.currentRobot === 'Alice') {var botPrompt = App.currentRobot + ": ";
    	var junkIndex = botMsg.indexOf('<');
    	botMsg = botMsg.substring(0, junkIndex);
    	$('#messages').append($('<li>').text(botPrompt + botMsg));
    }
  	});
});
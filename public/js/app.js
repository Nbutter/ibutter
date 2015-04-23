var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	User: {
		name: 'Bruce Wilcox'
	},
	currentRobot: 'no robot selected'
};

$(function() {
	console.log('app.js is loaded');
	App.mainRouter = new App.Routers.Main();
	App.mainView = new App.Views.Main();
	Backbone.history.start({root:''});  //pushState: true
	console.log("history started");
	App.socket = io();
	App.socket.on('chat message', function(botMsg){
		var botPrompt = App.currentRobot + ": ";
    		$('#messages').append($('<li>').text(botPrompt + botMsg));
  		});

});
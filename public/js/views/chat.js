console.log("I'M LOADED");

App.Views.Chat = Backbone.View.extend({

	initialize: function(){
		App.currentRobot = 'No robot selected';
	},

	events: {
		'click #chat-submit' : 'chat',
		'keypress #m' : 'keypress'
	},

	setRobot: function(robot){
		App.currentRobot = robot;
		console.log("chat view's robot is: " + robot)
	},

	render: function(){
		var template = Handlebars.compile( $("#chat-template").html() );
		this.$el.html(template({robot: App.currentRobot}));
		App.socket.emit('chat message', 'INIT ' + App.currentRobot);
	},

	chat: function(){
		var myMsg = $('#m').val();
		var myPrompt = App.User.name + ": ";
		App.socket.emit('chat message', myMsg);
		$('#messages').append($('<li>').text(myPrompt + myMsg));
		$('#m').val('');
		return false;
	},
	keypress: function(e){
		if (e.keyCode == 13) {
			e.preventDefault();
			this.chat();
		}
	}



});
console.log("I'M LOADED");

App.Views.Chat = Backbone.View.extend({

	initialize: function(){
		this.robot = 'No robot selected';
	},

	events: {
		'click #chat-submit' : 'chat'
	},

	setRobot: function(robot){
		this.robot = robot;
		console.log("chat view's robot is: " + robot)
	},

	render: function(){
		var template = Handlebars.compile( $("#chat-template").html() );
		this.$el.html(template({robot: this.robot}));
	},

	chat: function(){
		var myMsg = $('#m').val();
		var myPrompt = App.User.name + ": ";
		App.socket.emit('chat message', myMsg);
		$('#messages').append($('<li>').text(myPrompt + myMsg));
		$('#m').val('');
		return false;
	}


});
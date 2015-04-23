console.log("I'M LOADED");

App.Views.Chat = Backbone.View.extend({

	initialize: function(){
		this.robot = 'No robot selected';
	},

	setRobot: function(robot){
		this.robot = robot;
		console.log("chat view's robot is: " + robot)
	},

	render: function(){
		var template = Handlebars.compile( $("#chat-template").html() );
		this.$el.html(template({robot: this.robot}));
	}

});
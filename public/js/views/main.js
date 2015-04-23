
App.Views.Main = Backbone.View.extend({

	el: $("#main-container"),

	initialize: function(){
		App.loginView = new App.Views.Login();
		App.selectView = new App.Views.Select();
		App.chatView = new App.Views.Chat();
		this.show(App.loginView);
	},

	show: function(view){
		console.log("show hit with a view: ", view)
		this.$el.empty();
		view.render();
		this.$el.append(view.$el);
	},

	events: {
		"click .robot-name-button" : "chat", 
		"click #login-submit" : "login",
		"click .back" : "back"

	},

	login: function(){
		// we need to get values from the form, submit them, handle errors, etc etc
		// for now, here's a direct link
		App.User.name = $( "[name='username']").val();
		App.mainRouter.navigate('#select', {trigger: true});

	},

	chat: function(event){
		var robot = event.currentTarget.attributes[2].nodeValue
		console.log("You want to chat with " + robot);
		App.mainRouter.navigate('#chat/' + robot, {trigger: true});
	},

	back: function(){
		console.log("I don't know how to go back!");
	}


});
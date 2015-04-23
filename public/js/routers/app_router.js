App.Routers.Main = Backbone.Router.extend({
	initialize: function(){
		console.log("router up");
	},
	routes: {
		"login": 	function(){
			App.mainView.show(App.loginView);
		},
		"select": 	function(){
			App.mainView.show(App.selectView);
		},

		"chat/:robot": 	function(robot){
			console.log("CHAT ROUTE HIT")
			console.log("ROBOT REQUESTED: " + robot)
			App.chatView.setRobot(robot);
			App.mainView.show(App.chatView);
			App.chatView

		},
		"logs": 	function(){
			console.log( "LOGS ROUTE HIT" );
		}

	}

});
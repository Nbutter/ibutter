App.Routers.Main = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start({pushState: true});
		console.log("router up and history started");
	},
	routes: {
		"login": 	function(){
			App.mainView.show(App.selectView);
		},
		"select": 	function(){
			console.log( "SELECT ROUTE HIT" );
		},
		"chat/:robot": 	function(robot){
			console.log( "CHAT ROUTE HIT, CHAT WITH " + robot + "REQUESTED" );
		},
		"logs": 	function(){
			console.log( "LOGS ROUTE HIT" );
		}

	}

});
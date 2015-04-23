var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function() {
	console.log('app.js is loaded');
	App.mainRouter = new App.Routers.Main();
	App.mainView = new App.Views.Main();
	Backbone.history.start({pushState: true, root:''});
	console.log("history started");
});
App.Views.Login = Backbone.View.extend({

	render: function(){
		var template = Handlebars.compile( $("#login-template").html() );
		this.$el.html(template());
	}

});
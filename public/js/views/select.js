
App.Views.Select = Backbone.View.extend({

		render: function(){
		var template = Handlebars.compile( $("#select-template").html() );
		this.$el.html(template());
	}


});
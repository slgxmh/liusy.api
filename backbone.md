var UserList = Backbone.Collection.extend({
		model : User,
		url : BASEURL+"/user", //注释二
	});
	
	
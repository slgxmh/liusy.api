
var messageListViewService = {
	url : constant.API_MESSAGE + "list",
	lock : false,
	request : function(data, options) {
		var self = this; 
		if (self.lock) {
			self.trigger("error", "Request alreay running. Please wait");
			return;
		}
		
	        
		$.ajax({
			url : self.url,
			type : 'POST',
			data : data,
			dataType : 'json',
			contentType : "application/json",
			success : function(data) {
				console.log(data)
				self.lock = false;
				data.status == 0 ? options.success(data) : options.error(data);// 接口正常和异常处理
			},
			error : function(e, err) {
				self.lock = false
				option.error(err);
			}
		});

	}
};
_.extend(messageListViewService, Backbone.Events);

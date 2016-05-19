
/*
 * url 意见反馈列表查询(DGB)
 * 
*/ 
var feedbackListDGBService = {
    url : constant.INTERFACE_FEEDBACKLIST_DGB,
    lock : false,
    request : function(data, option) {
        console.log("用户信息 service~~~~"+JSON.stringify(data));
        var self = this;
        if (self.lock) {
            return;
        }
        self.lock = true;
        $.ajax({
            url : self.url,
            type : 'POST',
            data : data,
            dataType : 'json',
            contentType: "application/json",
            success : function(data) {
                self.lock = false;
                data.status==0?option.success(data):option.error(data);//接口正常和异常处理
            },
            error : function(e, err) {
                self.lock = false
                option.error(err);
            }
        });
    }
};
_.extend(feedbackListDGBService, Backbone.Events);



/*
 * url 意见反馈删除 (DGB)
 * 
 */
var feedbackDelDGBService = {
    url : constant.INTERFACE_FEEDBACKDEL_DGB,
    lock : false,
    request : function(data, option) {
        var self = this;
        if (self.lock) {
            return;
        }
        self.lock = true;
        $.ajax({
            url : self.url,
            type : 'POST',
            data : data,
            dataType : 'json',
            contentType: "application/json",
            success : function(data) {
                self.lock = false;
                data.status==0?option.success(data):option.error(data);//接口正常和异常处理
            },
            error : function(e, err) {
                self.lock = false
                option.error(err);
            }
        });
    }
};
_.extend(feedbackDelDGBService, Backbone.Events);




/*
 * url 意见反馈添加 (DGB)
 * 
 
var feedbackAddDGBService = {
    url : constant.INTERFACE_FEEDBACKADD_DGB,
    lock : false,
    request : function(data, option) {
        var self = this;
        if (self.lock) {
            return;
        }
        self.lock = true;
        $.ajax({
            url : self.url,
            type : 'POST',
            data : data,
            dataType : 'json',
            contentType: "application/json",
            success : function(data) {
                self.lock = false;
                data.status==0?option.success(data):option.error(data);//接口正常和异常处理
            },
            error : function(e, err) {
                self.lock = false
                option.error(err);
            }
        });
    }
};
_.extend(feedbackAddDGBService, Backbone.Events);*/

/*
 * url h5后台管理注销接口地址
 * 
 */
var indexDataH5Service = {
    url : constant.INTERFACE_SALEDATA_H5,
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
_.extend(indexDataH5Service, Backbone.Events);
/*
 * url DGB后台管理注销接口地址
 * 
 */
var indexDataDGBService = {
    url : constant.INTERFACE_SALEDATA_DGB,
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
                console.log(data)
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
_.extend(indexDataDGBService, Backbone.Events);
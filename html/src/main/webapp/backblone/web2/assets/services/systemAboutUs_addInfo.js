
/*
 * url 关于我们信息添加接口(H5)
 * 
 */
var aboutUsAddH5Service = {
    url : constant.INTERFACE_ABOUTUSADD_H5,
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
_.extend(aboutUsAddH5Service, Backbone.Events);


/*
 * url 关于我们信息编辑接口(H5)
 * 
 */
var aboutUsEditH5Service = {
    url : constant.INTERFACE_ABOUTUSEDIT_H5,
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
_.extend(aboutUsEditH5Service, Backbone.Events);


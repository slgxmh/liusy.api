/*
 * url 用户信息查询接口(DGB)
 * 
 */
var userInfoDGBService = {
    url : constant.INTERFACE_USERINFO_DGB,
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
_.extend(userInfoDGBService, Backbone.Events);

/*
 * url userInfoH5Service 用户信息查询接口(H5)
 * 
*/ 
var userInfoH5Service = {
    url : constant.INTERFACE_USERINFO_H5,
    lock : false,
    request : function(data, option) {
        //console.log("用户信息 service~~~~"+data);
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
_.extend(userInfoH5Service, Backbone.Events);


/*
 * url userAddDGB 用户信息添加接口(DGB)
 * 
 */
var userAddDGBService = {
    url : constant.INTERFACE_USERADD_DGB,
    lock : false,
    request : function(data, option) {
        //console.log("ServiceData@@@"+JSON.stringify(data));
        //return;
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
                //console.log(data);
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
_.extend(userAddDGBService, Backbone.Events);

/*
 * url userAddH5 用户信息添加接口(H5)
 * 
 */
var userAddH5Service = {
    url : constant.INTERFACE_USERADD_H5,
    lock : false,
    request : function(data, option) {
        //console.log("ServiceData@@@"+JSON.stringify(data));
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
                //console.log(data);
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
_.extend(userAddH5Service, Backbone.Events);





/*
 * url passwordResetDGB 密码重置默认接口(DGB)
 * 
 */
var passwordResetDGBService = {
    url : constant.INTERFACE_PASSWORDRESET_DGB,
    lock : false,
    request : function(data, option) {
        //console.log("ServiceData@@@"+JSON.stringify(data));
        //return;
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
                //console.log(data);
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
_.extend(passwordResetDGBService, Backbone.Events);

/*
 * url passwordResetDGB 密码重置默认接口(DGB)
 * 
 */
var passwordResetH5Service = {
    url : constant.INTERFACE_PASSWORDRESET_H5,
    lock : false,
    request : function(data, option) {
        //console.log("ServiceData@@@"+JSON.stringify(data));
        //return;
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
                //console.log(data);
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
_.extend(passwordResetH5Service, Backbone.Events);







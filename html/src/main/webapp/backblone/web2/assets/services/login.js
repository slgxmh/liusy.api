/*
 * 修改内容如下
 * simulate 置为false，请求外部数据
 * reqData 请求数据
 * resData 返回数据
 * url H5后台登录接口地址
 * IP:port/appid/sid/
 */
var loginH5Service = {
    url : constant.INTERFACE_LOGIN_H5,
    lock : false,
    request : function(data, option) {
        var self = this;
        if (self.lock) {
            return;
        }        
        self.lock = true;
        $.ajax({
            url : constant.INTERFACE_INIT_H5,
            type : 'GET',
            data : "",
            contentType: "application/json",
            dataType : 'json',
            success : function(data222) {
                self.lock = false;
                localStorage["sid"] = data222.sid;
                if(data222.status==0){
                    self.lock = true;
                    var loginUrl = baseIp_H5+appId+"/"+localStorage["sid"]+"/"+"user/loginH5";
                    $.ajax({
                        url : loginUrl,
                        type : 'POST',
                        data : data,
                        contentType: "application/json",
                        dataType : 'json',
                        success : function(data) {
                            self.lock = false;
                            data.status==0?option.success(data):option.error(data);//接口正常和异常处理                            
                        },
                        error : function(e, err) {
                            self.lock = false
                            option.error(err);
                        }
                    });
                }else{
                    
                }
            },
            error : function(e, err) {
                self.lock = false
                option.error(err);
            }
        });
        
    }
    
};
_.extend(loginH5Service, Backbone.Events);

/*
 * url 导购宝后台管理登录接口地址
 * 
 */
var loginDGBService = {
    url : constant.INTERFACE_LOGIN_DGB,
    lock : false,
    request : function(data, option) {
        var self = this;
        if (self.lock) {
            return;
        }
        self.lock = true;        

        $.ajax({
            url : constant.INTERFACE_INIT_DGB,
            type : 'GET',
            data : "",
            contentType: "application/json",
            dataType : 'json',
            success : function(data222) {
                self.lock = false;
                if(data222.status==0){
                    self.lock = true;
                    $.ajax({
                        url : self.url,
                        type : 'POST',
                        data : data,
                        contentType: "application/json",
                        dataType : 'json',
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
                //data.status==0?option.success(data):option.error(data);//接口正常和异常处理
            },
            error : function(e, err) {
                self.lock = false
                option.error(err);
            }
        });
    }
    
};
_.extend(loginDGBService, Backbone.Events);

/*
 * url H5后台管理注销接口地址
 * 
 */
var loginoutH5Service = {
    url : constant.INTERFACE_LOGINOUT_H5,
    lock : false,
    request : function(data, option) {
        var self = this;
        if (self.lock) {
            return;
        }
        self.lock = true;
        $.ajax({
            url : self.url,
            type : 'GET',
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
_.extend(loginoutH5Service, Backbone.Events);

/*
 * url DGB后台管理注销接口地址
 * 
 */
var loginoutDGBService = {
    url : constant.INTERFACE_LOGINOUT_DGB,
    lock : false,
    request : function(data, option) {
        var self = this;
        if (self.lock) {
            return;
        }
        self.lock = true;        
        $.ajax({
            url : self.url,
            type : 'GET',
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
_.extend(loginoutDGBService, Backbone.Events);

/*
 * url H5后台管理注销接口地址
 * 
 */
var psdEditH5Service = {
    url : constant.INTERFACE_PASSWORDEDIT_H5,
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
_.extend(psdEditH5Service, Backbone.Events);

/*
 * url DGB后台管理注销接口地址
 * 
 */
var psdEditDGBService = {
    url : constant.INTERFACE_PASSWORDEDIT_DGB,
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
_.extend(psdEditDGBService, Backbone.Events);

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


/*
 * url h5后台管理注销接口地址
 * 
 */
var classifyImportH5Service = {
    url : constant.INTERFACE_CLASSIFYEXPORT_H5,
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
_.extend(classifyImportH5Service, Backbone.Events);
/*
 * url DGB后台管理注销接口地址
 * 
 */
var classifyImportDGBService = {
    url : constant.INTERFACE_CLASSIFYEXPORT_DGB,
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
_.extend(classifyImportDGBService, Backbone.Events);

/*
 * url h5后台管理注销接口地址
 * 
 */
var goodsStatusImportH5Service = {
    url : constant.INTERFACE_GOODSSTATUSEXPORT_H5,
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
_.extend(goodsStatusImportH5Service, Backbone.Events);
/*
 * url DGB后台管理注销接口地址
 * 
 */
var goodsStatusImportDGBService = {
    url : constant.INTERFACE_GOODSSTATUSEXPORT_DGB,
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
_.extend(goodsStatusImportDGBService, Backbone.Events);

/*
 * url h5后台管理注销接口地址
 * 
 */
var unshelveImportH5Service = {
    url : constant.INTERFACE_UNSHELVEEXPORT_H5,
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
_.extend(unshelveImportH5Service, Backbone.Events);
/*
 * url DGB后台管理注销接口地址
 * 
 */
var unshelveImportDGBService = {
    url : constant.INTERFACE_UNSHELVEEXPORT_DGB,
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
_.extend(unshelveImportDGBService, Backbone.Events);

/*
 * url h5后台管理注销接口地址
 * 
 */
var discountImportH5Service = {
    url : constant.INTERFACE_DISCOUNTEXPORT_H5,
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
_.extend(discountImportH5Service, Backbone.Events);
/*
 * url DGB后台管理注销接口地址
 * 
 */
var discountImportDGBService = {
    url : constant.INTERFACE_DISCOUNTEXPORT_DGB,
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
_.extend(discountImportDGBService, Backbone.Events);
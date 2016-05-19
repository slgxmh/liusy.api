/*
 * url userInfoListDGB 用户信息列表查询接口(DGB)
 * 
 */
var userInfoListDGBService = {
    url : constant.INTERFACE_USERINFOLIST_DGB,
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
_.extend(userInfoListDGBService, Backbone.Events);


/*
 * url userInfoListH5 用户信息列表查询接口(H5)
 * 
 */
var userInfoListH5Service = {
    url : constant.INTERFACE_USERINFOLIST_H5,
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
_.extend(userInfoListH5Service, Backbone.Events);




/*
 * url userExcelDGB 用户信息导出接口(DGB)
 * 
 */
var userExcelDGBService = {
    url : constant.INTERFACE_USEREXCEL_DGB,
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
_.extend(userExcelDGBService, Backbone.Events);

/*
 * url userExcelH5 用户信息导出接口(H5)
 * 
 */
var userExcelH5Service = {
    url : constant.INTERFACE_USEREXCEL_H5,
    lock : false,
    request : function(data, option) {
        console.log("ServiceData@@@DEL"+JSON.stringify(data));
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
_.extend(userExcelH5Service, Backbone.Events);




/*
 * url userDelDGB 用户信息删除接口(DGB)
 * 
 */
var userDelDGBService = {
    url : constant.INTERFACE_USERDEL_DGB,
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
_.extend(userDelDGBService, Backbone.Events);

/*
 * url userDelH5 用户信息删除接口(H5)
 * 
 */
var userDelH5Service = {
    url : constant.INTERFACE_USERDEL_H5,
    lock : false,
    request : function(data, option) {
        console.log("ServiceData@@@del"+JSON.stringify(data));
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
_.extend(userDelH5Service, Backbone.Events);











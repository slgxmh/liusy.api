/*
 *1、 url 添加普通教程接口(DGB)
 * 
*/ 
var addNorCourseDGBService = {
    url : constant.INTERFACE_ADDNORCOURSE_DGB,
    lock : false,
    request : function(data, option) {
        //console.log("用户信息 service~~~~"+JSON.stringify(data));
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
_.extend(addNorCourseDGBService, Backbone.Events);




/*
 *2、 url 添加组图教程接口(DGB)
 * 
*/ 
var addPicCourseDGBService = {
    url : constant.INTERFACE_ADDPICCOURSE_DGB,
    lock : false,
    request : function(data, option) {
        //console.log("用户信息 service~~~~"+JSON.stringify(data));
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
_.extend(addPicCourseDGBService, Backbone.Events);






/*
 *3、 url 教程列表查询接口(DGB)
 * 
*/ 
var courseListDGBService = {
    url : constant.INTERFACE_COURSELIST_DGB,
    lock : false,
    request : function(data, option) {
        //console.log("用户信息 service~~~~"+JSON.stringify(data));
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
_.extend(courseListDGBService, Backbone.Events);



/*
 *4、 url 教程信息删除接口(DGB)
 * 
*/ 
var courseDelDGBService = {
    url : constant.INTERFACE_COURSEDEL_DGB,
    lock : false,
    request : function(data, option) {
        //console.log("用户信息 service~~~~"+JSON.stringify(data));
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
_.extend(courseDelDGBService, Backbone.Events);




/*
 *5、 url 教程信息显示接口(DGB)
 * 
*/ 
var courseDetailDGBService = {
    url : constant.INTERFACE_COURSEDETAIL_DGB,
    lock : false,
    request : function(data, option) {
        //console.log("用户信息 service~~~~"+JSON.stringify(data));
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
_.extend(courseDetailDGBService, Backbone.Events);




/*
 *6、 url 教程信息隐藏接口(DGB)
 * 
*/ 
var courseStatusEditDGBService = {
    url : constant.INTERFACE_COURSESTATUDEDIT_DGB,
    lock : false,
    request : function(data, option) {
        //console.log("用户信息 service~~~~"+JSON.stringify(data));
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
_.extend(courseStatusEditDGBService, Backbone.Events);





/*
 *7、 url 教程分类列表查询接口(DGB)
 * 
*/ 
var courseClassifyListDGBService = {
    url : constant.INTERFACE_COURSECLASSIFYLIST_DGB,
    lock : false,
    request : function(data, option) {
        console.log("教程分类列表service~~~~"+JSON.stringify(data));
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
_.extend(courseClassifyListDGBService, Backbone.Events);





/*
 *8、 url 教程分类添加接口(DGB)
 * 
*/ 
var courseClassifyAddDGBService = {
    url : constant.INTERFACE_COURSECLASSIFYADD_DGB,
    lock : false,
    request : function(data, option) {
        //console.log("用户信息 service~~~~"+JSON.stringify(data));
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
_.extend(courseClassifyAddDGBService, Backbone.Events);




/*
 *9、 url 教程分类删除接口(DGB)
 * 
*/ 
var courseClassifyDelDGBService = {
    url : constant.INTERFACE_COURSECLASSIFYDEL_DGB,
    lock : false,
    request : function(data, option) {
        //console.log("用户信息 service~~~~"+JSON.stringify(data));
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
_.extend(courseClassifyDelDGBService, Backbone.Events);




/*
 *10、 url 教程分类编辑接口(DGB)
 * 
*/ 
var courseClassifyEditDGBService = {
    url : constant.INTERFACE_COURSECLASSIFYEDIT_DGB,
    lock : false,
    request : function(data, option) {
        //console.log("用户信息 service~~~~"+JSON.stringify(data));
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
_.extend(courseClassifyEditDGBService, Backbone.Events);

















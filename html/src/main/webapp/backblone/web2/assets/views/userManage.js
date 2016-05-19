var userManageListTableTemplate = loadTemplate("assets/templates/staff/userManage.html");
//1 、用户列表(初始加载、分页、查询)view;
var userManageView = Backbone.View.extend({//options...
    initialize : function() {
        this.stickit();
    },
    el : '#userManage',
    // listInfo : '#listInfo',
    bindings : {
        "#searchName" : {
            observe:"realName",
            onGet:function(val){
                alert("val"+val);
                return val;
            }
        }
        //"#searchName" :$("#searchName","#myTab").val(),
        //"select" : $("option:selected","#userManage_footer form").text();
    },
    model : new userManageModel(),
    template : userManageListTableTemplate,
    render : function() {
        var self = this;
        if (this.template) {
            //使用模板+数据拼装DOM
            this.$el.html(this.template(this.model.attributes));
        }
        //返回自身，便于promise调用
        return this;
    },
    //初始 加载员工列表
    loadUserInfoList : function() {
        var self = this;
        var username = localStorage.getItem("username");
        //alert("初始列表"+username);
        this.model.save({}, {
            data: {
                //page : 1,
                userName :username
            },
            success : function(model, resp, options) {//？返回了三个参数
                self.render();
                var data = resp;
                //console.log("viewData~~~"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                }
            },
            error : function(model, err, options) {
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "加载列表失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "加载列表失败", 2000);
                        break;
                    default:
                        alert("加载列表失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //点击页码加载员工列表
    loadUserInfoList_page : function(page) {
        //alert("page"+page);
        var self = this;
        var username = localStorage.getItem("username");
        this.model.save({}, {
            data: {
                page : page,
                userName :username
            },
            success : function(model, resp, options) {//？返回了三个参数
                self.render();
                var data = resp;
                //console.log("viewData_PAGE~~~"+JSON.stringify(data));
                $("#presentCount","#userManage_footer").text(data.data.length);//当前页条数
                $("#totalCount","#userManage_footer").text(data.totalCount);  //总共条数
                //console.log("viewData~~~"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                }
            },
            error : function(model, err, options) {
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "加载列表失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "加载列表失败", 2000);
                        break;
                    default:
                        alert("加载列表失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //查询员工信息
    loadUserInfoList_search : function() {
        var self = this;
        var username = $("#searchName").val();
        //alert("search"+username);
        //alert("username"+username);
        if(username==""){
            alert("请输入您要查询的员工姓名");
            return false;
        }
        this.model.save({}, {
            data: {
                realName :username
            },
            success : function(model, resp, options) {//？返回了三个参数
                self.render();
                var data = resp;
                $("#presentCount","#userManage_footer").text(data.data.length);//当前也条数
                $("#totalCount","#userManage_footer").text(data.totalCount);  //总共条数
                //$("#searchName","#myTab").val(username);  //头部 input 值设置为输入值
                //console.log("viewData~~~"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                }
                console.log("加载用户信息~~~"+JSON.stringify(data));
            },
            error : function(model, err, options) {
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "加载用户信息失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "加载用户信息失败", 2000);
                        break;
                    default:
                        alert("加载用户信息失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //导出Excel信息
    exportExcel : function() {
        // var self = this;
        // var username = $("#searchName").val();
        // //alert("search"+username);
        // this.model.save({}, {
            // // data: {
                // // realName :username
            // // },
            // success : function(model, resp, options) {//？返回了三个参数
                // self.render();
                // var data = resp;
                // $("#presentCount","#userManage_footer").text(data.data.length);//当前也条数
                // $("#totalCount","#userManage_footer").text(data.totalCount);  //总共条数
                // //$("#searchName","#myTab").val(username);  //头部 input 值设置为输入值
                // //console.log("viewData~~~"+JSON.stringify(data));
                // if (data.status === "0") {
                    // //todo...
                // }
                // console.log("加载用户信息~~~"+JSON.stringify(data));
            // },
            // error : function(model, err, options) {
                // switch(err.status) {
                    // case "-1":
                        // alert(err.msg || "加载用户信息失败", 2000);
                        // break;
                    // case "-2":
                        // alert(err.msg || "加载用户信息失败", 2000);
                        // break;
                    // default:
                        // alert("加载用户信息失败", 2000);
                        // break;
                // }
            // }
        // });
        return false;
    }
});
var userManageViewInstance = new userManageView();



//2 、用户列表(操作  删除  后)view;
//var userManageListTable_deleteTemplate = loadTemplate("assets/templates/staff/userManage.html");
var userDelView = Backbone.View.extend({//options...
    initialize : function() {
        this.stickit();
    },
    el : '#userManage',
    // listInfo : '#listInfo',
    // bindings : {
        // "#searchName" : {
            // observe:"realName",
            // onGet:function(val){
                // alert("val"+val);
                // return val;
            // }
        // }
        // //"#searchName" :$("#searchName","#myTab").val(),
        // //"select" : $("option:selected","#userManage_footer form").text();
    // },
    model : new userDelModel(),
    //template : userManageListTable_deleteTemplate,
    deleteUser : function(userId,obj) {
        //console.log(obj);
        var username = $("#searchName").val();
        var self = this;
        //alert(userId);
        this.model.save({}, {
            data: {
                userid :userId
            },
            success : function(model, resp, options) {//？返回了三个参数
                var data = resp;
                //$("#presentCount","#userManage_footer").text(data.data.length);//当前页条数
                //$("#totalCount","#userManage_footer").text(data.totalCount);  //总共条数
                //username ? $("#searchName","#myTab").val(username) : "";//头部 input 值设置为输入值
                if (data.status === "0") {
                    //页面删除该行
                    $(obj).parent().remove();
                    alert(data.msg);
                }
                //console.log("加载用户信息~~~"+JSON.stringify(data));
            },
            error : function(model, err, options) {
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "加载用户信息失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "加载用户信息失败", 2000);
                        break;
                    default:
                        alert("加载用户信息失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});
var userDelViewInstance = new userDelView();




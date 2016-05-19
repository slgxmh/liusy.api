var userInfoTemplate = loadTemplate("assets/templates/staff/userAddUser.html");
//1 、用户信息查询   view;
var userInfoView = Backbone.View.extend({//options...
    initialize : function() {
        this.stickit();
    },
    el : '#adduser',
    // bindings : {
        // "#userInfo_name" : {
            // observe:"userName",
            // onGet:function(val){
                // alert("val"+val);
                // return val;
            // }
        // },
        // "#realName" : {
            // observe:"realName",
            // onGet:function(val){
                // alert("val"+val);
                // return val;
            // }
        // },
        // "#tel_phone" : {
            // observe:"phone",
            // onGet:function(val){
                // alert("val"+val);
                // return val;
            // }
        // }
    // },
    model : new userInfoModel(),
    template : userInfoTemplate,
    render : function() {
        var self = this;
        if (this.template) {
            //使用模板+数据拼装DOM
            this.$el.html(this.template(this.model.attributes));
        }
        //返回自身，便于promise调用
        return this;
    },
    //初始 加载员工信息
    loadUserInfo : function() {
        var self = this;
        var username = localStorage["userAdd_userEmail"];
        this.model.save({}, {
            data: {
                username : "xiaohong@bestseller.com"
            },
            success : function(model, resp, options) {//？返回了三个参数
                self.render();
                var platformType = localStorage["logintype"];
                //判断如果是 H5登陆 则隐藏  教程管理和试衣墙管理；
                switch(platformType){
                    case "H5":
                        $("#DGB").addClass("uhide");
                        $("#pwdReset").removeClass("uhide");
                        break;
                    case "DGB":
                        $("#DGB").removeClass("uhide");
                        break;
                }
                var data = resp;
                $("#user_pwd").prop("disabled",true);
                //console.log("viewData~~~"+JSON.stringify(data));
                if (data.status === "0") {
                    $("#userInfo_name").val(data.data.userName);
                    $("#realName").val(data.data.realName);
                    $("#tel_phone").val(data.data.phone);
                    localStorage["userId"] = data.data.userId; 
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "加载用户信息失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "加载用户信息失败", 2000);
                            break;
                        default:
                            alert("加载用户信息失败", 2000);
                            break;
                    }
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
    //修改/添加用户信息       保存  按钮 执行方法；
    addUserInfo : function(){
        var self = this;
        var username = $("#userInfo_name").val();
        var realName = $("#realName").val();
        var phone = $("#tel_phone").val();
        //var PermissionsIds = $("#").val();
        //var userEmailReg = /@{1}(bestseller.com.cn){1}/;
        var phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/;
        if(username == ""){
            alert("用户名不能为空");
            return false;
        }
        if(phone && !phoneReg.test(phone)){
            alert("号码格式不正确");
            return false;
        }
        console.log("username:"+username+"~realName:"+realName+"~phone:"+phone);
        this.model.save({}, {
            data: {
                username : username,
                realName : realName,
                phone : phone,
                //PermissionsIds : PermissionsIds
            },
            success : function(model, resp, options) {//？返回了三个参数
                self.render();
                var data = resp;
                console.log("viewData~~~"+JSON.stringify(data));
                if (data.status === "0") {
                    $("#userInfo_name").val(data.data.userName);
                    $("#realName").val(data.data.realName);
                    $("#tel_phone").val(data.data.phone);
                    alert("添加成功！");
                    
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "添加用户信息失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "添加用户信息失败", 2000);
                            break;
                        default:
                            alert("添加用户信息失败", 2000);
                            break;
                    }
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
    }
});
var userInfoViewInstance = new userInfoView();

//1 、密码重置   view;
var passwordResetView = Backbone.View.extend({//options...
    initialize : function() {
        this.stickit();
    },
    model : new passwordResetModel(),
    //密码重置默认       重置  按钮 执行方法；
    pwdReset : function(){
        var self = this;
        var userId = localStorage["userId"];
        //alert("userId~~~~~~~~~"+userId)
        this.model.save({}, {
            data: {
                userid : userId
            },
            success : function(model, resp, options) {//？返回了三个参数
                self.render();
                var data = resp;
                console.log("viewData~~~"+JSON.stringify(data));
                if (data.status === "0") {
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "重置失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "重置失败", 2000);
                            break;
                        default:
                            alert("重置失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "重置失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "重置失败", 2000);
                        break;
                    default:
                        alert("重置失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});
var passwordResetViewInstance = new passwordResetView();






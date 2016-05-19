var loginView = Backbone.View.extend({//options...
    initialize : function() {
        this.stickit();
        // $("#submit").on("sumbit",function(){
            // $("form").submit();
        // });        
    },
    el : 'form',
    model : new loginModel(),
    events : {
        'submit' : 'submitLogin'
    },
    bindings : {
        "#loginname" : {
            observe : 'username',
            updateModel : 'validUname'
        },
        "#loginpassword" : "password",
    },
    validUname : function(val, event, options) {
        return true;
    },
    submitCheck : function() {
        if (!this.model.isValid()) {            
            return false;
        }
        return true;
    },
    submitLogin : function() {
        var self = this;
        if (!this.model.isValid()) {            
            return false;
        }
        this.model.save({}, {
            data: {
                logintype: $("#logintype option:selected").val()
            },
            success : function(model, resp, options) {//？返回了三个参数
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    //appcan.window.openToast(data.msg, 2000);
                    localStorage["logintype"] = $("#logintype option:selected").val();
                    //console.log(JSON.stringify(self.model.attributes));
                    //return;
                    localStorage["username"] = self.model.attributes.username;
                    location.href = "staff.html";
                }
            },
            error : function(model, err, options) {
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "登陆失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "登陆失败", 2000);
                        break;
                    default:
                        alert("登陆失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});

var loginViewInstance = new loginView();


//注销  view
var loginOutView = Backbone.View.extend({
    initialize : function() {
        //this.stickit();
    },
    model : new loginOutModel(),
    loginOut : function() {
        this.model.fetch({
            success : function(model, resp, options) {
                var data = resp;
                if (data.status === "0") {
                    localStorage.clear();
                    window.location = "login.html";
                }
            },
            error : function(model, err, options) {
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "注销失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "注销失败", 2000);
                        break;
                    default:
                        alert("注销失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});

var loginOutViewInstance = new loginOutView();


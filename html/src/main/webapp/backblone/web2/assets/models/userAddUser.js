//1、用户信息查询Model;
var userInfoModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    parse : function(resp){
        //返回数据预处理
        console.log("modelResp!!"+JSON.stringify(resp));
        return resp;
    },
    sync : function(method, model, options) {
        console.log("modelmethod!!"+JSON.stringify(method));
        var platformType = localStorage["logintype"];
        //alert("platformType"+platformType);
        switch(method) {
        case "create":
        case "update":
        case "patch":
            switch(platformType){
                case "H5":
                    userInfoH5Service.request(options.data, options);
                    //console.log("request")
                    break;
                case "DGB":
                    userInfoDGBService.request(options.data, options);
                    break;
            }
            break;
        case "read":
            break;
        case "delete":
            break;
        default:
            break;
        }
    }
});


//2、用户信息添加Model;
var userAddModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    parse : function(resp){
        //返回数据预处理
        //console.log("modelResp!!"+JSON.stringify(resp));
        return resp;
    },
    sync : function(method, model, options) {
        //console.log("modelmethod!!"+JSON.stringify(method));
        var platformType = localStorage["logintype"];
        alert("platformType"+platformType);
        switch(method) {
        case "create":
        case "update":
        case "patch":
            switch(platformType){
                case "H5":
                    userAddH5Service.request(options.data, options);
                    //console.log("request")
                    break;
                case "DGB":
                    userAddDGBService.request(options.data, options);
                    break;
            }
            break;
        case "read":
            break;
        case "delete":
            break;
        default:
            break;
        }
    }
});



//3、密码重置默认Model;
var passwordResetModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    parse : function(resp){
        //返回数据预处理
        //console.log("modelResp!!"+JSON.stringify(resp));
        return resp;
    },
    sync : function(method, model, options) {
        //console.log("modelmethod!!"+JSON.stringify(method));
        var platformType = localStorage["logintype"];
        //alert("platformType"+platformType);
        switch(method) {
        case "create":
        case "update":
        case "patch":
            switch(platformType){
                case "H5":
                    passwordResetH5Service.request(options.data, options);
                    //console.log("request")
                    break;
                case "DGB":
                    passwordResetDGBService.request(options.data, options);
                    break;
            }
            break;
        case "read":
            break;
        case "delete":
            break;
        default:
            break;
        }
    }
});































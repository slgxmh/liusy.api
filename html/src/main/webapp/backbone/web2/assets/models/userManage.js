//1 、用户信息列表Model;
var userManageModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    validate : function(attrs, options) {
    },
    parse : function(resp){
        //返回数据预处理
        //console.log("modelResp!!"+JSON.stringify(resp));
        return resp;
    },
    sync : function(method, model, options) {
        //console.log("modelmethod!!"+JSON.stringify(method));
        var platformType = localStorage["logintype"]; //平台类型
        //alert("platformType"+platformType);
        switch(method) {
        case "create":
        case "update":
        case "patch":
            switch(platformType){
                case "H5":
                    userInfoListH5Service.request(options.data, options);
                    //console.log("request")
                    break;
                case "DGB":
                    userInfoListDGBService.request(options.data, options);
                    break;
            }
            //userInfoListDGBService.request(options.data, options);
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

//2 、用户信息导出Model;
var userExcelModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    validate : function(attrs, options) {
    },
    parse : function(resp){
        //返回数据预处理
        //console.log("modelResp!!"+JSON.stringify(resp));
        return resp;
    },
    sync : function(method, model, options) {
        //console.log("modelmethod!!"+JSON.stringify(method));
        var platformType = localStorage["logintype"]; //平台类型
        //alert("platformType"+platformType);
        switch(method) {
        case "create":
        case "update":
        case "patch":
            switch(platformType){
                case "H5":
                    alert("H5");
                    userExcelH5Service.request(options.data, options);
                    //console.log("request")
                    break;
                case "DGB":
                    userExcelDGBService.request(options.data, options);
                    break;
            }
            //userInfoListDGBService.request(options.data, options);
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



//3 、用户信息删除Model;
var userDelModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    validate : function(attrs, options) {
    },
    parse : function(resp){
        //返回数据预处理
        console.log("modelResp~~~DEL!!"+JSON.stringify(resp));
        return resp;
    },
    sync : function(method, model, options) {
        //console.log("modelmethod!!"+JSON.stringify(method));
        var platformType = localStorage["logintype"]; //平台类型
        //alert("platformType"+platformType);
        switch(method) {
        case "create":
        case "update":
        case "patch":
            switch(platformType){
                case "H5":
                    userDelH5Service.request(options.data, options);
                    //console.log("request")
                    break;
                case "DGB":
                    userDelDGBService.request(options.data, options);
                    break;
            }
            //userInfoListDGBService.request(options.data, options);
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







//1、自定义页面列表Model;
var customPageListModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    parse : function(resp){
        //返回数据预处理
        console.log("modelResp!!"+JSON.stringify(resp));
        return resp;
    },
    sync : function(method, model, options) {
        var platformType = localStorage["logintype"];
        console.log("models_platformType:"+platformType);
        switch(method) {
        case "create":
        case "update":
        case "patch":
            switch(platformType){
                case "H5":
                    customPageListH5Service.request({}, options);
                    break;
                case "DGB":
                    customPageListDGBService.request({}, options);
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



//2、自定义页面删除Model;
var customPageDelModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    parse : function(resp){
        //返回数据预处理
        console.log("modelResp!!"+JSON.stringify(resp));
        return resp;
    },
    sync : function(method, model, options) {
        var platformType = localStorage["logintype"];
        console.log("models_platformType:"+platformType);
        switch(method) {
        case "create":
        case "update":
        case "patch":
            switch(platformType){
                case "H5":
                    customPageDelH5Service.request({}, options);
                    break;
                case "DGB":
                    customPageDelDGBService.request({}, options);
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
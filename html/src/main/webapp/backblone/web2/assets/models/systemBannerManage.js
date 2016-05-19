//1、banner列表查询Model;
var bannerListModel = Backbone.Model.extend({
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
                    bannerListH5Service.request(options.data, options);
                    break;
                case "DGB":
                    bannerListDGBService.request(options.data, options);
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

//2、banner列表删除Model;
var bannerDelModel = Backbone.Model.extend({
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
                    bannerDelH5Service.request(options.data, options);
                    break;
                case "DGB":
                    bannerDelDGBService.request(options.data, options);
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

//3、banner列表排序Model;
var bannerSortModel = Backbone.Model.extend({
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
                    bannerSortH5Service.request(options.data, options);
                    break;
                case "DGB":
                    bannerSortDGBService.request(options.data, options);
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
//1、banner列表排序Model;
var bannerAddModel = Backbone.Model.extend({
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
                    bannerAddH5Service.request(options.data, options);
                    break;
                case "DGB":
                    bannerAddDGBService.request(options.data, options);
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
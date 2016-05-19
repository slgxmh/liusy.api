
//1、关于我们信息添加Model;
var aboutUsAddModel = Backbone.Model.extend({
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
                    switch(options.type){
                        case "addNew":
                            aboutUsAddH5Service.request(options.data, options);
                            break;
                        case "editInfo":
                            aboutUsEditH5Service.request(options.data, options);
                            break;
                    }
                    break;
                case "DGB":
                    //aboutUsAddDGBService.request(options.data, options);
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

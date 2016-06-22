
//联系我们信息查询、编辑Model;
var contactUsInfoModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    parse : function(resp){
        //返回数据预处理
        console.log("modelResp---aboutUsEditH5Service!!"+JSON.stringify(resp));
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
                        case "add":
                            contactUsAddH5Service.request(options.data, options);
                            break;
                        case "edit":
                            contactUsEditH5Service.request(options.data, options);
                            break;
                        
                    }
                    break;
                case "DGB":
                    //aboutUsAddDGBService.request(options.data, options);
                    break;
            }
            break;
        case "read":
            switch(platformType){
                case "H5":
                   contactUsInfoH5Service.request({}, options);
                    break;
            }
            break;
        case "delete":
            break;
        default:
            break;
        }
    }
});

//意见反馈查询、删除Model;
var feedbackListModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    parse : function(resp){
        //返回数据预处理
        console.log("modelResp---feedbackListModel!!"+JSON.stringify(resp));
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
                    //aboutUsAddDGBService.request(options.data, options);
                    break;
                case "DGB":
                    switch(options.type){
                        case "list":
                            feedbackListDGBService.request(options.data, options);
                            break;
                        case "del":
                            feedbackDelDGBService.request(options.data, options);
                            break;
                    }
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

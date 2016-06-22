
//1、关于我们信息列表、编辑、删除Model;
var aboutUsListModel = Backbone.Model.extend({
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
                        case "list":
                            aboutUsListH5Service.request(options.data, options);
                            break;
                        // case "edit":
                            // aboutUsEditH5Service.request(options.data, options);
                            // break;
                        case "del":
                            aboutUsDelH5Service.request(options.data, options);
                            break;
                    }
                    break;
                case "DGB":
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

//2、关于我们信息编辑Model;
// var aboutUsEditModel = Backbone.Model.extend({
    // initialize : function() {
        // this.set({})
    // },
    // parse : function(resp){
        // //返回数据预处理
        // console.log("modelResp---aboutUsEditH5Service!!"+JSON.stringify(resp));
        // return resp;
    // },
    // sync : function(method, model, options) {
        // var platformType = localStorage["logintype"];
        // console.log("models_platformType:"+platformType);
        // switch(method) {
        // case "create":
        // case "update":
        // case "patch":
            // switch(platformType){
                // case "H5":
                    // aboutUsEditH5Service.request(options.data, options);
                    // break;
                // case "DGB":
                    // //aboutUsAddDGBService.request(options.data, options);
                    // break;
            // }
            // break;
        // case "read":
            // break;
        // case "delete":
            // break;
        // default:
            // break;
        // }
    // }
// });

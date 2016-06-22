//商品类型模型
var orderExportModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    validate : function(attrs, options) {
        
    },
    parse : function(resp){
        //返回数据预处理
        return resp;
    },
    sync : function(method, model, options) {
        switch(method) {
        case "create":
        case "update":
        case "patch":            

            switch(localStorage["logintype"]){
                case "H5":
                    exportOrderByDateH5Service.request(this.toJSON(), options);
                    break;
                case "DGB":
                    exportOrderByDateDGBService.request(this.toJSON(), options);
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
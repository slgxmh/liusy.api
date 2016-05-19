var classifyListModel = Backbone.Model.extend({
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
            break;
        case "read":
            switch(localStorage["logintype"]){
                case "H5":
                    classifyListH5Service.request(options.data, options);
                    break;
                case "DGB":
                    classifyListDGBService.request(options.data, options);
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
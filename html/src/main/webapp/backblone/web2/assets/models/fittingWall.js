var fittingWallModel = Backbone.Model.extend({
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
            switch(options.data.type){
                case "audit":
                    fittingWallAuditDGBService.request(options.data, options);
                    break;
                case "del":
                    fittingWallDelDGBService.request(options.data, options);
                    break;    
            }           
            break;
        case "read":
            fittingWallListDGBService.request(options.data, options);
            break;
        case "delete":
            break;
        default:
            break;
        }
    }
});
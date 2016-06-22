//商品类型模型
var goodsImportModel = Backbone.Model.extend({
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
                    switch(options.data.type){
                        case "classify":
                            classifyImportH5Service.request(this.toJSON(), options);
                            break;
                        case "status":
                            goodsStatusImportH5Service.request(this.toJSON(), options);
                            break;
                        case "guide":
                            goodsStatusImportH5Service.request(this.toJSON(), options);
                            break;
                        case "discount":
                            discountImportH5Service.request(this.toJSON(), options);
                            break;
                        case "unshelve":
                            unshelveImportH5Service.request(this.toJSON(), options);
                            break;
                    }                    
                    break;
                case "DGB":
                    switch(options.data.type){
                        case "classify":
                            classifyImportDGBServiceService.request(this.toJSON(), options);
                            break;
                        case "status":
                            goodsStatusImportDGBServiceService.request(this.toJSON(), options);
                            break;
                        case "guide":
                            goodsStatusImportDGBServiceService.request(this.toJSON(), options);
                            break;
                        case "discount":
                            discountImportDGBServiceService.request(this.toJSON(), options);
                            break;
                        case "unshelve":
                            unshelveImportDGBServiceService.request(this.toJSON(), options);
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
//商品列表模型
var goodsListModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    parse : function(resp){
        //返回数据预处理        
        /*
        for(var j=0;j<resp.data.length;j++){
                    resp.data[j].goodsClassifyNames = "";
                    resp.data[j].goodsClassifyIds = [];
                    for(var i=0; i<resp.data[j].goodsClassify.length; i++){
                        resp.data[j].goodsClassifyNames += resp.data[j].goodsClassify[i].classifyName+",";
                        resp.data[j].goodsClassifyIds.push(resp.data[j].goodsClassify[i].classifyId);
                    }
                    
                    resp.data[j].goodsClassifyNames = resp.data[j].goodsClassifyNames.slice(0,resp.data[j].goodsClassifyNames.length-1);
                }*/        
        return resp;
    },
    sync : function(method, model, options) {
        switch(method) {
        case "create":
        case "update":
        case "patch":    
            if(this.attributes.priceFrom&&this.attributes.priceTo){
                this.attributes.goodsPrice = "["+this.attributes.priceFrom+","+this.attributes.priceTo+"]";
            }
            if(this.attributes.stockFrom&&this.attributes.stockTo){
                this.attributes.goodsStock = "["+this.attributes.stockFrom+","+this.attributes.stockTo+"]";
            }    
            switch(localStorage["logintype"]){                
                case "H5":
                    getGoodsListH5Service.request(this.toJSON(), options);
                    break;
                case "DGB":
                    getGoodsListDGBService.request(this.toJSON(), options);
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

var setClassifyModel = Backbone.Model.extend({
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
                    setClassifyH5Service.request(options.data, options);
                    break;
                case "DGB":
                    setClassifyDGBService.request(options.data, options);
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

//商品 永久下架 模型
var onshelveForeverModel = Backbone.Model.extend({
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
            //console.log(localStorage["logintype"])          
            switch(localStorage["logintype"]){
                case "H5":
                    unshelveH5Service.request(this.toJSON(), options);
                    break;
                case "DGB":
                    unshelveDGBService.request(this.toJSON(), options);
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

//商品 永久下架 模型
var shelveModifyModel = Backbone.Model.extend({
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
            //console.log(localStorage["logintype"])          
            switch(localStorage["logintype"]){
                case "H5":
                    shelveModifyH5Service.request(this.toJSON(), options);
                    break;
                case "DGB":
                    shelveModifyDGBService.request(this.toJSON(), options);
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

//商品 上下架 模型
var goodsStatusEditModel = Backbone.Model.extend({
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
            //console.log(localStorage["logintype"])          
            switch(localStorage["logintype"]){
                case "H5":
                    goodsStatusEditH5Service.request(this.toJSON(), options);
                    break;
                case "DGB":
                    goodsStatusEditDGBService.request(this.toJSON(), options);
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
//商品列表模型
var goodsListModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    validate : function(attrs, options) {
        
    },
    parse : function(resp){
        //返回数据预处理
        
        for(var j=0;j<resp.data.length;j++){
            resp.data[j].goodsClassifyNames = "";
            resp.data[j].goodsClassifyIds = [];
            for(var i=0; i<resp.data[j].goodsClassify.length; i++){
                resp.data[j].goodsClassifyNames += resp.data[j].goodsClassify[i].classifyName+",";
                resp.data[j].goodsClassifyIds.push(resp.data[j].goodsClassify[i].classifyId);
            }
            
            resp.data[j].goodsClassifyNames = resp.data[j].goodsClassifyNames.slice(0,resp.data[j].goodsClassifyNames.length-1);
        }
        return resp;
    },
    sync : function(method, model, options) {
        switch(method) {
        case "create":
        case "update":
        case "patch":
            switch(localStorage['logintype']){
                case "H5":
                    goodsPublishListH5Service.request(this.toJSON(), options);
                    
                    break;
                case "DGB":
                    goodsPublishListDGBService.request(this.toJSON(), options);
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
            switch(options.data.logintype){
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

//商品发布模型
var goodsReleaseModel = Backbone.Model.extend({
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
            switch(options.data.logintype){
                case "H5":
                    goodsReleaseH5Service.request(options.data, options);
                    break;
                case "DGB":
                    goodsReleaseDGBService.request(options.data, options);
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
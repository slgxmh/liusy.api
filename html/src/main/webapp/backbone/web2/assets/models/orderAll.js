var orderAllModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    validate : function(attrs, options) {
        
    },
    parse : function(resp){
        //返回数据预处理
        var data = resp.data;
        for(var i=0;i<data.length;i++){
            data[i].goodsSkus = "";
            data[i].goodsCount = 0;
            data[i].goodsGoodsStatuses = "";
            for(var j=0;j<data[i].goods.length;j++){                                
                data[i].goodsSkus += data[i].goods[j].SKU+"<br>";
                data[i].goodsCount += data[i].goods[j].count;
                data[i].goodsGoodsStatuses += data[i].goods[j].goodsStatus+"<br>";
            }
        }
        return resp;
    },
    sync : function(method, model, options) {
        switch(method) {
        case "create":
        case "update":
        case "patch":            
            break;
        case "read":
        console.log(options.data)
            switch(localStorage["logintype"]){
                case "H5":
                    orderListH5Service.request(options.data, options);
                    break;
                case "DGB":
                    orderListDGBService.request(options.data, options);
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
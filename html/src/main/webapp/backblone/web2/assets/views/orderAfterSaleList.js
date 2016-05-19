var orderListTemplate = loadTemplate("assets/templates/orderRefundTable.html");

var orderAfterSaleView = Backbone.View.extend({//options...
    initialize : function() {
        this.stickit();                
    },
    el : '#tableList',
    content: "#orderAfterSale_content",
    template : orderListTemplate,
    model : new orderAfterSaleModel(),  
    validUname : function(val, event, options) {
        return true;
    },
    loadOrderList : function() {
        var self = this;
        if (!this.model.isValid()) {            
            return false;
        }
        this.model.fetch({
            success : function(model, resp, options) {//锛熻繑鍥炰簡涓変釜鍙傛暟               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    if(self.template){                        
                        $("#tableList",self.content).html(self.template(self.model.attributes));                                                 
                    }                                                                    
                }
            },
            error:function(cols, error, options){
                switch(error.status){
                    case '1001':
                        //handle it
                        break;
                    default:
                        global_err(error.status);
                        break;
                }
            }
        });

        var model11 = new returnOrderStatusModel();        
        
        model11.fetch({
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    for(var i=0;i<data.data.length; i++){
                        $("#returnType",self.content).append('<option value ="'+data.data[i].id+'" >'+data.data[i].name+'</option>');  
                    }                                                                                         
                }
            },
            error : function(model, err, options) {
                
            }
        });
        
        var model22 = new returnOrderCountModel();
        
        model22.fetch({
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    //console.log(data)
                    $("#refund",self.content).text(data.data.refund);  
                    $("#return",self.content).text(data.data.count);                                                                    
                }
            },
            error : function(model, err, options) {
                
            }
        });
        return false;
    }   
});
//var newOrderAllView = new orderAllView();

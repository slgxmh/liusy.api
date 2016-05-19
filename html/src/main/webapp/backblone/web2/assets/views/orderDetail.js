var orderDetailTemplate = loadTemplate("assets/templates/staff/orderDetail.html");

var orderDetailView = Backbone.View.extend({//options...
    initialize : function() {
        this.stickit();                
    },
    el : '#orderDetail_content',
    template : orderDetailTemplate,
    model : new orderDetailModel(),  
    validUname : function(val, event, options) {
        return true;
    },
    load : function() {
        var self = this;
        if (!this.model.isValid()) {            
            return false;
        }
        this.model.fetch({
            data: {
                orderNo: localStorage['orderNo']
            },
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    if(self.template){                        
                        self.$el.html(self.template(self.model.attributes));                                                 
                    }                                                                    
                }
            },
            error : function(model, err, options) {
                
            }
        });
        return false;
    }   
});
var newOrderDetailView = new orderDetailView();
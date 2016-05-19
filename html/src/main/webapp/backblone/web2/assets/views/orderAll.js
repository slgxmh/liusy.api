var orderListTemplate = loadTemplate("assets/templates/orderList.html");

var orderAllView = Backbone.View.extend({//options...
    initialize : function() {
        var self = this;
        this.stickit();     
        $("#search",self.content).on("click",function(){
            self.loadOrderList();
        });         
    },
    el : '#content1',
    content: "#orderAll_content",
    template : orderListTemplate,
    model : new orderAllModel(),  
    validUname : function(val, event, options) {
        return true;
    },
    loadOrderList : function() {
        var self = this;
        if (!this.model.isValid()) {            
            return false;
        }
        this.model.fetch({
            data: {
                orderStatus: $("#orderStatus option:selected",self.content).val(),
                phone: $("#receivePhone",self.content).val(),
                cnee: $("#receiveName",self.content).val(),
                memberAccount: $("#memberAccount",self.content).val(),
                orderNo: $("#orderNo",self.content).val(),
                memberAccount: $("#timeType option:selected",self.content).val(),
                timeSection: $("#timeFrom",self.content).val().replace("-","/")+"-"+$("#timeTo",self.content).val().replace("-","/")
            },
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    if(self.template){                        
                        $("#content1",self.content).html(self.template(self.model.attributes));                                                 
                    }                                                                    
                }
            },
            error : function(model, err, options) {
                
            }
        });                
        this.model.fetch({
            data: {
                orderStatus: $("#orderStatus option:selected",self.content).val(),
                phone: $("#receivePhone",self.content).val(),
                cnee: $("#receiveName",self.content).val(),
                memberAccount: $("#memberAccount",self.content).val(),
                orderNo: $("#orderNo",self.content).val(),
                memberAccount: $("#timeType option:selected",self.content).val(),
                timeSection: $("#timeFrom",self.content).val().replace("-","/")+"-"+$("#timeTo",self.content).val().replace("-","/")
            },
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    if(self.template){                        
                        $("#content1",self.content).html(self.template(self.model.attributes));                                                 
                    }                                                                    
                }
            },
            error : function(model, err, options) {
                
            }
        });
        return false;
    }   
});
//var newOrderAllView = new orderAllView();

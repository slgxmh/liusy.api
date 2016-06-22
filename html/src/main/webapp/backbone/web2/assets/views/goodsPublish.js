var goodsDetailTemplate = loadTemplate("assets/templates/staff/goodsPublish.html"); 

var goodsPublishlView = Backbone.View.extend({//options...
    initialize : function() {
        var self = this;
        this.stickit();     
            
    },
    el : '#goodsPublish',
    model : new goodsDetailModel(), 
    template: goodsDetailTemplate,
    validUname : function(val, event, options) {
        return true;
    },
    load : function() {
        var self = this;
        if (!this.model.isValid()) {            
            return false;
        }
        var start = location.href.indexOf("=");
        var goodsId = location.href.substring(start+1);
        
        this.model.fetch({ 
            data: {
                goodsId: goodsId
            },       
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    if(self.template){
                        self.$el.html(self.template(self.model.attributes));
                    }
                    
                                                                                     
                }
            },
            error : function(model, err, options) {
                alert("上传失败")
            }
        });                        
        return false;
    }   
});

var newGoodsPublishlView = new goodsPublishlView();

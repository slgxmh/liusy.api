var indexTemplate = loadTemplate("assets/templates/staff/index.html");

var indexlView = Backbone.View.extend({//options...
    initialize : function() {
        this.stickit();                
    },
    el : '#index',
    template : indexTemplate,
    model : new indexlModel(),  
    validUname : function(val, event, options) {
        return true;
    },
    load : function() {
        var self = this;
        if (!this.model.isValid()) {            
            return false;
        }
        this.model.fetch({
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
var newIndexView = new indexlView();
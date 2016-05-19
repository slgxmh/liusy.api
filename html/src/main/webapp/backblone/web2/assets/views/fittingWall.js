var fittingWallTemplate = loadTemplate("assets/templates/fittingWallTable.html");

var fittingWallView = Backbone.View.extend({//options...
    initialize : function() {
        var self = this;
        //this.stickit();     
        $("#search",self.content).on("click",function(){
            self.load();
            $('#selAll', self.content).prop('checked', false);
        });  
        
        $("#content input:checkbox",self.content).on("click",function(){
            var id = this.id;
            if(this.checked){
                if(id=='selAll'){
                    $('#content input:checkbox', self.content).prop('checked', true);
                }
            }else{
                if(id=='selAll'){
                    $('#content input:checkbox', self.content).prop('checked', false);
                }else{
                    $('#content', self.content).prop('checked', false);
                }
            }             
        })
        
        $("#multiDelete",self.content).on("click",function(){
            if($("#tableList input:checkbox:checked",self.content).length==0){
                alert("请选择");
            }else{
                self.del();
            }
            
        }); 
        $("#multiAudit",self.content).on("click",function(){
             if($("#tableList input:checkbox:checked",self.content).length==0){
                alert("请选择");
            }else{
                self.audit();
            }
        });        
    },
    el : '#tableList',
    content: "#fittingWall_content",
    template : fittingWallTemplate,
    model : new fittingWallModel(),  
    validUname : function(val, event, options) {
        return true;
    },
    handleId: [],
    load : function() {
        var self = this;
        if (!this.model.isValid()) {            
            return false;
        }
        this.model.fetch({
            data: {
                SKU: $("#SKU",self.content).val(),
                createDate: "",
                status: ""
            },
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    if(self.template){                        
                        $("#tableList",self.content).html(self.template(self.model.attributes));                                                 
                    }                                                                    
                }
            },
            error : function(model, err, options) {
                
            }
        });
        return false;
    },
    del: function(){
        var self = this;
        var ids = [];                
        $("#tableList input:checkbox:checked",self.content).each(function(){
            ids.push($(this).val());
        });
        self.handleIds = ids;
        self.model.save({},{                    
            data: {
                type: "del",
                id: self.handleIds
            },
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    alert("删除成功")                                                                    
                }
            },
            error : function(model, err, options) {
                
            }
        });
    },
    audit: function(){
        var self = this;
        var ids = [];                
        $("#tableList input:checkbox:checked",self.content).each(function(){
            ids.push($(this).val());
        });
        self.handleIds = ids;
        self.model.save({},{
            data: {
                type: "audit",
                id: self.handleIds
            },
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    alert("审核成功")                                                                    
                }
            },
            error : function(model, err, options) {
                
            }
        });
    }
    
});
var newFittingWallView = new fittingWallView();

function fittingWallDelete(obj){
    newFittingWallView.handleId = [];
    newFittingWallView.handleId.push($(obj).data("id"));
    newFittingWallView.del();
}

function fittingWallAudit(obj){
    newFittingWallView.handleId = [];
    newFittingWallView.handleId.push($(obj).data("id"));
    newFittingWallView.audit();
}

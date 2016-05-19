

var goodsImportView = Backbone.View.extend({//options...
    initialize : function() {
        var self = this;
        this.stickit();     
        $("#classifyUpload",self.content).on("click",function(){
            self.uploadFile($("#classifyfile",self.content).val(),"classify");
        });  
        $("#statusUpload",self.content).on("click",function(){
            self.uploadFile($("#statusfile",self.content).val(),"status");
        }); 
        $("#guideUpload",self.content).on("click",function(){
            self.uploadFile($("#classifyfile",self.content).val(),"classify");
        });   
        $("#discountUpload",self.content).on("click",function(){
            self.uploadFile($("#discountfile",self.content).val(),"discount");
        });
        $("#unshelveUpload",self.content).on("click",function(){
            self.uploadFile($("#unshelvefile",self.content).val(),"unshelve");
        });    
    },
    el : '',
    content: "#goodsImport",
    model : new goodsImportModel(),  
    validUname : function(val, event, options) {
        return true;
    },
    uploadFile : function(excelName,uploadType) {
        var self = this;
        if (!this.model.isValid()) {            
            return false;
        }
        if(excelName==""){
            alert("请选择文件");
            return;
        }
        this.model.save({excel: excelName},{ 
            data: {
                type: uploadType
            },       
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    alert("上传成功")                                                                   
                }
            },
            error : function(model, err, options) {
                alert("上传失败")
            }
        });                        
        return false;
    }   
});

var newGoodsImportView = new goodsImportView();

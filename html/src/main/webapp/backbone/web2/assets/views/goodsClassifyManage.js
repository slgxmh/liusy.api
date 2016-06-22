var classifyManageListTemplate = loadTemplate("assets/templates/classifyManageList.html");

var classifyManageView = Backbone.View.extend({//options...
    initialize : function() {
        var self = this;
        this.stickit();  
        $("#goodsClassify_content .tab-item").on("click",function(){        
            var type = $(this).data("type");
            $("#goodsClassify_content .classify212 .tab-item").removeClass("active");
            $(this).addClass("active");
            if(type == "goodsClassify"){
                $("#savePic","#goodsClassify_content").removeClass("uhide")
                $("#saveNoPic","#goodsClassify_content").addClass("uhide")
                $(".h5Visible","#goodsClassify_content").removeClass("uhide")
            }else if(type == "guideClassify"){
                $("#savePic","#goodsClassify_content").addClass("uhide")
                $("#saveNoPic","#goodsClassify_content").removeClass("uhide")
                $(".h5Visible","#goodsClassify_content").addClass("uhide")
            }
            self.load();
        });                
    },
    el : '.classify212',
    content: "#goodsClassify_content",
    template : classifyManageListTemplate,
    model : new classifyManageModel(),  
    validUname : function(val, event, options) {
        return true;
    },
    parentId: "",
    classifyId: "",
    load : function() {
        var self = this;
        if (!this.model.isValid()) {            
            return false;
        }
        this.model.fetch({
            data: {
                type: $(".classify212 .tab .active",self.content).data("type")
            },
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    if(self.template){                      
                        $("#classifyList",self.content).html(self.template(self.model.attributes)); 
                                                                         
                        $("#goodsClassify_content .classify212 .sub-menu111 .side-tab111 .fold").on("click",function(){
                            var name = $($(this).children()[1]).text();        
                            $(this).parent().siblings("ul").toggleClass("uhide");
                            $("#goodsClassify #title",self.content).val("分类名称"); 
                            $("#goodsClassify",self.content).find("#classifyname").val(name);
                            self.classifyId = $(this).data("classifyid"); 
                            $("#goodsClassify .visible222",self.content).addClass("uhide"); 
                            // if(!$(this).parent().siblings("ul").hasClass("uhide")){
                                // $("#goodsClassify",self.content).find("#classifyname").val(name);
                                // self.classifyId = $(this).data("classifyid"); 
                            // }else{
//                                 
                            // }
                            
                            $(this).parent().parent().siblings().find("ul").addClass("uhide");            
                        }); 
                         
                        $("#goodsClassify_content .classify212 .sub-menu111 .sub111 li").on("click",function(){
                            var name = $($(this).find("a")[0]).text();
                            $("#goodsClassify #title",self.content).val("子分类名称"); 
                            $("#goodsClassify .visible222 parentName",self.content).val($(this).parent().siblings(".parent").text()); 
                            $("#goodsClassify .visible222",self.content).removeClass("uhide"); 
                            self.classifyId = $(this).data("classifyid"); 
                            $("#goodsClassify #classifyname",self.content).val(name); 
                            $("#goodsClassify #isIndexDisplay",self.content).prop("checked",false); 
                            $("#goodsClassify #isBigPic",self.content).prop("checked",false);           
                        });  
                        
                        $("#goodsClassify_content .classify212 .classifyDel").on("click",function(){
                            self.classifyId = $(this).data("classifyid"); 
                            self.del();          
                        }); 
                        
                        $("#goodsClassify_content .classify212 .sub-menu111 .tianjia").on("click",function(){
                            self.classifyId = ""; 
                            self.parentId = $(this).data("classifyid");                              
                            $("#goodsClassify #classifyname",self.content).val(""); 
                            $("#goodsClassify #classifyImg",self.content).val(""); 
                            $("#goodsClassify #isIndexDisplay",self.content).prop("checked",false); 
                            $("#goodsClassify #isBigPic",self.content).prop("checked",false);     
                        });        
                        
                        $("#goodsClassify #savePic",self.content).on("click",function(){
                            self.save();
                        });  
                        
                        $("#goodsClassify #saveNoPic",self.content).on("click",function(){
                            self.save();
                        }); 
                        
                        $("#goodsClassify #saveNoPic",self.content).on("click",function(){
                            self.save();
                        });                                                                                        
                        
                        $(".classify212 .side-tab111",self.content).on("mouseover",function(){
                            $(this).find(".tianjia").removeClass("uhide");
                            $(this).find(".classifyDel").removeClass("uhide");
                        }); 
                        
                        $(".classify212 .side-tab111",self.content).on("mouseout",function(){
                            $(this).find(".tianjia").addClass("uhide");
                            $(this).find(".classifyDel").addClass("uhide");
                        });
                        
                        $(".classify212 .tianjia",self.content).on("mouseout",function(){
                            $(this).find(".tianjia").addClass("uhide");
                            $(this).find(".classifyDel").addClass("uhide");
                        });  
                        $(".classify212 .leaf",self.content).on("mouseover",function(){
                            $(this).find(".classifyDel").removeClass("uhide");
                        });
                        
                        $(".classify212 .leaf",self.content).on("mouseout",function(){
                            $(this).find(".classifyDel").addClass("uhide");
                        });                                         
                    }                                                                    
                }
            },
            error : function(model, err, options) {
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "登陆失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "登陆失败", 2000);
                        break;
                    default:
                        alert("登陆失败", 2000);
                        break;
                }
            }
        });
        return false;
    }, 
    del: function(){
        var self = this;
        this.model.save({},{
            data: {
                type: $(".classify212 .tab .active",self.content).data("type"),
                handle: "del",
                classifyId: self.classifyId               
            },
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    alert("删除成功");
                    self.load();                                                                                       
                }
            },
            error : function(model, err, options) {
                
            }            
        });
    },
    save: function(){
        var self = this;
        var model = new classifySaveModel();
        console.log(self.classifyId);
        model.save({},{
            data: {
                type: $(".classify212 .tab .active",self.content).data("type"),
                handle: self.classifyId==""?"add":"edit",
                parentId: self.parentId,
                classifyId: self.classifyId,
                classifyName: $("#classify_right #classifyName").val(),
                classifyStatus: "",
                classifyIMG: $("#classify_right #upfile").val(),      
            },
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    if(self.classifyId==""){
                        alert("添加成功");
                    }else{
                        alert("编辑成功");
                    }
                    
                    self.load();
                                                                                       
                }
            },
            error : function(model, err, options) {
                
            }            
        });
    }
    /*
    edit: function(){
            var self = this;
            this.model.save({},{
                data: {
                    type: $(".classify212 .tab .active",self.content).data("type"),
                    handle: "edit",
                    classifyId: self.classifyId,
                    classifyName: $("#classify_right #classifyName").val(),
                    classifyStatus: "",
                    classifyIMG: ""
                },
                success : function(model, resp, options) {//锛熻繑鍥炰簡涓変釜鍙傛暟               
                    var data = resp;
                    if (data.status === "0") {
                        //todo...
                        alert("鍒犻櫎鎴愬姛");
                        self.load();
                                                                                           
                    }
                },
                error : function(model, err, options) {
                    
                }            
            });
        }*/
    
});
var newclassifyManageView = new classifyManageView();



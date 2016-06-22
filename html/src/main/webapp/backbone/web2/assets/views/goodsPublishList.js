var goodsPublishListTableTemplate = loadTemplate("assets/templates/publishListTable.html");
//var goodsPublishListTableTemplate = loadTemplate("assets/templates/publishListTable.html");

var goodsPublishListView = Backbone.View.extend({//options...
    initialize : function() {
        var self = this;
        this.stickit(); 
        $("#search",self.content).on("click",function(){
            self.page = 1;
            self.loadGoodsList();
        });
        
        $("#setClassify",self.content).on("click",function(){  
            if($("#tableList input:checkbox:checked",self.content).length==0){
                alert("请先选择商品");
            }else{                          
                $("#classifyPop",self.content).removeClass("uhide");
                $(".zhezhao",self.content).removeClass("uhide");
            }
        });
        
        $("#setClassifySubmit",self.content).on("click",function(){                            
            var classifyIds = [];
            $("#classifyList input:checkbox:checked",self.content).each(function(){
                classifyIds.push($(this).data("classifyid"));
            });
            
            var goodsIds = [];
                
            $("#tableList input:checkbox:checked",self.content).each(function(){
                goodsIds.push($(this).val());
            });
            
            var model = new setClassifyModel();
            model.save({classifys: classifyIds,goodsids: goodsIds},{
                data: {
                    logintype: localStorage["logintype"]
                },
                success : function(model, resp, options) {
                    var data = resp;
                    if (data.status === "0") {
                        alert("设置分类成功");
                    }
                },
                error : function(model, err, options) {
                    
                }
            });
            
            $("#classify input:checkbox",self.content).attr("checked",false);
            $("#classify ul",self.content).addClass("uhide");
            $("#classifyPop",self.content).addClass("uhide");
            $(".zhezhao",self.content).addClass("uhide");
            
        });
        
        $("#goodsPublish",self.content).on("click",function(){
            //console.log($("#tableList input:checkbox:checked"))
            if($("#tableList input:checkbox:checked",self.content).length==0){
                alert("请先选择商品");
            }else{
                var goodsIds = [];                
                $("#tableList input:checkbox:checked",self.content).each(function(){
                    goodsIds.push($(this).val());
                });
                var model = new goodsReleaseModel();
                model.save({},{
                    data: {
                        logintype: localStorage["logintype"]
                    },
                    success : function(model, resp, options) {
                        var data = resp;
                        if (data.status === "0") {
                            alert("发布成功");
                        }
                    },
                    error : function(model, err, options) {
                        
                    }
                });
            }
        });
/*
        console.log($('#content input:checkbox]',self.content))
        
        $('#content input:checkbox"]', self.content).on('click', function(){
                       
        }); */

        
        $("#classifyPop .closeXXX",self.content).on("click",function(){
            $("#classifyPop",self.content).addClass("uhide");
            $(".zhezhao",self.content).addClass("uhide");
        })        
    },
    render : function(){
        var self = this;
        if (self.template) {
        //使用模板+数据拼装DOM  
            $("#tableList",self.content).html(this.template(this.model.attributes));                                            
        }  
    },
    el : "#tableList",
    content: "#publishList_content",
    page: 1,
    pageSize: 10,
    model : new goodsListModel(), 
    template : goodsPublishListTableTemplate,  
    bindings : {
        "#colorSKU" : {
            observe : 'colorSKU',
            updateModel : 'validUname'
        },
        "#goodsName" : "goodsName",
    },
    validUname : function(val, event, options) {
        return true;
    },
    loadGoodsList : function() {
        var self = this;
        if (!this.model.isValid()) {            
            //return false;
        }
        this.model.save({"goodsType": $("#goodsType option:selected",self.content).val()}, {
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    self.render();                  
                }
            },
            error : function(model, err, options) {
                console.log("erro")
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
    
});




var getGoodsTypesView = Backbone.View.extend({//options...
    initialize : function() {
        this.stickit();
        // $("#submit").on("sumbit",function(){
            // $("form").submit();
        // });        
    },
    el : '#goodsType',
    content: "#publishList_content",
    model : new goodsTypesModel(),  
    validUname : function(val, event, options) {
        return true;
    },
    loadGoodsTypes : function() {
        var self = this;
        if (!this.model.isValid()) {            
            return false;
        }
        this.model.fetch({
            success : function(model, resp, options) {//？返回了三个参数                
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    var htmlStr = "";
                    for(key in data.data.goodsType){
                        htmlStr += '<option value="'+key+'">'+data.data.goodsType[key]+'</option>'
                    }
                    $("#goodsType",self.content).append(htmlStr);                             
                    
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
});



var classifyListTemplate = loadTemplate("assets/templates/publishClassifyList.html");

var classifyListView = Backbone.View.extend({//options...
    initialize : function() {
        this.stickit();                
    },
    el : '#classifyList',
    content: "#publishList_content",
    template : classifyListTemplate,
    model : new classifyListModel(),  
    validUname : function(val, event, options) {
        return true;
    },
    loadClassifyList : function() {
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
                        $("#classifyList",self.content).prepend(self.template(self.model.attributes));                                                 
                    }                                                                    
                }
            },
            error : function(model, err, options) {
                switch(err.status) {
                    
                }
            }
        });
        return false;
    },    
});

function classifyExpandPop(obj){
    $(obj).parent().siblings().toggleClass("uhide");
    $(obj).parent().parent().addClass("bc-wh");
    $(obj).parent().parent().siblings().removeClass("bc-wh");    
    $(obj).parent().parent().siblings().find("ul").addClass("uhide");
}

function goodsCheckbox11(obj){    
    var id = obj.id;
    if(obj.checked){
        if(id=='selAll'){
            $('#content input:checkbox', "#publishList_content").prop('checked', true);
        }
    }else{
        if(id=='selAll'){
            $('#content input:checkbox', "#publishList_content").prop('checked', false);
        }else{
            $('#selAll', "#publishList_content").prop('checked', false);
        }
    } 
}



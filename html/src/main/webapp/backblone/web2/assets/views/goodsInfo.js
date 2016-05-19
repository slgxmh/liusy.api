var goodsInfoTableTemplate = loadTemplate("assets/templates/goodsInfoTable.html");
var shelveModifyTableTemplate = loadTemplate("assets/templates/shelveModifyTable.html");

var goodsInfoListView = Backbone.View.extend({//options...
    initialize : function() {
        var self = this;
        this.stickit();
        $("#search",self.content).on("click",function(){
            self.page = 1;
            self.loadGoodsList();
        });  
        
        //永久下架
        $("#unshelveForever",self.content).on("click",function(){
            if($("#tableList input:checkbox:checked",self.content).length==0){
                alert("请先选择商品");
            }else{                          
                var goodsIds = [];
                
                $("#tableList input:checkbox:checked",self.content).each(function(){
                    goodsIds.push($(this).val());
                });
                
                var model = new onshelveForeverModel();
                //console.log(goodsIds)
                model.save({goodsIds: goodsIds},{
                    success : function(model, resp, options) {
                        var data = resp;
                        if (data.status === "0") {
                            alert("永久下架成功");
                        }
                    },
                    error : function(model, err, options) {
                        
                    }
                });
            }
        }); 
        
        $("#goodsInfo_right input:checkbox",self.content).on("click",function(){
            var id = this.id;
            if(this.checked){
                if(id=='selAll'){
                    $('#goodsInfo_right input:checkbox', self.content).prop('checked', true);
                }
            }else{
                if(id=='selAll'){
                    $('#goodsInfo_right input:checkbox', self.content).prop('checked', false);
                }else{
                    $('#selAll', self.content).prop('checked', false);
                }
            }             
        })
        
        //设置分类 弹层打开
        $("#setClassify",self.content).on("click",function(){
            if($("#tableList input:checkbox:checked",self.content).length==0){
                alert("请先选择商品");
            }else{                          
                $("#classifyPop",self.content).removeClass("uhide");
                $(".zhezhao",self.content).removeClass("uhide");
            }
        });
        
        //设置分类弹层提交
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
        
        //货架调整弹层关闭
        $("#shelvePop .closeXXX",self.content).on("click",function(){
            $("#shelvePop").addClass("uhide");
        });
        
        //设置分类弹层关闭
        $("#classifyPop .closeXXX",self.content).on("click",function(){
            $("#classifyPop",self.content).addClass("uhide");
            $(".zhezhao",self.content).addClass("uhide");
        })
         
        //仓库商品 出售商品点击事件     
        $('#goodsInfo_right .nav-tabs li', self.content).on('click', function(){
             if($(this).data("shelvetype")=="出售中"){
                 $("#shelveModify",self.content).removeClass("uhide");
                 $("#onshelve",self.content).addClass("uhide");
             }else{
                 $("#onshelve",self.content).removeClass("uhide");
                 $("#shelveModify",self.content).addClass("uhide");
             }
             $('#goodsInfo_right .nav-tabs li', self.content).removeClass('active');
             $(this).addClass('active');
             $('#selAll', self.content).prop('checked', false);
             $("#tableList",self.content).html("");
             self.page = 1;
             self.loadGoodsList();
         })
         
         //商品上架
        $("#onshelve",self.content).on("click",function(){
            if($("#tableList input:checkbox:checked",self.content).length==0){
                alert("请先选择商品");
            }else{                          
                var goodsIds = [];
                
                $("#tableList input:checkbox:checked",self.content).each(function(){
                    goodsIds.push($(this).val());
                });
                
                var model = new goodsStatusEditModel();
                //console.log(goodsIds)
                model.save({goodsIds: goodsIds,status: ""},{
                    success : function(model, resp, options) {
                        var data = resp;
                        if (data.status === "0") {
                            alert("上架成功");
                        }
                    },
                    error : function(model, err, options) {
                        
                    }
                });
            }
        }); 
                  
         $(".tab-item",self.content).on("click",function(){
             $("#goodsInfo_content .classify212 .tab-item").removeClass("active");
             $(this).addClass("active");        
         });
         
         //货架调整点击事件
         $("#shelveModify",self.content).on("click",function(){             
            self.template = shelveModifyTableTemplate;
            $("#shelvePop .table",self.content).html(self.template(self.model.attributes));
            self.template = goodsInfoTableTemplate;
            $("#shelvePop").removeClass("uhide");
            var container = document.getElementById("sortable");
            var sort = new Sortable(container, {
              //handle: ".tile__title", // Restricts sort start click/touch to the specified element
              draggable: ".dragg", // Specifies which items inside the element should be sortable
              onUpdate: function (evt/**Event*/){
                 var item = evt.item; // the current dragged HTMLElement
              }
            });
         });
         
         //货架调整提交事件
         $("#shelvePop #shelveSubmit",self.content).on("click",function(){
            var goodsIds = [];
            $("#shelvePop #sortable li").each(function(){
                goodsIds.push($(this).attr("id"));
            });
            var model = new shelveModifyModel();
            model.save({index: "",goodsId: goodsIds},{
                success : function(model, resp, options) {//？返回了三个参数                
                    var data = resp;
                    if (data.status === "0") {
                        //todo...
                        alert("调整货架成功")                
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
            $("#shelvePop",self.content).addClass("uhide");  
            $("#shelvePop #sortable",self.content).html("");            
         });         
         
         $("#shelvePop #shelveCancel",self.content).on("click",function(){
             $("#shelvePop",self.content).addClass("uhide");
         })
         
    },
    render : function(){
        var self = this;
        if (self.template) {
        //使用模板+数据拼装DOM  
            //$("#tableList").html(Math.random()+self.template(self.model.attributes)); 
            $("#tableList",self.content).html(this.template(this.model.attributes));
            self.template = shelveModifyTableTemplate;
            $("#shelvePop .table",self.content).html(this.template(this.model.attributes));
            self.template = goodsInfoTableTemplate;                                           
        }  
    },
    el : "goodsInfo_content",
    content: "#goodsInfo_content",
    page: 1,
    pageSize: 10,
    model : new goodsListModel(), 
    template : goodsInfoTableTemplate,  
    bindings : {
        "#colorSKU" : {
            observe : 'SKU',
            updateModel : 'validUname'
        },
        "#goodsName" : {
            observe : 'goodsName',
            updateModel : 'validUname'
        },
        "#priceFrom" : {
            observe : 'priceFrom',
            updateModel : 'validUname'
        },
        "#priceTo" : {
            observe : 'priceTo',
            updateModel : 'validUname'
        },
        "#stockFrom" : {
            observe : 'stockFrom',
            updateModel : 'validUname'
        },
        "#stockTo" : {
            observe : 'stockTo',
            updateModel : 'validUname'
        }
    },
    validUname : function(val, event, options) {
        return true;
    },
    loadGoodsList : function() {
        var self = this;
        // if (!this.model.isValid()) {            
            // return false;
        // }
        this.model.save(
            {
                "goodsType": $("#goodsType option:selected",self.content).val(),//商品类型
                "goodstype": $(".nav-tabs .active",self.content).data("shelvetype"), // 出售状态（出售中/仓库中）
                "goodsClassify": $("#classifyList",self.content).data("classifyvalue")//商品分类
            },              
            {
                success : function(model, resp, options) {//？返回了三个参数                
                    var data = resp;
                    if (data.status === "0") {
                        //todo...
                        self.render();                  
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
            }
        );
        return false;
    },
    
});

var getGoodsTypesView22 = Backbone.View.extend({//options...
    initialize : function() {
        this.stickit();
        // $("#submit").on("sumbit",function(){
            // $("form").submit();
        // });        
    },
    el : '#goodsType',
    content: "#goodsInfo_content",
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

var classifyListTemplate = loadTemplate("assets/templates/goodsInfoClassifyList.html");
var classifyListTemplate22 = loadTemplate("assets/templates/publishClassifyList.html");

var classifyListView22 = Backbone.View.extend({//options...
    initialize : function() {
        this.stickit();               
    },
    el : '#classifyList',
    content: "#goodsInfo_content",
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
                        $("#classifyList",self.content).append(self.template(self.model.attributes)); 
                        self.template = classifyListTemplate22;
                        $("#classifyList22",self.content).prepend(self.template(self.model.attributes)); 
                        self.template = classifyListTemplate;
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
});
//var newclassifyListView = new classifyListView();

function shelveChoose(obj){
    var imgUrl = $(obj).parent().siblings().find("img").attr("src");
    var id = $(obj).data("goodsid");
    var item = '<li class="dragg" id="'+id+'" data-id="'+id+'" style="display: inline-block">'
                   +'<img src="'+imgUrl+'" draggable="false" width="90" height="136" />'
               +'</li>';                           
    $("#shelvePop #sortable").append(item);
    $(obj).addClass("uhide");
    $(obj).siblings().removeClass("uhide");
}

function shelveCancel(obj){
    var id = $(obj).data("goodsid");                
    $(obj).addClass("uhide");
    $(obj).siblings().removeClass("uhide");
}

function classifyExpandPop(obj){
    $(obj).parent().siblings().toggleClass("uhide");
    $(obj).parent().parent().addClass("bc-wh");
    $(obj).parent().parent().siblings().removeClass("bc-wh");    
    $(obj).parent().parent().siblings().find("ul").addClass("uhide");
}

function classifyExpandSide(obj){
    //$("#classifyList",self.content).data("classify",$(this).data("classifyid")); 
    $(obj).parent().parent().siblings().toggleClass("uhide");
    $(obj).parent().parent().parent().toggleClass("bc-wh");
    //$(obj).parent().parent().siblings().removeClass("uhide");
    $(obj).parent().parent().parent().siblings().removeClass("bc-wh")
    $(obj).parent().parent().parent().siblings().find("ul").addClass("uhide");
    
}

function classifySelected(obj){
    $("#classifyList .green","#goodsInfo_content").removeClass("green");
    $("#classifyList .c-wh","#goodsInfo_content").removeClass("c-wh");
    $(obj).addClass("green").addClass("c-wh");
}

// function goodsCheckbox22(obj){    
//     
// }




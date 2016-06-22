var feedbackListTemplate = loadTemplate("assets/templates/staff/systemFeedback.html");
//1 、contactUsInfo  联系我们  view;
var feedbackListView = Backbone.View.extend({//options...
    initialize : function() {
        //this.stickit();
    },
    el : '#feedback',
    model : new feedbackListModel(),
    template : feedbackListTemplate,
    render : function() {
        var self = this;
        if (this.template) {
            //使用模板+数据拼装DOM
            this.$el.html(this.template(this.model.attributes));
        }
        //返回自身，便于promise调用
        return this;
    },
    //1、意见反馈列表加载
    loadfeedbackList : function(){
        var self = this;
        var page = 1;
        
        this.model.save({},{
            type : "list",
            data : {
                page : "1"
            },
            success : function(model, resp, options) {//？返回了三个参数
                self.render();
                var data = resp;
                console.log("viewData~~~loadcontactUsInfo"+JSON.stringify(data));
                if (data.status == "0") {
                    alert(data.msg);
                    $("#sys_count","#feedback_footer").text(data.data.length);//当前页条数
                    $("#sys_totalCount","#feedback_footer").text(data.totalCount);  //总共条数
                    var oInp = $("input[type='checkbox']","table");
                    var inputLen = data.data.length;
                    for(var i=0; i<inputLen; i++){
                        $(oInp[i]).on("click",function(){
                            var flag = true;
                            for(var i = 0; i<inputLen; i++){
                                if (!oInp[i].checked) {
                                    flag = false;
                                    $("input","#allCheck").prop("checked",false);
                                }
                            }
                            if(flag){
                                $("input","#allCheck").prop("checked",true);
                            }
                        });
                    }
                    //点击  批量删除  按钮
                    $("#lotDel").on("click",function(){
                        feedbackListViewInstance.feedbackListDel();
                    });
                    //点击  删除  按钮
                    $(".delFeedback","#sys_Feedback .table").on("click",function(){
                        feedbackListViewInstance.feedbackListDel($(this));
                    });
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "意见反馈列表加载失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "意见反馈列表加载失败", 2000);
                            break;
                        default:
                            alert("意见反馈列表加载失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "意见反馈列表加载失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "意见反馈列表加载失败", 2000);
                        break;
                    default:
                        alert("意见反馈列表加载失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //2、点击页码加载意见反馈列表
    loadfeedbackList_page : function(page) {
        //alert("page"+page);
        var self = this;
        //var username = localStorage.getItem("username");
        this.model.save({}, {
            data: {
                page : page
                //userName :username
            },
            success : function(model, resp, options) {//？返回了三个参数
                self.render();
                var data = resp;
                //console.log("viewData_PAGE~~~"+JSON.stringify(data));
                $("#presentCount","#userManage_footer").text(data.data.length);//当前页条数
                $("#totalCount","#userManage_footer").text(data.totalCount);  //总共条数
                //console.log("viewData~~~"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                }
            },
            error : function(model, err, options) {
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "意见反馈列表加载失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "意见反馈列表加载失败", 2000);
                        break;
                    default:
                        alert("意见反馈列表加载失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //3、意见反馈关键字查询
    loadfeedbackList_search : function() {
        var self = this;
        var keyword = $("#keywords").val();
        //alert("search"+username);
        //alert("username"+username);
        if(username==""){
            alert("请输入您要查询的关键字");
            return false;
        }
        this.model.save({}, {
            data: {
                //realName :username
            },
            success : function(model, resp, options) {//？返回了三个参数
                self.render();
                var data = resp;
                $("#presentCount","#userManage_footer").text(data.data.length);//当前也条数
                $("#totalCount","#userManage_footer").text(data.totalCount);  //总共条数
                //$("#searchName","#myTab").val(username);  //头部 input 值设置为输入值
                //console.log("viewData~~~"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                }
                console.log("加载用户信息~~~"+JSON.stringify(data));
            },
            error : function(model, err, options) {
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "加载意见反馈信息失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "加载意见反馈信息失败", 2000);
                        break;
                    default:
                        alert("加载意见反馈信息失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //4、意见反馈列表删除
    feedbackListDel : function(obj) {
        var self = this;
        var arrId = [];
        if(obj){
            arrId = $(obj).attr("data-sysid");
        }else{
            var checkedLen = $("input:checked","table").length;
            for(var i=0; i<checkedLen; i++){
                arrId.push($("input:checked","table").eq(i).val());
            }
            if(arrId.length===0||arrId[0]==undefined){
                alert("请勾选您要删除的意见");
                return false
            }
        }
        this.model.save({},{
            type : "del",
            data : {
                id : arrId
            },
            success : function(model, resp, options) {//？返回了三个参数
                var data = resp;
                console.log("viewData~~~feedbackListDel"+JSON.stringify(data));
                if (data.status === "0") {
                    if(obj){
                        $(obj).parent().remove();
                    }else{
                        $("input:checked","table").parents("tr").remove();
                    }
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "意见反馈列表删除失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "意见反馈列表删除失败", 2000);
                            break;
                        default:
                            alert("意见反馈列表删除失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "意见反馈列表删除失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "意见反馈列表删除失败", 2000);
                        break;
                    default:
                        alert("意见反馈列表删除失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});
var feedbackListViewInstance = new feedbackListView();

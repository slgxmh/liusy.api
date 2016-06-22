//var addNorCourseTemplate = loadTemplate("assets/templates/staff/tutorialPublish.html");
//1 、addNorCourse  添加普通\组图教程  view;
var addNorCourseView = Backbone.View.extend({//options...
    initialize : function() {
        //this.stickit();
    },
    model : new addNorCourseModel(),
    //1、添加普通教程
    addNorCourse : function(){
        var self = this;
        var name = $("#tutorialTitle").val();
        //var picUrl = ;
        var content = $("#editorPreview").text();
        //var classifyId = ;
        //return;
        this.model.save({},{
            type : "norCourse",
            data : {
                name : name,
                picUrl : 'svn.png',
                content : content,
                classifyId : '1' 
            },
            success : function(model, resp, options) {//？返回了三个参数
                //self.render();
                var data = resp;
                console.log("viewData~~~loadcontactUsInfo"+JSON.stringify(data));
                if (data.status == "0") {
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "教程发布失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "教程发布失败", 2000);
                            break;
                        default:
                            alert("教程发布失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "教程发布失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "教程发布失败", 2000);
                        break;
                    default:
                        alert("教程发布失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //2、添加组图教程
    addPicCourse : function() {
        var self = this;
        var name = $("#tutorialTitle2").val();
        //var picUrls = ;
        //var classifyId = ;
        this.model.save({}, {
            type : 'picCourse',
            data: {
                name : name,
                picUrls : '',
                classifyId : ''
            },
            success : function(model, resp, options) {//？返回了三个参数
                var data = resp;
                console.log("addPicCourse~~~"+JSON.stringify(data));
                if (data.status === "0") {
                    alert(data.msg);
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
    }
});
var addNorCourseViewInstance = new addNorCourseView();





//2、教程管理——教程信息管理view
var courseListTemplate = loadTemplate("assets/templates/staff/tutorialManager.html");
var courseList = Backbone.View.extend({//options...
    initialize : function() {
        //this.stickit();
    },
    el : '#tutorialManager',
    model : new courseListModel(),
    template : courseListTemplate,
    render : function() {
        var self = this;
        if (this.template) {
            //使用模板+数据拼装DOM
            this.$el.html(this.template(this.model.attributes));
        }
        //返回自身，便于promise调用
        return this;
    },
    //1、教程信息管理列表加载
    loadCourseList : function(){
        var self = this;
        this.model.fetch({
            type : 'list',
            success : function(model, resp, options) {//？返回了三个参数
                self.render();
                var data = resp;
                console.log("viewData~~~loadCourseList"+JSON.stringify(data));
                if (data.status == "0") {
                    alert("loadCourseList");
                    //alert(data.msg);
                    //点击 table中input按钮逻辑  
                    var oInp = $("input[type='checkbox']","table");
                    var inputLen = data.data.length;
                    for(var i=0; i<inputLen; i++){
                        $(oInp[i]).on("click",function(){
                            var flag = true;
                            for(var i = 0; i<inputLen; i++){
                                if (!oInp[i].checked) {
                                    flag = false;
                                    $("input","#tutorial-allChoose").prop("checked",false);
                                }
                            }
                            if(flag){
                                $("input","#tutorial-allChoose").prop("checked",true);
                            }
                        });
                    }
                    //侧边栏  类别点击操作
                    $(".classifyList").on("click",function(){
                        courseListViewInstance.searchCourseList($(this));
                    });
                    //点击查询按钮
                    $("#courseSearch").on("click",function(){
                        //alert("chaxun");
                        courseListViewInstance.searchCourseList();
                    });
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "教程信息管理列表加载失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "教程信息管理列表加载失败", 2000);
                            break;
                        default:
                            alert("教程信息管理列表加载失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                //console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "教程信息管理列表加载失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "教程信息管理列表加载失败", 2000);
                        break;
                    default:
                        alert("教程信息管理列表加载失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //2、教程信息管理——查询
    searchCourseList : function(obj){
        var self = this;
        var name = $("#name").val();
        var classifyId;
        if(obj){
            classifyId = $(obj).attr("data-classifyid");
        }else{
            classifyId = "";
        }
        var classifyType = $("#classifyType").val();
        var courseStatus = $("#courseStatus").val();;
        //var updateTime = ;
        this.model.save({},{
            type : 'search',
            data : {
                name : name,
                classifyId : classifyId,
                classifyType : classifyType,
                courseStatus : courseStatus, //显示 隐藏
                updateTime : '2015/01/02-2016/01/03'
            },
            success : function(model, resp, options) {//？返回了三个参数
                var data = resp;
                console.log("viewData~~~addCourseClassify"+JSON.stringify(data));
                if (data.status == "0") {
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "查询失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "查询失败", 2000);
                            break;
                        default:
                            alert("查询失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~addCourseClassify"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "查询失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "查询失败", 2000);
                        break;
                    default:
                        alert("查询失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //3、教程信息管理——删除/批量删除
    delCourseList : function(obj){
        var self = this;
        var arrId = [];
        if(obj){//单个删除
            arrId = $(obj).parent().attr("data-id");
            alert(arrId);
        }else{//批量删除
            var checkedLen = $("input:checked","table").length;
            for(var i=0; i<checkedLen; i++){
                arrId.push($("input:checked","table").eq(i).val());
            }
            if(arrId.length===0||arrId[0]==undefined){
                alert("请选择要删除的教程！");
                return false;
            }
        }
        this.model.save({},{
            type : 'del',
            data : {
                id :arrId
            },
            success : function(model, resp, options) {
                var data = resp;
                console.log("viewData~~~delCourseList"+JSON.stringify(data));
                if (data.status == "0") {
                    if(obj){
                        $(obj).parents("tr").remove();
                    }else{
                        $("input:checked","table").parents("tr").remove();
                    }
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "教程信息删除失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "教程信息删除失败", 2000);
                            break;
                        default:
                            alert("教程信息删除失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~addCourseClassify"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "教程信息删除失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "教程信息删除失败", 2000);
                        break;
                    default:
                        alert("教程信息删除失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //4、教程信息管理——状态隐藏/显示
    editCourseListStatus : function(obj){
        var self = this;
        var courseStatus;
        var arrId = [];
        if(obj!="lotShow" && obj!="lotHide"){//单个修改
            courseStatus = $(obj).text();
            arrId = $(obj).parent().attr("data-id");
        }else{ //批量修改
            var checkedLen = $("input:checked","table").length;
            for(var i=0; i<checkedLen; i++){
                arrId.push($("input:checked","table").eq(i).val());
            }
            if(arrId.length===0||arrId[0]==undefined){
                alert("请选择要改变状态的教程！");
                return false;
            }
            if(obj=="lotShow"){
                courseStatus = "显示";
            }else if(obj=="lotHide"){
                courseStatus = "隐藏";
            }
        }
        this.model.save({},{
            type : 'editStatus',
            data : {
                id : arrId,
                courseStatus : courseStatus
            },
            success : function(model, resp, options) {
                var data = resp;
                console.log("viewData~~~delCourseList"+JSON.stringify(data));
                if (data.status == "0") {
                    var oldText = $(obj).text();
                    $(obj).text($(obj).parent().prev().text());
                    $(obj).parent().prev().text(oldText);
                    alert("editCourseListStatus"+data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "信息状态修改失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "信息状态修改失败", 2000);
                            break;
                        default:
                            alert("信息状态修改失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~addCourseClassify"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "信息状态修改失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "信息状态修改失败", 2000);
                        break;
                    default:
                        alert("信息状态修改失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});
var courseListViewInstance = new courseList();




//3、教程管理——教程分类（教程信息维护）view
var courseClassifyListTemplate = loadTemplate("assets/templates/staff/tutorialMaintain.html");
var courseClassifyList = Backbone.View.extend({//options...
    initialize : function() {
        //this.stickit();
    },
    el : '#tutorialMaintain',
    model : new courseClassifyListModel(),
    template : courseClassifyListTemplate,
    render : function() {
        var self = this;
        if (this.template) {
            //使用模板+数据拼装DOM
            this.$el.html(this.template(this.model.attributes));
        }
        //返回自身，便于promise调用
        return this;
    },
    //1、教程分类列表加载
    loadCourseClassifyList : function(){
        var self = this;
        this.model.fetch({
            success : function(model, resp, options) {//？返回了三个参数
                self.render();
                var data = resp;
                //console.log("viewData~~~loadcontactUsInfo"+JSON.stringify(data));
                if (data.status == "0") {
                    //alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "教程分类列表加载失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "教程分类列表加载失败", 2000);
                            break;
                        default:
                            alert("教程分类列表加载失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                //console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "教程分类列表加载失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "教程分类列表加载失败", 2000);
                        break;
                    default:
                        alert("教程分类列表加载失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //2、教程分类添加
    addCourseClassify : function(){
        var self = this;
        var classifyName = $("#tutorial_name").val();
        if(classifyName==""){
            alert("请填写分类名称");
            return false;
        }
        this.model.save({},{
            type : 'add',
            data : {
                classifyName : classifyName
            },
            success : function(model, resp, options) {//？返回了三个参数
                var data = resp;
                console.log("viewData~~~addCourseClassify"+JSON.stringify(data));
                if (data.status == "0") {
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "教程分类添加失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "教程分类添加失败", 2000);
                            break;
                        default:
                            alert("教程分类添加失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~addCourseClassify"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "教程分类添加失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "教程分类添加失败", 2000);
                        break;
                    default:
                        alert("教程分类添加失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //3、教程分类删除
    delCourseClassify : function(obj){
        var self = this;
        var classifyId = $(obj).attr("data-classifyId");
        alert(classifyId);
        this.model.save({},{
            type : 'del',
            data : {
                classifyId :classifyId
            },
            success : function(model, resp, options) {//？返回了三个参数
                var data = resp;
                console.log("viewData~~~addCourseClassify"+JSON.stringify(data));
                if (data.status == "0") {
                    $(obj).parent().remove();
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "教程分类删除失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "教程分类删除失败", 2000);
                            break;
                        default:
                            alert("教程分类删除失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~addCourseClassify"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "教程分类删除失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "教程分类删除失败", 2000);
                        break;
                    default:
                        alert("教程分类删除失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //4、教程分类编辑
    editCourseClassify : function(){
        var self = this;
        var classifyId = $("#tutorial_name").data("classifyId");
        var classifyName = $("#tutorial_name").val();
        this.model.save({},{
            type : 'edit',
            data : {
                classifyId :classifyId,
                classifyName : classifyName
            },
            success : function(model, resp, options) {//？返回了三个参数
                var data = resp;
                console.log("viewData~~~addCourseClassify"+JSON.stringify(data));
                if (data.status == "0") {
                    //$(obj).parent().remove();
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "教程分类删除失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "教程分类删除失败", 2000);
                            break;
                        default:
                            alert("教程分类删除失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~addCourseClassify"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "教程分类删除失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "教程分类删除失败", 2000);
                        break;
                    default:
                        alert("教程分类删除失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});
var courseClassifyListInstance = new courseClassifyList();



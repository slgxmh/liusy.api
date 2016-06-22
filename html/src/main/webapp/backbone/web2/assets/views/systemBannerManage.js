var bannerListTemplate = loadTemplate("assets/templates/staff/systemBannerManage.html");
//1 、H5端bannerList   view;
var bannerListView = Backbone.View.extend({//options...
    initialize : function() {
        this.stickit();
    },
    el : '#bannerManage',
    model : new bannerListModel(),
    template : bannerListTemplate,
    render : function() {
        var self = this;
        if (this.template) {
            //使用模板+数据拼装DOM
            this.$el.html(this.template(this.model.attributes));
        }
        //返回自身，便于promise调用
        return this;
    },
    //初始 加载banner列表
    loadbannerList : function() {
        var self = this;
        this.model.save({}, {
            data: {
                type : "ACTIVITY"
            },
            success : function(model, resp, options) {//？返回了三个参数
                // if(localStorage["logintype"]=="DGB"){
                    // bannerListTemplate = loadTemplate("assets/templates/staff/systemBannerManageTreasure.html");
                // }
                self.render();
                var data = resp;
                console.log("viewData~~~bannerList"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                    $("#already","#sys_bannerManage").text(data.data.length);//已添加
                    $("#surplus","#sys_bannerManage").text(10-parseInt(data.data.length)); //还可添加
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "加载用户信息失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "加载用户信息失败", 2000);
                            break;
                        default:
                            alert("加载用户信息失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "加载列表失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "加载列表失败", 2000);
                        break;
                    default:
                        alert("加载列表失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});
var bannerListViewInstance = new bannerListView();



//导购宝端  banner view
var bannerDGBListTemplate = loadTemplate("assets/templates/staff/systemBannerManageTreasure.html");
//1 、bannerDGBList   view;
var bannerDGBListView = Backbone.View.extend({//options...
    initialize : function() {
        this.stickit();
    },
    el : '#bannerManageTreasure',
    model : new bannerListModel(),
    template : bannerDGBListTemplate,
    render : function() {
        var self = this;
        if (this.template) {
            //使用模板+数据拼装DOM
            this.$el.html(this.template(this.model.attributes));
        }
        //返回自身，便于promise调用
        return this;
    },
    //初始 加载banner列表
    loadbannerList : function() {
        var self = this;
        var type = $("#daogoubao>li.onCtrl").attr("data-manageType");
        this.model.save({}, {
            data: {
                type : type
            },
            success : function(model, resp, options) {//？返回了三个参数
                self.render();
                var data = resp;
                console.log("viewData~~~bannerList"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                    //$("#already","#sys_bannerManage").text(data.data.length);//已添加
                    //$("#surplus","#sys_bannerManage").text(10-parseInt(data.data.length)); //还可添加
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "加载用户信息失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "加载用户信息失败", 2000);
                            break;
                        default:
                            alert("加载用户信息失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "加载列表失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "加载列表失败", 2000);
                        break;
                    default:
                        alert("加载列表失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});
var bannerDGBListViewInstance = new bannerDGBListView();



//2 、banner删除   view;
var bannerDelView = Backbone.View.extend({//options...
    initialize : function() {
        //this.stickit();
    },
    model : new bannerDelModel(),
    //点击删除banner
    bannerDel : function(bannerId,obj) {
        var self = this;
        this.model.save({}, {
            data: {
                bannerId : bannerId
            },
            success : function(model, resp, options) {//？返回了三个参数
                var data = resp;
                console.log("viewData~~~bannerList"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                    $(obj).parent().parent().remove();//页面删除当前行；
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "删除banner失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "删除banner失败", 2000);
                            break;
                        default:
                            alert("删除banner失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "删除banner失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "删除banner失败", 2000);
                        break;
                    default:
                        alert("删除banner失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});
var bannerDelViewInstance = new bannerDelView();


//2 、bannerSort   view;
var bannerSortView = Backbone.View.extend({//options...
    initialize : function() {
        //this.stickit();
    },
    model : new bannerSortModel(),
    //点击上移  下移
    bannerSort : function() {
        var self = this;
        this.model.save({}, {
            data: {
                //bannerId : bannerId
            },
            success : function(model, resp, options) {//？返回了三个参数
                var data = resp;
                console.log("viewData~~~bannerList"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "移动失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "移动失败", 2000);
                            break;
                        default:
                            alert("移动失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "移动失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "移动失败", 2000);
                        break;
                    default:
                        alert("移动失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});
var bannerSortViewInstance = new bannerSortView();


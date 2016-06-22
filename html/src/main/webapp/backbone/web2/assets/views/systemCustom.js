var customPageListTemplate = loadTemplate("assets/templates/staff/systemCustom.html");
//1 、customPageList  自定义页面列表   view;
var customPageListView = Backbone.View.extend({//options...
    initialize : function() {
        //this.stickit();
    },
    el : '#custom',
    model : new customPageListModel(),
    template : customPageListTemplate,
    render : function() {
        var self = this;
        if (this.template) {
            //使用模板+数据拼装DOM
            this.$el.html(this.template(this.model.attributes));
        }
        //返回自身，便于promise调用
        return this;
    },
    //初始 加载自定义页面列表
    loadCustomPageList : function() {
        var self = this;
        this.model.save({},{
            success : function(model, resp, options) {//？返回了三个参数
                self.render();
                var data = resp;
                console.log("viewData~~~bannerList"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                    // var clip = new ZeroClipboard($(".copyURL"), {
                        // moviePath: "js/ZeroClipboard.swf"
                    // });
                    // clip.on('mousedown', function(client) {
                        // clip.setText($(this).val());
                    // });
                    // clip.on('complete', function(client, args) {
                        // alert('代码已经复制到您的剪贴板,使用ctrl+v粘贴或者右键粘贴。');
                    // });
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "添加banner信息失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "添加banner信息失败", 2000);
                            break;
                        default:
                            alert("添加banner信息失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "添加banner信息失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "添加banner信息失败", 2000);
                        break;
                    default:
                        alert("添加banner信息失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //删除 自定义页面列表
    customPageDel : function(pageId,obj) {
        var self = this;
        var model = new customPageDelModel();
        model.save({},{
            data : {
                pageId : pageId
            },
            success : function(model, resp, options) {//？返回了三个参数
                //self.render();
                var data = resp;
                console.log("viewData~~~customPageDel"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                    $(obj).parent().remove();
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "删除失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "删除失败", 2000);
                            break;
                        default:
                            alert("删除失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "删除失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "删除失败", 2000);
                        break;
                    default:
                        alert("删除失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});
var customPageListViewInstance = new customPageListView();








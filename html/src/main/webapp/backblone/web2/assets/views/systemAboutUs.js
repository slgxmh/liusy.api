var aboutUsListTemplate = loadTemplate("assets/templates/staff/systemAboutUs.html");
//1 、aboutUsEdit  关于我们信息编辑   view;
var aboutUsListView = Backbone.View.extend({//options...
    initialize : function() {
        //this.stickit();
    },
    el : '#aboutUs',
    model : new aboutUsListModel(),
    template : aboutUsListTemplate,
    render : function() {
        var self = this;
        if (this.template) {
            //使用模板+数据拼装DOM
            this.$el.html(this.template(this.model.attributes));
        }
        //返回自身，便于promise调用
        return this;
    },
    //关于我们列表加载
    loadAboutUsList : function(){
        this.model.save({},{
            type : "list",
            data : {
                // aboutUsImg : aboutUsImg,
                // aboutUsDesc : aboutUsDesc
            },
            success : function(model, resp, options) {//？返回了三个参数
                //self.render();
                var data = resp;
                console.log("viewData~~~aboutUsAdd"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "关于我们信息加载失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "关于我们信息加载失败", 2000);
                            break;
                        default:
                            alert("关于我们信息加载失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "关于我们信息加载失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "关于我们信息加载失败", 2000);
                        break;
                    default:
                        alert("关于我们信息加载失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //关于我们信息删除
    aboutUsDel : function(obj) {
        var self = this;
        var aboutUsId = '';
        this.model.save({},{
             type : "del",
            data : {
                aboutUsId : "1"
            },
            success : function(model, resp, options) {//？返回了三个参数
                //self.render();
                var data = resp;
                console.log("viewData~~~aboutUsDel"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                    $(obj).parent().parent().parent().remove();
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "关于我们信息删除失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "关于我们信息删除失败", 2000);
                            break;
                        default:
                            alert("关于我们信息删除失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "关于我们信息删除失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "关于我们信息删除失败", 2000);
                        break;
                    default:
                        alert("关于我们信息删除失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});
var aboutUsListViewInstance = new aboutUsListView();








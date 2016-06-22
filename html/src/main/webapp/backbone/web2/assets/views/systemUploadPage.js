//var customPageAddTemplate = loadTemplate("assets/templates/staff/systemUploadPage.html");
//1 、customPageAdd  自定义页面添加   view;
var customPageAddView = Backbone.View.extend({//options...
    initialize : function() {
        //this.stickit();
    },
    //el : '#uploadPage',
    model : new customPageAddModel(),
    // template : customPageAddTemplate,
    // render : function() {
        // var self = this;
        // if (this.template) {
            // //使用模板+数据拼装DOM
            // this.$el.html(this.template(this.model.attributes));
        // }
        // //返回自身，便于promise调用
        // return this;
    // },
    //自定义页面添加
    customPageAdd : function() {
        var self = this;
        var pageName = $("#pageName","#customPageUp").val();
        var pageType = "ACTIVITY";//活动
        var pageURL = "";
        if(pageName==''){
            alert("活动名称不能为空");
            return false;
        }else if(pageName.length>18){
            alert("活动名称不能超过18个字");
            return false;
        }
        if($("#file","#input-file").val()==""){
            alert("上传文件不能为空");
            return false;
        }
        this.model.save({},{
            data : {
                pageName : pageName,
                pageType : pageType,
                pageURL : pageURL
            },
            success : function(model, resp, options) {//？返回了三个参数
                //self.render();
                var data = resp;
                console.log("viewData~~~bannerList"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "自定义页面添加失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "自定义页面添加失败", 2000);
                            break;
                        default:
                            alert("自定义页面添加失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "自定义页面添加失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "自定义页面添加失败", 2000);
                        break;
                    default:
                        alert("自定义页面添加失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});
var customPageAddViewInstance = new customPageAddView();








var contactUsInfoTemplate = loadTemplate("assets/templates/staff/systemContactUs.html");
//1 、contactUsInfo  联系我们  view;
var contactUsInfoView = Backbone.View.extend({//options...
    initialize : function() {
        //this.stickit();
    },
    el : '#contactUs',
    model : new contactUsInfoModel(),
    template : contactUsInfoTemplate,
    render : function() {
        var self = this;
        if (this.template) {
            //使用模板+数据拼装DOM
            this.$el.html(this.template(this.model.attributes));
        }
        //返回自身，便于promise调用
        return this;
    },
    //联系我们信息加载
    loadcontactUsInfo : function(){
        var self = this;
        this.model.fetch({
            type : "info",
            success : function(model, resp, options) {//？返回了三个参数
                self.render();
                var data = resp;
                console.log("viewData~~~loadcontactUsInfo"+JSON.stringify(data));
                if (data.status === "0") {
                    //alert(data.msg);
                    localStorage["sys_contactUsId"] = data.data[0].id; 
                    $("#sys_prePhone").val(data.data[0].preSalePhone);
                    $("#sys_serPhone").val(data.data[0].servicePhone);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "联系我们信息加载失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "联系我们信息加载失败", 2000);
                            break;
                        default:
                            alert("联系我们信息加载失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "联系我们信息加载失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "联系我们信息加载失败", 2000);
                        break;
                    default:
                        alert("联系我们信息加载失败", 2000);
                        break;
                }
            }
        });
        return false;
    },
    //联系我们信息编辑
    contactUsEdit : function() {
        var self = this;
        var id = localStorage["sys_contactUsId"];
        var preSalePhone = $("#sys_prePhone").val();
        var servicePhone = $("#sys_serPhone").val();//活动
        var regPhone = /d/;
        if(!preSalePhone || !servicePhone){
            alert("电话不能为空")
            return false;
        }else if(regPhone.test(preSalePhone) || regPhone.test(servicePhone)){
            alert("您输入的电话格式不正确，请重新输入！");
            return false;
        }
        this.model.save({},{
            type : "edit",
            data : {
                id : id,
                preSalePhone : preSalePhone,
                servicePhone : servicePhone
            },
            success : function(model, resp, options) {//？返回了三个参数
                var data = resp;
                console.log("viewData~~~contactUsEdit"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "联系我们信息编辑失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "联系我们信息编辑失败", 2000);
                            break;
                        default:
                            alert("联系我们信息编辑失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "联系我们信息编辑失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "联系我们信息编辑失败", 2000);
                        break;
                    default:
                        alert("联系我们信息编辑失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});
var contactUsInfoViewInstance = new contactUsInfoView();








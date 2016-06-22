var aboutUsAddTemplate = loadTemplate("assets/templates/staff/systemAboutUs_addInfo.html");
//1 、aboutUsAdd  关于我们信息添加   view;
var aboutUsAddView = Backbone.View.extend({//options...
    initialize : function() {
        //this.stickit();
    },
    el : '#addInfo',
    model : new aboutUsAddModel(),
    template : aboutUsAddTemplate,
    render : function() {
        var self = this;
        if (this.template) {
            //使用模板+数据拼装DOM
            this.$el.html(this.template(this.model.attributes));
        }
        //返回自身，便于promise调用
        return this;
    },
    //编辑操作入口 初始 加载关于我们信息
    loadAboutUsInfo : function() {
        var self = this;
        self.render();
        //alert("aboutUsImg"+localStorage["aboutUsImg"]);
        //alert("aboutUsDesc"+localStorage["aboutUsDesc"]);
        //$("#aboutUs_img").attr("src",localStorage["aboutUsImg"]);
        //("#cInfoarea").val(localStorage["aboutUsDesc"]);
        /*
        this.model.save({},{
                    type : "editInfo",
                    data: {
                        //username : "xiaohong@bestseller.com"
                    },
                    success : function(model, resp, options) {//锛熻繑鍥炰簡涓変釜鍙傛暟
                        self.render();
                        $("#aboutUs_img").attr("src",localStorage["aboutUsImg"]);
                        $("#cInfoarea").val(localStorage["aboutUsDesc"]);
                        var data = resp;
                        //console.log("viewData~~~"+JSON.stringify(data));
                        if (data.status === "0") {
                            
                            //$("#aboutUs_img").attr("src",data.data.userName);
                            //$("#cInfoarea").val(data.data.realName);
                            //localStorage["userId"] = data.data.userId; 
                        }else{
                            switch(data.status) {
                                case "-1":
                                    alert(data.msg || "鍔犺浇鍏充簬鎴戜滑淇℃伅澶辫触", 2000);
                                    break;
                                case "-2":
                                    alert(data.msg || "鍔犺浇鍏充簬鎴戜滑淇℃伅澶辫触", 2000);
                                    break;
                                default:
                                    alert("鍔犺浇鍏充簬鎴戜滑淇℃伅澶辫触", 2000);
                                    break;
                            }
                        }
                    },
                    error : function(model, err, options) {
                        switch(err.status) {
                            case "-1":
                                alert(err.msg || "鍔犺浇鍏充簬鎴戜滑淇℃伅澶辫触", 2000);
                                break;
                            case "-2":
                                alert(err.msg || "鍔犺浇鍏充簬鎴戜滑淇℃伅澶辫触", 2000);
                                break;
                            default:
                                alert("鍔犺浇鍏充簬鎴戜滑淇℃伅澶辫触", 2000);
                                break;
                        }
                    }
                });*/
        
        return false;
    },
    //关于我们新信息添加
/*
    aboutUsAdd : function() {
        var self = this;
        var aboutUsImg = $("#aboutUs_img").attr("src");
        var aboutUsDesc = $("#cInfoarea").val();//娲诲姩
        this.model.save({},{
            type : "addNew",
            data : {
                aboutUsImg : aboutUsImg,
                aboutUsDesc : aboutUsDesc
            },
            success : function(model, resp, options) {//锛熻繑鍥炰簡涓変釜鍙傛暟
                //self.render();
                var data = resp;
                console.log("viewData~~~aboutUsAdd"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                    alert(data.msg);
                }else{
                    switch(data.status) {
                        case "-1":
                            alert(data.msg || "鍏充簬鎴戜滑淇℃伅娣诲姞澶辫触", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "鍏充簬鎴戜滑淇℃伅娣诲姞澶辫触", 2000);
                            break;
                        default:
                            alert("鍏充簬鎴戜滑淇℃伅娣诲姞澶辫触", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "鍏充簬鎴戜滑淇℃伅娣诲姞澶辫触", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "鍏充簬鎴戜滑淇℃伅娣诲姞澶辫触", 2000);
                        break;
                    default:
                        alert("鍏充簬鎴戜滑淇℃伅娣诲姞澶辫触", 2000);
                        break;
                }
            }
        });
        return false;
    },*/

    //关于我们信息编辑/添加
    aboutUsEdit : function() {
        var self = this;
        var aboutUsId = "1";
        var aboutUsImg = $("#aboutUs_img").attr("src");
        var aboutUsDesc = $("#cInfoarea").val();//活动
        this.model.save({},{
            type : "editInfo",
            data : {
                aboutUsId : '1',
                aboutUsImg : aboutUsImg,
                aboutUsDesc : aboutUsDesc
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
                            alert(data.msg || "关于我们信息添加失败", 2000);
                            break;
                        case "-2":
                            alert(data.msg || "关于我们信息添加失败", 2000);
                            break;
                        default:
                            alert("关于我们信息添加失败", 2000);
                            break;
                    }
                }
            },
            error : function(model, err, options) {
                console.log("viewDataerr~~~"+JSON.stringify(err));
                switch(err.status) {
                    case "-1":
                        alert(err.msg || "关于我们信息添加失败", 2000);
                        break;
                    case "-2":
                        alert(err.msg || "关于我们信息添加失败", 2000);
                        break;
                    default:
                        alert("关于我们信息添加失败", 2000);
                        break;
                }
            }
        });
        return false;
    }
});
var aboutUsAddViewInstance = new aboutUsAddView();








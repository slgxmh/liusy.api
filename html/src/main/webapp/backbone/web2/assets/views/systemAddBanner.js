//var bannerAddTemplate = loadTemplate("assets/templates/staff/systemAddBanner.html");
//1 、bannerAdd   view;
var bannerAddView = Backbone.View.extend({//options...
    initialize : function() {
        //this.stickit();
    },
    model : new bannerAddModel(),
    //初始 加载banner列表
    bannerAdd : function() {
        var self = this;
        var bannerImg = $("#file").val()
        var bannerURL = $("#bannerURL").val();
        var bannerName = $("#bannerName").val();
        var bannerType = "ACTIVITY";
        // alert("bannerImg~"+bannerImg);
        // alert("bannerURL~"+bannerURL);
        // alert("bannerName~"+bannerName);
        this.model.save({}, {
            data: {
                bannerImg : bannerImg,
                bannerURL : bannerURL,
                bannerName : bannerName,
                bannerType : bannerType
                //classId(可选) : ''
            },
            success : function(model, resp, options) {//？返回了三个参数
                var data = resp;
                console.log("viewData~~~bannerList"+JSON.stringify(data));
                if (data.status === "0") {
                    //todo...
                    $("#bannerImg").attr("src",bannerImg);
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
    }
});
var bannerAddViewInstance = new bannerAddView();








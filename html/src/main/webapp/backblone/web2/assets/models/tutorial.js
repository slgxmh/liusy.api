
//1、发布教程Model;
var addNorCourseModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    parse : function(resp){
        //返回数据预处理
        console.log("modelResp---feedbackListModel!!"+JSON.stringify(resp));
        return resp;
    },
    sync : function(method, model, options) {
        var platformType = localStorage["logintype"];
        console.log("models_platformType:"+platformType);
        switch(method) {
        case "create":
        case "update":
        case "patch":
            switch(platformType){
                case "H5":
                    //aboutUsAddDGBService.request(options.data, options);
                    break;
                case "DGB":
                    switch(options.type){
                        case "norCourse":
                            addNorCourseDGBService.request(options.data, options);
                            break;
                        case "picCourse":
                            addPicCourseDGBService.request(options.data, options);
                            break;
                    }
                    break;
            }
            break;
        case "read":
            break;
        case "delete":
            break;
        default:
            break;
        }
    }
});

//2、教程信息管理列表、查询、删除Model;
var courseListModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    parse : function(resp){
        //返回数据预处理
        console.log("modelResp---courseListModel!!"+JSON.stringify(resp));
        //alert("courseListModel~~~"+resp.data.length);
        if(this.attributes.type=="list"){
            for(var i=0; i<resp.data.length;i++){
                if(resp.data[i].courseStatus==="SHOW"){
                    resp.data[i].courseStatus_status = "显示";
                    resp.data[i].courseStatus_handle = "隐藏";
                }else{
                    resp.data[i].courseStatus_status = "隐藏";
                    resp.data[i].courseStatus_handle = "显示";
                }
            }
        }
        return resp;
    },
    sync : function(method, model, options) {
        var platformType = localStorage["logintype"];
        console.log("models_platformType:"+platformType);
        switch(method) {
        case "create":
        case "update":
        case "patch":
        
            switch(platformType){
                case "H5":
                    //aboutUsAddDGBService.request(options.data, options);
                    break;
                case "DGB":
                    this.attributes.type = options.type;
                    console.log(this.attributes);
                    switch(options.type){
                        case "search":
                            courseListDGBService.request(options.data, options);
                            break;
                        case "del":
                            courseDelDGBService.request(options.data, options);
                            break;
                        case "editStatus":
                            courseStatusEditDGBService.request(options.data, options);
                            break;
                    }
                    break;
            }
            break;
        case "read":
            switch(platformType){
                 case "H5":
                    //aboutUsAddDGBService.request(options.data, options);
                    break;
                case "DGB":
                    this.attributes.type = options.type;
                    courseListDGBService.request({}, options);
            }
            break;
        case "delete":
            break;
        default:
            break;
        }
    }
});



//3、教程分类(教程信息维护) 列表、编辑、添加、删除Model;
var courseClassifyListModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    parse : function(resp){
        //返回数据预处理
        console.log("modelResp---feedbackListModel!!"+JSON.stringify(resp));
        return resp;
    },
    sync : function(method, model, options) {
        var platformType = localStorage["logintype"];
        console.log("models_platformType:"+platformType);
        switch(method) {
        case "create":
        case "update":
        case "patch":
            switch(platformType){
                case "H5":
                    //aboutUsAddDGBService.request(options.data, options);
                    break;
                case "DGB":
                    switch(options.type){
                        case "add":
                            courseClassifyAddDGBService.request(options.data, options);
                            break;
                        case "del":
                            courseClassifyDelDGBService.request(options.data, options);
                            break;
                        case "edit":
                            courseClassifyEditDGBService.request(options.data, options);
                            break;
                    }
                    break;
            }
            break;
        case "read":
            switch(platformType){
                case "H5":
                    //aboutUsAddDGBService.request(options.data, options);
                    break;
                case "DGB":
                    courseClassifyListDGBService.request({}, options);
            }
            break;
        case "delete":
            break;
        default:
            break;
        }
    }
});


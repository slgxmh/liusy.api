var loginModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    validate : function(attrs, options) {
        //校验
        // if (!attrs.username) {
            // return tools.getString('1001');
        // } else if (utils.validateTelphoneNumber(attrs.username) === false) {
            // return tools.getString('1002');
        // }
        
        // if (!attrs.password) {
            // return tools.getString('1003');
        // }
    },
    parse : function(resp){
        //返回数据预处理
        return resp;
    },
    sync : function(method, model, options) {
        switch(method) {
        case "create":
        case "update":
        case "patch":
            switch(options.data.logintype){
                case "H5":
                    loginH5Service.request(this.toJSON(), options);
                    break;
                case "DGB":
                    loginDGBService.request(this.toJSON(), options);
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



//注销  model
var loginOutModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    validate : function(attrs, options) {
        //校验
    },
    parse : function(resp){
        //返回数据预处理
        return resp;
    },
    sync : function(method, model, options) {
        var platformType = localStorage["logintype"];
        console.log(platformType);
        switch(method) {
        case "create":
        case "update":
        case "patch":
            break;
        case "read":
            switch(platformType){
                case "H5":
                    loginoutH5Service.request({}, options);
                    break;
                case "DGB":
                    loginoutDGBService.request({}, options);
                    break;
            }
            break;
        case "delete":
            break;
        default:
            break;
        }
    }
});
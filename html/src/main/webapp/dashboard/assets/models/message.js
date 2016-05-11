var messageModel = Backbone.Model.extend({
})

var messageCollection = Backbone.Collection.extend({
    model : messageModel,
    parse : function(resp) {
        this.pages.num=0;
        this.pages.count=3;
        this.pages.size=20;
        return resp.data;
    },
    pages : {
        num : 0,
        count : 0,
        size : 20
    },
    sync : function(method, model, options) {
        switch(method) {
        case "create":
        case "update":
        case "patch":
            break;
        case "read":
            messageListViewService.request({}, options);
            break;
        case "delete":
            break;
        default:
            break;
        }
    }
})

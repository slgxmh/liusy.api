var classifyManageModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    validate : function(attrs, options) {
        
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
            switch(localStorage["logintype"]){
                case "H5":
                switch(options.data.handle){
                    case "add":
                    classifyAddH5Service.request(options.data, options);
                    break;
                    case "del":
                    classifyDelH5Service.request(options.data, options);
                    break;
                    case "edit":
                    classifyEditH5Service.request(options.data, options);
                    break;
                }
                break;
                case "DGB":
                    switch(options.data.type){
                        case "goodsClassify":
                            switch(options.data.handle){
                                case "add":
                                classifyAddDGBService.request(options.data, options);
                                break;
                                case "del":
                                classifyDelDGBService.request(options.data, options);
                                break;
                                case "edit":
                                classifyEditDGBService.request(options.data, options);
                                break;
                            }
                            break;
                        case "guideClassify":
                            switch(options.data.handle){
                                case "add":
                                DGBclassifyAddService.request(options.data, options);
                                break;
                                case "del":
                                DGBclassifyDelService.request(options.data, options);
                                break;
                                case "edit":
                                DGBclassifyEditService.request(options.data, options);
                                break;
                            }
                            break;    
                    }  
                break;
            }         
            break;
        case "read":
            switch(localStorage["logintype"]){
                case "H5":
                    classifyListH5Service.request(options.data, options);
                    break;
                case "DGB":
                    switch(options.data.type){
                        case "goodsClassify":
                            classifyListDGBService.request(options.data, options);
                            break;
                        case "guideClassify":
                            DGBclassifyListService.request(options.data, options);
                            break;    
                    }                    
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

var classifySaveModel = Backbone.Model.extend({
    initialize : function() {
        this.set({})
    },
    validate : function(attrs, options) {
        
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
            switch(localStorage["logintype"]){
                case "H5":
                switch(options.data.handle){
                    case "add":
                    classifyAddH5Service.request(options.data, options);
                    break;
                    case "del":
                    classifyDelH5Service.request(options.data, options);
                    break;
                    case "edit":
                    classifyEditH5Service.request(options.data, options);
                    break;
                }
                break;
                case "DGB":
                    switch(options.data.type){
                        case "goodsClassify":
                            switch(options.data.handle){
                                case "add":
                                classifyAddDGBService.request(options.data, options);
                                break;
                                case "del":
                                classifyDelDGBService.request(options.data, options);
                                break;
                                case "edit":
                                classifyEditDGBService.request(options.data, options);
                                break;
                            }
                            break;
                        case "guideClassify":
                            switch(options.data.handle){
                                case "add":
                                DGBclassifyAddService.request(options.data, options);
                                break;
                                case "del":
                                DGBclassifyDelService.request(options.data, options);
                                break;
                                case "edit":
                                DGBclassifyEditService.request(options.data, options);
                                break;
                            }
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
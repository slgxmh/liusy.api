(function() {
    var AppRouter = Backbone.Router.extend({
        initialize : function() {
            //console.log("Route initialize");
        },
        deps : {
            //MSS添加如下
            index : [
                "assets/services/index.js", 
                "assets/models/index.js", 
                "assets/views/index.js"
            ],
            //banner管理系统开始
            bannerManage : [
                "assets/services/systemBannerManage.js", 
                "assets/models/systemBannerManage.js", 
                "assets/views/systemBannerManage.js"
            ],
            addBanner : [
                "assets/services/systemAddBanner.js", 
                "assets/models/systemAddBanner.js", 
                "assets/views/systemAddBanner.js"
            ],
            //导购宝端banner管理系统开始
            bannerManageTreasure : [
                "assets/services/systemBannerManage.js", 
                "assets/models/systemBannerManage.js", 
                "assets/views/systemBannerManage.js"
            ],
            addBannerTreasure : [
                "assets/services/systemAddBanner.js", 
                "assets/models/systemAddBanner.js", 
                "assets/views/systemAddBanner.js"
            ],
            //导购宝端banner管理系统结束
            custom : [
                "assets/services/systemCustom.js", 
                "assets/models/systemCustom.js", 
                "assets/views/systemCustom.js"
            ],
            uploadPage : [
                "assets/services/systemUploadPage.js", 
                "assets/models/systemUploadPage.js", 
                "assets/views/systemUploadPage.js"
            ],
            aboutUs : [
                "assets/services/systemAboutUs.js", 
                "assets/models/systemAboutUs.js", 
                "assets/views/systemAboutUs.js"
            ],
            addInfo : [
                "assets/services/systemAboutUs_addInfo.js", 
                "assets/models/systemAboutUs_addInfo.js", 
                "assets/views/systemAboutUs_addInfo.js"
            ],
            contactUs : [
                "assets/services/systemContactUs.js", 
                "assets/models/systemContactUs.js", 
                "assets/views/systemContactUs.js"
            ],
            feedback : [
                "assets/services/systemFeedback.js", 
                "assets/models/systemFeedback.js", 
                "assets/views/systemFeedback.js"
            ],
            //banner管理系统结束
            
            //用户管理 系统开始
            userManage : [
                "assets/services/userManage.js", 
                "assets/models/userManage.js", 
                "assets/views/userManage.js"
            ],
            adduser : [
                "assets/services/userAddUser.js", 
                "assets/models/userAddUser.js", 
                "assets/views/userAddUser.js"
            ],
            //用户管理系统 结束
            //教程管理  开始
            tutorialPublish : [
                "assets/services/tutorial.js", 
                "assets/models/tutorial.js", 
                "assets/views/tutorial.js"
            ],
            tutorialManager : [
                "assets/services/tutorial.js", 
                "assets/models/tutorial.js", 
                "assets/views/tutorial.js"
            ],
            tutorialMaintain : [
                "assets/services/tutorial.js", 
                "assets/models/tutorial.js", 
                "assets/views/tutorial.js"
            ],
            //教程管理  结束
            //MSS end
            goodsPublishList : [
                "assets/services/goodsManage.js",
                "assets/services/goodsClassify.js", 
                "assets/models/goodsPublishList.js",
                "assets/models/classifyList.js",
                "assets/models/goodsTypes.js",
                "assets/views/goodsPublishList.js"],
            goodsInfo : [
                "assets/services/goodsManage.js",
                "assets/services/goodsClassify.js", 
                "assets/models/goodsInfo.js",
                "assets/models/classifyList.js",
                "assets/models/goodsTypes.js",
                "assets/views/goodsInfo.js"],
            goodsClassify : [
                "assets/services/goodsClassify.js", 
                "assets/models/goodsClassifyManage.js",
                "assets/views/goodsClassifyManage.js"],
            goodsDetail : [
                "assets/services/goodsManage.js", 
                "assets/models/goodsDetail.js",
                "assets/views/goodsDetail.js"],
            goodsPublish : [
                "assets/services/goodsManage.js", 
                "assets/models/goodsDetail.js",
                "assets/views/goodsPublish.js"],
            goodsImport : [
                "assets/services/goodsImport.js", 
                "assets/models/goodsImport.js",
                "assets/views/goodsImport.js"],
            orderAll : [
                "assets/services/order.js", 
                "assets/models/orderAll.js",
                "assets/views/orderAll.js"],
            orderAfterSale : [
                "assets/services/order.js", 
                "assets/models/orderAfterSaleList.js",
                "assets/views/orderAfterSaleList.js"],
            orderExport : [
                "assets/services/order.js", 
                "assets/models/orderExport.js",
                "assets/views/orderExport.js"],
            fittingWall : [
                "assets/services/fittingWall.js", 
                "assets/models/fittingWall.js",
                "assets/views/fittingWall.js"]
            
        },
        routes : {            
            //MSS添加如下
            'passwordEdit' : 'passwordEdit',
            'goIndex' : 'goIndex',
            'index' : 'index',
            'goodsPublishList': 'goodsPublishList',
            'goodsPublish' : 'goodsPublish',
            'goodsDetail' : 'goodsDetail',
            'goodsInfo' : 'goodsInfo',
            'goodsClassify' : 'goodsClassify',
            'goodsImport' : 'goodsImport',
            //订单管理模块
            'orderAll' : 'orderAll',
            'orderAfterSale' : 'orderAfterSale',
            'orderAbnormal' : 'orderAbnormal',
            'orderExport' : 'orderExport',
            'orderDetail' : 'orderDetail',
            'orderDetailAfterSale' : 'orderDetailAfterSale',
            //试衣墙管理
            'fittingWall' : 'fittingWall',
            //教程管理
            'tutorialPublish' : 'tutorialPublish',
            'tutorialManager' : 'tutorialManager',
            //走了同步'tutorialManagerContent' : 'tutorialManagerContent',
            'tutorialMaintain' : 'tutorialMaintain',
            //系统管理模块
            'bannerManage' :'bannerManage',
            'addBanner' :'addBanner',
            'goBannerManage' :'goBannerManage',
            //banner管理 导购宝端    开始
            'bannerManageTreasure' : 'bannerManageTreasure',
            'addBannerTreasure' : 'addBannerTreasure',
            'goBannerManageTreasure' : 'goBannerManageTreasure',
            //banner管理 导购宝端    结束
            'custom' : 'custom',
            'uploadPage' :'uploadPage',
            'goCustom' : 'goCustom',
            'aboutUs' : 'aboutUs',
            'addInfo' : 'addInfo',//点击编辑跳转
            'addInfo_add' : 'addInfo_add',//点击添加新信息 跳转
            //'goAboutUs' : 'goAboutUs',
            'contactUs' : 'contactUs',
            'feedback' : 'feedback',
            //用户管理模块 
            'userManage' : 'userManage',
            'adduser' : 'adduser',
            'adduser_add' : 'adduser_add',
            //MSS end
        },
        //MSS添加如下
        passwordEdit : function() {
            var name = 'passwordEdit';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");                    
            $template.loadByDom($("#"+name)); 
        },
/*
        goIndex : function() {
            var name = 'goIndex';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");                    
            $template.loadByDom($("#"+name)); 
        },     */

        index : function() {
            var name = 'index';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");                    
            //$template.loadByDom($("#"+name)); 
            loadSequence(this.deps[name], function() {
                newIndexView.load();
            })
        },
        goodsPublishList: function(){
            var name = 'goodsPublishList';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");                                 
            $template.loadByDom($("#"+name)); 
            loadSequence(this.deps[name], function() {                                               
                var newclassifyListView = new classifyListView();
                var newGoodsPublishListView = new goodsPublishListView();
                var newGetGoodsTypesView = new getGoodsTypesView();
                newGetGoodsTypesView.loadGoodsTypes();
                newGoodsPublishListView.loadGoodsList({});
                newclassifyListView.loadClassifyList();
            })          
        },
        goodsInfo: function(){
            var name = 'goodsInfo';
            $('.active', '.staff-main').removeClass("active").removeClass("in");  
            $("#"+name, '.staff-main').addClass("active").addClass("in");                    
            $template.loadByDom($("#"+name)); 
            loadSequence(this.deps[name], function() {    
                var newGoodsInfoListView = new goodsInfoListView();
                var newGetGoodsTypesView22 = new getGoodsTypesView22();
                var newclassifyListView22 = new classifyListView22();            
                newGetGoodsTypesView22.loadGoodsTypes();
                newGoodsInfoListView.loadGoodsList({});
                newclassifyListView22.loadClassifyList();
            }) 
        },
        goodsPublish: function(){
            var name = 'goodsPublish';
            $('.active', '.staff-main').removeClass("active").removeClass("in"); 
            $("#"+name, '.staff-main').addClass("active").addClass("in");                  
            loadSequence(this.deps[name], function() {                
                newGoodsPublishlView.load();
            }) 
        },
        goodsDetail: function(){
            var name = 'goodsDetail';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");                    
            //$template.loadByDom($("#"+name));
            loadSequence(this.deps[name], function() {                
                newGoodsDetailView.load();
            }) 
        },
        goodsImport: function(){
            var name = 'goodsImport';
            $('.active', '.staff-main').html("");
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");                    
            $template.loadByDom($("#"+name));
            loadSequence(this.deps[name], function() {                
                
            }) 
        },
        goodsClassify: function(){
            var name = 'goodsClassify';
            $('.active', '.staff-main').html("");
            $('.active', '.staff-main').removeClass("active").removeClass("in"); 
            $("#"+name, '.staff-main').addClass("active").addClass("in");                    
            $template.loadByDom($("#"+name)); 
            loadSequence(this.deps[name], function() {                
                newclassifyManageView.load();
            }) 
        },
        
        //订单管理模块
        orderAll: function(){
            var name = 'orderAll';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            $template.loadByDom($("#"+name));
            loadSequence(this.deps[name], function() {
                var newOrderAllView = new orderAllView();
                newOrderAllView.loadOrderList();
            })
        },
        orderAfterSale: function(){
            var name = 'orderAfterSale';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            $template.loadByDom($("#"+name));
            loadSequence(this.deps[name], function() {
                var newOrderAfterSaleView = new orderAfterSaleView();
                newOrderAfterSaleView.loadOrderList();
            })
        },
        orderAbnormal: function(){
            var name = 'orderAbnormal';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            $template.loadByDom($("#"+name));
        },
        orderExport: function(){
            var name = 'orderExport';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            $template.loadByDom($("#"+name));
            loadSequence(this.deps[name], function() {                
                newOrderExportView.loadTable(new Date().getFullYear(),new Date().getMonth()+1);
            })
        },
        //试衣墙管理
        fittingWall: function(){
            var name = 'fittingWall';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            $template.loadByDom($("#"+name));
            loadSequence(this.deps[name], function() {                
                newFittingWallView.load();
            })
        },

        //教程管理  开始
        tutorialPublish: function(){
            var name = 'tutorialPublish';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            loadSequence(this.deps[name], function() {
                $template.loadByDom($("#"+name));                
                //newFittingWallView.load();
            });
        },
        tutorialManager: function(){
            var name = 'tutorialManager';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            //$template.loadByDom($("#"+name));
            loadSequence(this.deps[name], function() {
                courseListViewInstance.loadCourseList();
            });
        },
        tutorialMaintain: function(){
            var name = 'tutorialMaintain';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            loadSequence(this.deps[name], function() {
                var courseClassifyListInstance = new courseClassifyList();
                courseClassifyListInstance.loadCourseClassifyList();
            })
        },
        //教程管理  结束
        //系统管理模块
         bannerManage:function(){
            var name = 'bannerManage';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            //$template.loadByDom($("#"+name));bannerManage
            loadSequence(this.deps[name], function() {
                //console.log(bannerListViewInstance)
                bannerListViewInstance.loadbannerList();//初始 加载banner列表
            }); 
        },
        addBanner:function(){
            var name = 'addBanner';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            loadSequence(this.deps[name], function() {
               $template.loadByDom($("#"+name));
            }); 
        },

        //banner管理 导购宝端    开始
        bannerManageTreasure:function(){
            var name = 'bannerManageTreasure';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            loadSequence(this.deps[name], function() {
                //$template.loadByDom($("#"+name));
                bannerDGBListViewInstance.loadbannerList();//初始 加载banner列表
            }); 
        },
        addBannerTreasure:function(){
            var name = 'addBannerTreasure';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            //$template.loadByDom($("#"+name));
            loadSequence(this.deps[name], function() {
               $template.loadByDom($("#"+name));
            }); 
        },
        //banner管理 导购宝端    结束
        custom:function(){
            var name = 'custom';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            //$template.loadByDom($("#"+name));
            loadSequence(this.deps[name], function() {
               customPageListViewInstance.loadCustomPageList();
            });
        },
        uploadPage:function(){
            var name = 'uploadPage';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            loadSequence(this.deps[name], function() {
               $template.loadByDom($("#"+name));
               //customPageAddViewInstance.customPageAdd();
            });
        },
        aboutUs:function(){
            var name = 'aboutUs';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            loadSequence(this.deps[name], function() {
               $template.loadByDom($("#"+name));
               //aboutUsListViewInstance.loadAboutUsList();
            });
        },
        //关于我们——编辑信息入口
        addInfo:function(){
            var name = 'addInfo';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            //$template.loadByDom($("#"+name));
            loadSequence(this.deps[name], function() {
               aboutUsAddViewInstance.loadAboutUsInfo();
            });
        },
        //关于我们——添加新信息入口
        addInfo_add:function(){
            var name = 'addInfo';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            //$template.loadByDom($("#"+name));
            loadSequence(this.deps[name], function() {
               $template.loadByDom($("#"+name));
            });
        },
        // goAboutUs:function(){
            // var name = 'goAboutUs';
            // $('.active', '.staff-main').removeClass("active").removeClass("in");
            // $("#"+name, '.staff-main').addClass("active").addClass("in");
            // $template.loadByDom($("#"+name));
        // },
        contactUs:function(){
            var name = 'contactUs';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            //$template.loadByDom($("#"+name));
            loadSequence(this.deps[name], function() {
               contactUsInfoViewInstance.loadcontactUsInfo();
            });
        },
        feedback:function(){
            var name = 'feedback';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            //$template.loadByDom($("#"+name));
            loadSequence(this.deps[name], function() {
               feedbackListViewInstance.loadfeedbackList();
            });
        },
        //系统管理模块    结束
        //用户管理模块    开始
        userManage:function(){
            var name = 'userManage';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            loadSequence(this.deps[name], function() {
                //console.log(userManageViewInstance)
                userManageViewInstance.loadUserInfoList();//初始 加载员工列表
            }); 
        },
        //用户列表   用户名入口
        adduser:function(){
            var name = 'adduser';
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            loadSequence(this.deps[name], function() {
                //console.log(userInfoViewInstance)
                userInfoViewInstance.loadUserInfo();//  用户信息 展示
            }); 
        },
        //添加新用户入口
        adduser_add:function(){
            var name = 'adduser';            
            $('.active', '.staff-main').removeClass("active").removeClass("in");
            $("#"+name, '.staff-main').addClass("active").addClass("in");
            $("#"+name).html("");
            $template.loadByDom($("#"+name));
            loadSequence(this.deps[name], function() {
                //console.log(userInfoViewInstance)
                //userInfoViewInstance.loadUserInfo();//  用户信息 展示
            }); 
        },
        //用户管理模块   结束
        //MSS end
    });
    window.appRouter = new AppRouter();
    Backbone.history.start();
    appRouter.navigate("index",{trigger: true});
})($);


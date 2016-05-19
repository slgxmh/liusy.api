/*
 * 接口地址定义在urls集合中 IP:port/appid/sid/
 */
var appId = "sappwhp";
var baseIp_H5 = "http://192.168.4.11:9063/";
var baseIp_DGB = "http://192.168.4.11:9064/";

var baseUrl = baseIp_DGB+(localStorage["sid"] ? appId+"/"+localStorage["sid"]+"/" : "");//导购宝
var baseUrl_H5 = baseIp_H5+(localStorage["sid"] ? appId+"/"+localStorage["sid"]+"/" : "");

var constant = {
    INTERFACE_INIT_H5 : baseUrl_H5+"serviceInit/init",
    INTERFACE_INIT_DGB : baseUrl+"serviceInit/init",
    //登录接口如下 位于login.js
    INTERFACE_LOGIN_H5 : baseUrl_H5+"user/loginH5",
    INTERFACE_LOGIN_DGB : baseUrl+"user/loginDGB",
    //注销接口如下
    INTERFACE_LOGINOUT_H5 : baseUrl_H5+"user/logoutH5",
    INTERFACE_LOGINOUT_DGB : baseUrl+"user/logoutDGB",
    //密码修改接口如下
    INTERFACE_PASSWORDEDIT_H5 : baseUrl_H5+"user/passwordEditH5",
    INTERFACE_PASSWORDEDIT_DGB : baseUrl+"user/passwordEditDGB",
    
    //首页昨日事项和销售统计接口如下 位于index.js
    INTERFACE_SALEDATA_H5 : baseUrl_H5+"index/salesStatH5",
    INTERFACE_SALEDATA_DGB : baseUrl+"index/salesStatDGB",
    
    
    /*商品管理模块接口   位于goodsManage.js*/
    //商品发布列表接口  
    INTERFACE_GOODSPUBLISHLIST_H5 : baseUrl_H5+"goods/neverPublishListH5",
    INTERFACE_GOODSPUBLISHLIST_DGB : baseUrl+"goods/goods/neverPublishListDGB",
   
    //商品    发布接口  
    INTERFACE_GOODSRELEASE_H5 : baseUrl_H5+"goods/releaseH5",
    INTERFACE_GOODSRELEASE_DGB : baseUrl+"goods/releaseDGB",
    
    //  商品查看接口      
    INTERFACE_GETGOODSBYID_H5 : baseUrl_H5+"goods/getGoodsByIdH5",
    INTERFACE_GETGOODSBYID_DGB : baseUrl+"goods/getGoodsByIdDGB",
   
    //  商品发布列表查询接口      
    INTERFACE_GETGOODSLIST_H5 : baseUrl_H5+"goods/getGoodsListH5",
    INTERFACE_GETGOODSLIST_DGB : baseUrl+"goods/getGoodsListDGB",
    
    //  批量设置分类提交接口      
    INTERFACE_SETCLASSIFY_H5 : baseUrl_H5+"goods/setClassifyH5",
    INTERFACE_SETCLASSIFY_DGB : baseUrl+"goods/setClassifyDGB",
    
    //  永久下架接口     
    INTERFACE_UNSHELVE_H5 : baseUrl_H5+"goods/unShelveH5",
    INTERFACE_UNSHELVE_DGB : baseUrl+"goods/unShelveDGB",
    
    //  货架调整提交接口     
    INTERFACE_SHELVEMODIFY_H5 : baseUrl_H5+"goods/shelveModifyH5",
    INTERFACE_SHELVEMODIFY_DGB : baseUrl+"goods/shelveModifyDGB",
    
    //  商品导出接口 
    INTERFACE_GOODSEXCEL_H5 : baseUrl_H5+"goods/goodsExcelH5",
    INTERFACE_GOODSEXCEL_DGB : baseUrl+"goods/goodsExcelDGB",
    
    //  商品类型接口 
    INTERFACE_GOODSTYPEQUERY_H5 : baseUrl_H5+"goods/goodsTypeQueryH5",
    INTERFACE_GOODSTYPEQUERY_DGB : baseUrl+"goods/goodsTypeQueryDGB",
    
    //  商品状态接口 
    INTERFACE_GOODSSTATUSQUERY_H5 : baseUrl_H5+"goods/goodsStatusQueryH5",
    INTERFACE_GOODSSTATUSQUERY_DGB : baseUrl+"goods/goodsStatusQueryDGB",
    
    //  商品上下架接口 
    INTERFACE_GOODSSTATUSEDIT_H5 : baseUrl_H5+"goods/goodsStatusEditH5",
    INTERFACE_GOODSSTATUSEDIT_DGB : baseUrl+"goods/goodsStatusEditDGB",
    
    //  商品详情接口 
    INTERFACE_GOODSDETAILQUERY_H5 : baseUrl_H5+"goods/goodsDetailQueryH5",
    INTERFACE_GOODSDETAILQUERY_DGB : baseUrl+"goods/goodsDetailQueryDGB",
    
    //  同步商品管理(分类)接口（DGB同步H5）    
    INTERFACE_SYNCH5CLASSIFY_DGB : baseUrl+"goods/syncH5Classify",
    
    //  商品分类 (DGB)列表接口 
    INTERFACE_DGBCLASSIFYQUERY_DGB : baseUrl+"goods/DGBclassifyQuery",
    INTERFACE_DGBCLASSIFYADD_DGB : baseUrl+"goods/DGBclassifyAdd",
    INTERFACE_DGBCLASSIFYEDIT_DGB : baseUrl+"goods/DGBclassifyEdit",
    INTERFACE_DGBCLASSIFYDEL_DGB : baseUrl+"goods/DGBclassifyDel",//导购自定义分类！！！
    
    INTERFACE_CLASSIFYLIST_DGB : baseUrl+"goods/classifyListDGB",
    INTERFACE_CLASSIFYADD_DGB : baseUrl+"goods/classifyAddDGB", 
    INTERFACE_CLASSIFYDEL_DGB : baseUrl+"goods/classifyDelDGB",
    INTERFACE_CLASSIFYEDIT_DGB : baseUrl+"goods/classifyEditDGB",//导购宝商品分类！！！
    
    //INTERFACE_CLASSIFYPUSH_DGB : baseUrl+"goods/classifyPushDGB",//导购宝商品分类首页推荐！！！
    
    
    //  商品分类 (H5)接口 
    INTERFACE_CLASSIFYLIST_H5 : baseUrl_H5+"goods/classifyListH5",
    INTERFACE_CLASSIFYADD_H5 : baseUrl_H5+"goods/classifyAddH5",
    INTERFACE_CLASSIFYDEL_H5 : baseUrl_H5+"goods/classifyDelH5",    
    INTERFACE_CLASSIFYEDIT_H5 : baseUrl_H5+"goods/classifyEditH5",//H5商品分类！！！
    
    //INTERFACE_CLASSIFYPUSH_H5 : baseUrl_H5+"goods/classifyPushH5",//H5商品分类首页推荐！！！
    
    INTERFACE_CLASSIFYEXPORT_DGB : baseUrl+"goods/classifyExportDGB",//分类信息批量导入接口
    INTERFACE_CLASSIFYEXPORT_H5 : baseUrl_H5+"goods/classifyExportH5",//分类信息批量导入接口
    
    
    INTERFACE_GOODSSTATUSEXPORT_DGB : baseUrl+"goods/goodsStatusExportDGB",//上架状态批量导入
    INTERFACE_GOODSSTATUSEXPORT_H5 : baseUrl_H5+"goods/goodsStatusExportH5",//上架状态批量导入
    
    INTERFACE_UNSHELVEEXPORT_DGB : baseUrl+"goods/unShelveExportDGB",//XIA架状态批量导入
    INTERFACE_UNSHELVEEXPORT_H5 : baseUrl_H5+"goods/unShelveExportH5",//XIA架状态批量导入
    
    INTERFACE_DISCOUNTEXPORT_DGB : baseUrl+"goods/discountExportDGB",//折扣信息批量导入
    INTERFACE_DISCOUNTEXPORT_H5 : baseUrl_H5+"goods/discountExportH5",//折扣信息批量导入
    
    //用户管理
    INTERFACE_USERINFOLIST_DGB : baseUrl+"user/userInfoListDGB",
    INTERFACE_USERINFOLIST_H5 : baseUrl_H5+"user/userInfoListH5",
    INTERFACE_USEREXCEL_DGB : baseUrl+"user/userExcelDGB",
    INTERFACE_USEREXCEL_H5 : baseUrl_H5+"user/userExcelH5",
    INTERFACE_USERADD_DGB : baseUrl+"user/userAddDGB",
    INTERFACE_USERADD_H5 : baseUrl_H5+"user/userAddH5",
    INTERFACE_USERINFO_DGB : baseUrl+"user/userInfoDGB",
    INTERFACE_USERINFO_H5 : baseUrl_H5+"user/userInfoH5",
    INTERFACE_USERDEL_DGB : baseUrl+"user/userDelDGB",
    INTERFACE_USERDEL_H5 : baseUrl_H5+"user/userDelH5",
    INTERFACE_PASSWORDRESET_DGB : baseUrl+"user/passwordResetDGB",
    INTERFACE_PASSWORDRESET_H5 : baseUrl_H5+"user/passwordResetH5",
    
    
    //权限
    INTERFACE_PERMISSIONLIST_DGB : baseUrl+"user/permissionsListDGB",
    INTERFACE_PERMISSIONLIST_H5 : baseUrl+"user/permissionsListH5",
    
    //品牌列表
    INTERFACE_BRANDLIST_DGB : baseUrl+"banner/brandListDGB",
    INTERFACE_BRANDLIST_H5 : baseUrl+"banner/brandListH5",
    
    //banner
    INTERFACE_BANNERLIST_DGB : baseUrl+"banner/bannerListDGB",
    INTERFACE_BANNERLIST_H5 : baseUrl_H5+"banner/bannerListH5",
    INTERFACE_BANNERADD_DGB : baseUrl+"banner/bannerAddDGB",
    INTERFACE_BANNERADD_H5 : baseUrl_H5+"banner/bannerAddH5",
    INTERFACE_BANNERSORT_DGB : baseUrl+"banner/bannerSortDGB",
    INTERFACE_BANNERSORT_H5 : baseUrl_H5+"banner/bannerSortH5",
    INTERFACE_BANNERDEL_DGB : baseUrl+"banner/bannerDelDGB",
    INTERFACE_BANNERDEL_H5 : baseUrl_H5+"banner/bannerDelH5",
    
    //自定义页面
    INTERFACE_CUSTOMPAGELIST_DGB : baseUrl+"contact/customPageListDGB",
    INTERFACE_CUSTOMPAGELIST_H5 : baseUrl_H5+"contact/customPageListH5",
    
    INTERFACE_CUSTOMPAGEADD_DGB : baseUrl+"contact/customPageAddDGB",
    INTERFACE_CUSTOMPAGEADD_H5 : baseUrl_H5+"contact/customPageAddH5",
    
    INTERFACE_CUSTOMPAGEDEL_DGB : baseUrl+"contact/customPageDelDGB",
    INTERFACE_CUSTOMPAGEDEL_H5 : baseUrl_H5+"contact/customPageDelH5",
    
    //关于我们   
    //关于我们列表接口！！！！！！没找到！！！！！！
    INTERFACE_ABOUTUSADD_DGB : baseUrl+"contact/aboutUsAddDGB",
    INTERFACE_ABOUTUSADD_H5 : baseUrl_H5+"contact/aboutUsAddH5",
    
    INTERFACE_ABOUTUSEDIT_DGB : baseUrl+"contact/aboutUsEditDGB",
    INTERFACE_ABOUTUSEDIT_H5 : baseUrl_H5+"contact/aboutUsEditH5",
    
    INTERFACE_ABOUTUSDEL_DGB : baseUrl+"contact/aboutUsDelDGB",
    INTERFACE_ABOUTUSDEL_H5 : baseUrl_H5+"contact/aboutUsDelH5",
    
    //联系我们
    INTERFACE_CONTACTUSLIST_H5 : baseUrl_H5+"contact/contactUsInfoH5",
    INTERFACE_CONTACTUSADD_H5 : baseUrl_H5+"contact/contactUsAddH5",
    INTERFACE_CONTACTUSEDIT_H5 : baseUrl_H5+"contact/contactUsEditH5",
    
    //意见反馈
    INTERFACE_FEEDBACKLIST_DGB : baseUrl+"feedback/feedbackListDGB",
    INTERFACE_FEEDBACKADD_DGB : baseUrl+"feedback/feedbackAddDGB",
    INTERFACE_FEEDBACKDEL_DGB : baseUrl+"feedback/feedbackDelDGB",
    
    //数据字典
    INTERFACE_DICTADD_DGB : baseUrl+"dict/dictAddDGB",
    INTERFACE_DICTADD_H5 : baseUrl+"dict/dictAddH5",
    INTERFACE_DICTLIST_DGB : baseUrl+"dict/dictListDGB",
    INTERFACE_DICTLIST_H5 : baseUrl+"dict/dictListH5",
    INTERFACE_DICTDEL_DGB : baseUrl+"dict/dictDelDGB",
    INTERFACE_DICTDEL_H5 : baseUrl+"dict/dictDelH5",
    INTERFACE_DICTEDIT_DGB : baseUrl+"dict/dictEditDGB",
    INTERFACE_DICTEDIT_H5 : baseUrl+"dict/dictEditH5",
    
    //订单
    INTERFACE_ORDERLIST_DGB : baseUrl+"order/orderListDGB",
    INTERFACE_ORDERLIST_H5 : baseUrl_H5+"order/orderListH5",
    INTERFACE_ORDERDETAIL_DGB : baseUrl+"order/orderDetialDGB",
    INTERFACE_ORDERDETAIL_H5 : baseUrl_H5+"order/orderDetialH5",
    
    INTERFACE_RETURNORDERLIST_DGB : baseUrl+"order/returnOrderListDGB",
    INTERFACE_RETURNORDERLIST_H5 : baseUrl_H5+"order/returnOrderListH5",
    INTERFACE_RETURNORDERDETAIL_DGB : baseUrl+"order/returnOrderDetailDGB",
    INTERFACE_RETURNORDERDETAIL_H5 : baseUrl_H5+"order/returnOrderDetailH5",
    
    INTERFACE_RETURNORDERCOUNT_DGB : baseUrl+"order/returnOrderCountDGB",
    INTERFACE_RETURNORDERCOUNT_H5 : baseUrl_H5+"order/returnOrderCountH5",
    
    INTERFACE_RETURNORDERSTATUS_DGB : baseUrl+"order/returnOrderStatusDGB",
    INTERFACE_RETURNORDERSTATUS_H5 : baseUrl_H5+"order/returnOrderStatusH5",
    
    INTERFACE_EXPORTORDERBYDATE_DGB : baseUrl+"order/exportOrderByDateDGB",
    INTERFACE_EXPORTORDERBYDATE_H5 : baseUrl_H5+"order/exportOrderByDateH5",
    
    //教程管理
    INTERFACE_ADDNORCOURSE_DGB : baseUrl+"course/addNorCourseDGB",
    INTERFACE_ADDPICCOURSE_DGB : baseUrl+"course/addPicCourseDGB",
    INTERFACE_COURSELIST_DGB : baseUrl+"course/courseListDGB",
    INTERFACE_COURSEDEL_DGB : baseUrl+"course/courseDelDGB",
    INTERFACE_COURSEDETAIL_DGB : baseUrl+"course/courseDetailDGB",
    INTERFACE_COURSESTATUDEDIT_DGB : baseUrl+"course/courseStatusEditDGB",
    INTERFACE_COURSECLASSIFYLIST_DGB : baseUrl+"course/courseClassifyListDGB",
    INTERFACE_COURSECLASSIFYADD_DGB : baseUrl+"course/courseClassifyAddDGB",
    INTERFACE_COURSECLASSIFYDEL_DGB : baseUrl+"course/courseClassifyDelDGB",
    INTERFACE_COURSECLASSIFYEDIT_DGB : baseUrl+"course/courseClassifyEditDGB",
    
    
    //试衣墙
    INTERFACE_FITTINGWALLLIST_DGB : baseUrl+"fittingWall/fittingWallListDGB",
    INTERFACE_FITTINGWALLAUDIT_DGB : baseUrl+"fittingWall/fittingWallAuditDGB",
    INTERFACE_FITTINGWALLDEL_DGB : baseUrl+"fittingWall/fittingWallDelDGB",
    
}

/* 
 * 实用方法定义在utils集合
 */
var utils = {
    //验证手机号码
    validateTelphoneNumber : function(phone) {
        return !!phone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
    },
    //验证邮箱
    validateEmail : function(email) {
        var emailPat = /^(.+)@(.+)$/;
        return !!email.match(emailPat);
    },
    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    validateCardNo : function(card) {
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (reg.test(card) === false) {
            //alert("身份证输入不合法");
            return false;
        }
        return true;
    },
    //验证密码规则
    validatePwd : function(newPass) {
        //var patten = /^[0-9a-zA-z]\w{8,12}$/;
        var patten = /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)(?!^[^a-zA-Z0-9]*$)\w{8,12}$/;
        if (patten.test(newPass)) {
            return true;
        } else {
            return false;
        }
    },
    //验证运单号规则
    validateWaybillNo : function(no) {
        var patten = /^\w{8,20}$/;
        if (patten.test(no)) {
            return true;
        } else {
            return false;
        }
    },
    //获取当前时间 {date:"YYYY-MM-DD",time:"hh:mm:ss"} 
    getDateTime : function(timestamp){
        try {
            var d = timestamp?new Date(timestamp):new Date();
            var YYYY = d.getFullYear();
            var MM = d.getMonth() + 1;
            MM = MM<10?'0'+MM:MM;
            var DD = d.getDate();
            DD = DD<10?'0'+DD:DD;
            
            return {
                date:YYYY+'-'+MM+'-'+DD,
                time:d.toString().split(' ')[4]
            }
        }catch(e){
            console.log(e);
        }
    },
    //解析URL？后面的参数
    getRequest: function(){  
        var url = location.search; //获取url中"?"符后的字串   
        var theRequest = {}; 
        try{
            if (url.indexOf("?") != -1) {  
                var str = url.substr(1);  
                strs = str.split("&");  
                for (var i = 0; i < strs.length; i++) {  
                    theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);  
                }  
            }
            return theRequest;     
        } catch(e){
            console.log('? no params');
        }
         
    },
    //获取参数 先从url中获取，再从缓存中取，否则返回空
    getValueFromKey: function(k){
        var g_request = this.getRequest();
        return g_request[k] || '';// || localStorage[k] || '';
    },
    //判断是web还是app模式
    isAppModel: function(){
        try{
            var h = uexXmlHttpMgr.open;
        }catch(e){
            return false;
        }
        return true;
    }
}

//全局共用错误处理
function global_err(status){
    switch(status){
        case '-100000':
            //todo bleow
            break;
        default:
            break;
    }
}

function loadTemplate(tpl) {
    var template = null;
    var tplBaseUrl = "";
    $.ajax({
        url : tplBaseUrl + tpl,
        type : 'GET',
        data : {}, //默认从参数获取
        timeout : 10000,
        async : false,
        success : function(data) {
            template = _.template(data);
        },
        error : function(e) {
        }
    });
    return template;
}

function loadSequence(urls, callback) {
    var loader = null;
    for (var i in urls) {
        var url = urls[i];
        loader = $LAB.script(url);
    }
    loader ? loader.wait(callback) : callback();
}

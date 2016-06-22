/**
 * @desc:移动官网登录
 * @iName:loginH5
 * @param;
 *  in:
 *     username
 *     password
 *  out:
 *     status
 *     msg
 *     data{}
 *          username
 */

/**
 * @desc:导购宝登录
 * @iName:loginDGB
 * @param;
 *  in:
 *     username
 *     password
 *  out:
 *     status
 *     msg
 *     data{}
 *          username
 */

/**
 * @desc:注销接口（移动官网）
 * @iName:logoutH5
 * @param;
 *  in:
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:注销接口（导购宝）
 * @iName:logoutDGB
 * @param;
 *  in:
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:密码修改接口（移动官网）
 * @iName:passwordEditH5
 * @param;
 *  in:
 *      oldPassword
 *      newPassword
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:密码修改接口（DGB）
 * @iName:passwordEditDGB
 * @param;
 *  in:
 *      oldPassword
 *      newPassword
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:昨日销售统计接口（移动官网）
 * @iName:salesStatH5
 * @param;
 *  in:
 *  out:
 *     status
 *     msg
 *     data{
 *      waitPay:{
 *          orderCount:
 *          goodsCount
 *          amount
 *      },
 *      waitSend:,
 *      Send:,
 *      returnGoods:,
 *      orderComplate:,
 *      orderClose:,
 *      orderCancel:
 *
 *     }
 *
 *
 */

/**
 * @desc:昨日销售统计接口（DGB）
 * @iName:salesStatDGB
 * @param;
 *  in:
 *  out:
 *     status
 *     msg
 *     data{
 *      waitPay:{
 *          orderCount:
 *          goodsCount
 *          amount
 *      },
 *      waitSend:,
 *      Send:,
 *      returnGoods:,
 *      orderComplate:,
 *      orderClose:,
 *      orderCancel:
 *
 *     }
 *
 *
 */

/**
 * @desc:事项提醒接口（h5）
 * @iName:espierRemindH5
 * @param;
 *  in:
 *  out:
 *     status
 *     msg
 *     data{
 *      waitPay:5
 *      waitRetuen:,
 *      newProduct:,
 *      lowStock:,
 *      returnGoods:,
 *      waitShelves:
 *     }
 */

/**
 * @desc:事项提醒接口（DGB）
 * @iName:espierRemindDGB
 * @param;
 *  in:
 *  out:
 *     status
 *     msg
 *     data{
 *      waitPay:
 *      waitRetuen:,
 *      newProduct:,
 *      lowStock:,
 *      returnGoods:,
 *      waitShelves:
 *     }
 */

/**
 * @desc:从未发布商品列表(H5)
 * @iName:neverPublishListH5
 * @param;
 *  in:
 *      colorSKU
 *      goodsName
 *      goodsType
 *  out:
 *     status
 *     msg
 *     data[{
 *         colorSKU
 *         goodsName
 *         url
 *         goodsType
 *         goodsClassify 商品分类
 *         originalPrice 吊牌价
 *         price    售卖价格
 *         discount 折扣
 *         stockCount 库存数量
 *         dateTiming 定时发布
 *         goodsId 商品id
 *      }]
 */

/**
 * @desc:从未发布商品列表(DGB)
 * @iName:neverPublishListDGB
 * @param;
 *  in:
 *      SKU
 *      goodsName
 *      goodsType
 *      page
 *      pageCount
 *  out:
 *     status
*     msg
*     data[{
*         SKU
*         goodsName
*         url
*         goodsType
*         goodsClassify 商品分类
*         originalPrice 吊牌价
*         price    售卖价格
*         discount 折扣
*         stockCount 库存数量
*         dateTiming 定时发布
*         goodsId 商品id
*      }],
*      totalCount:10
*/

/**
 * @desc:商品分类列表（H5）
 * @iName:classifyListH5
 * @param;
 *  in:
 *  out:
 *     status
 *     msg
 *     data[
 *      {
 *      classifyId
 *      classifyName
 *      list:[
 *          {classifyName: "3月1日上新",classifyId: "2"},
 *          {classifyName: "2月26日上新",classifyId: "3"}
 *      ]}
 *     ]
 */

/**
 * @desc:商品分类列表（DGB）
 * @iName:classifyListDGB
 * @param;
 *  in:
 *  out:
 *     status
 *     msg
 *     data[
 *      {
 *      classifyId
 *      classifyName
 *      list:[
 *          {classifyName: "3月1日上新",classifyId: "2"},
 *          {classifyName: "2月26日上新",classifyId: "3"}
 *      ]}
 *     ]
 */

/**
 * @desc:定时发布接口(H5)
 * @iName:timedReleaseH5
 * @param;
 *  in:
 *      goodsids:[]
 *      datatime:2015-05-03
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:定时发布接口(DGB)
 * @iName:timedReleaseDGB
 * @param;
 *  in:
 *      goodsids:[]
 *      datatime:2015-05-03
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:发布接口（H5）
 * @iName: releaseH5
 * @param;
 *  in:
 *      goodsids:[]
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:发布接口（DGB）
 * @iName: releaseDGB
 * @param;
 *  in:
 *      goodsids:[]
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:商品查看接口（H5）
 * @iName: getGoodsByIdH5
 * @param;
 *  in:
 *      goodsid
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:商品查看接口（DGB）
 * @iName: getGoodsByIdDGB
 * @param;
 *  in:
 *      goodsid
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:商品列表查询(H5)
 * @iName: getGoodsListH5
 * @param;
 *  in:
 *      goodstype  (出售中/仓库中)
 *      classifyId (分类id)
 *      SKU
 *      goodsType
 *      goodsName
 *      goodsPrice:'1,20'
 *      goodsStock
 *      goodsStatus
 *  out:
 *     status
 *     msg
 *     data[{
*         colorSKU
*         goodsName
*         url
*         goodsType
*         goodsClassify 商品分类
*         originalPrice 吊牌价
*         price    售卖价格
*         discount 折扣
*         stockCount 库存数量
*         dateTiming 定时发布
*         goodsId 商品id
*      }],
 *      totalCount:10
 */

/**
 * @desc:商品列表查询(DGB)
 * @iName: getGoodsListDGB
 * @param;
 *  in:
 *      goodstype  (出售中/仓库中)
 *      classifyId (分类id)
 *      SKU
 *      goodsType
 *      goodsName
 *      goodsPrice:'1,20'
 *      goodsStock
 *      goodsStatus
 *      page
 *      pageCont
 *  out:
 *     status
 *     msg
 *     data[{
*         SKU
*         goodsName
*         url
*         goodsType
*         goodsClassify 商品分类
*         originalPrice 吊牌价
*         price    售卖价格
*         discount 折扣
*         stockCount 库存数量
*         dateTiming 定时发布
*         goodsId 商品id
*      }],
 *      totalCount:10
 */

/**
 * @desc:批量设置分类提交接口(DGB)
 * @iName: setClassifyDGB
 * @param;
 *  in:
 *      classifys
 *      goodsids
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:批量设置分类提交接口(H5)
 * @iName: setClassifyH5
 * @param;
 *  in:
 *      classifys
 *      goodsids
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:永久下架接口(H5)
 * @iName: unShelveH5
 * @param;
 *  in:
 *      goodsIds
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:永久下架接口(DGB)
 * @iName: unShelveDGB
 * @param;
 *  in:
 *      goodsIds
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:货架调整提交接口(H5)
 * @iName: shelveModifyH5
 * @param;
 *  in:
 *      goodsIds
 *      index
 *  out:
 *     status
 *     msg
 */

/**
 * @desc:货架调整提交接口(DGB)
 * @iName: shelveModifyDGB
 * @param;
 *  in:
 *      goodsIds
 *      index
 *  out:
 *     status
 *     msg
 */


/**
 * @desc:商品导出接口(DGB)
 * @iName: goodsExcelDGB
 * @param;
 *  in:
 *     page
 *  out:
 *     导出表格
 */

/**
 * @desc:商品导出接口(H5)
 * @iName: goodsExcelH5
 * @param;
 *  in:
 *     page
 *  out:
 *     导出表格
 */

/**
 * @desc:商品类型接口(H5)
 * @iName: goodsTypeQueryH5
 * @param;
 *  in:
 *  out:
 *      data:{
 *          goodsType:{
 *              SELL:销售,
 *              PRESELL:预售
 *      }}
 */

/**
 * @desc:商品类型接口(DGB)
 * @iName: goodsTypeQueryDGB
 * @param;
 *  in:
 *  out:
 *      data:{
 *          goodsType:{
 *              SELL:销售,
 *              PRESELL:预售
 *      }}
 */

/**
 * @desc:商品类型接口(H5)
 * @iName: goodsStatusQueryH5
 * @param;
 *  in:
 *  out:
 *      data:{
 *          status:{
 *              InShelf:上架,
 *              OutShelf:下架,
 				OffShelf: 永久下架
 *      }}
 */

/**
 * @desc:商品类型接口(DGB)
 * @iName: goodsStatusQueryDGB
 * @param;
 *  in:
 *  out:
 *      data:{
 *          status:{
 *              InShelf:上架,
 *              OutShelf:下架
 *				OffShelf: 永久下架
 *      }}
 */

/**
 * @desc:商品上下架接口(DGB)
 * @iName: goodsStatusEditDGB
 * @param;
 *  in:
		status：
 *      goodsIds
 		
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:商品上下架接口(H5)
 * @iName: goodsStatusEditH5
 * @param;
 *  in:
 *      goodsIds
 		status
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:商品详情接口(DGB)
 * @iName: goodsDetailQueryDGB
 * @param;
 *  in:
 *      goodsid
 *  out:
 *      status
 *      msg
 *      data
            {
            brand:'商品品牌',
            goodsName:'裙子',//商品名称
            projectCode: '123456789',//9位款号
            describe: '商品描述',
            goodsInfo: '商品信息',
            color:[//颜色变量层
                {
                    colorCode: '123456789012',//12位颜色号
                    color: '红色',//颜色
                    colorAlias:"红棕色",
                    goodsType: "SELL",//预售/销售
                    picurls:[ //商品配图
                        'http://imgcdn.only.cn/product/jackjones/215305048023/215305048023d913b4f6e04b4cbda54b564b3255c49a.jpg',
                        'http://imgcdn.only.cn/product/jackjones/215305048023/21530504802307f58033622e4152a420e132544c7571.jpg',
                        'http://imgcdn.only.cn/product/jackjones/215305048023/21530504802368fe5a818f8a4878aa46d09d9c02b1de.jpg',
                        'http://imgcdn.only.cn/product/jackjones/215305048023/21530504802302831e9e8bfd4a65a0f5a2f4fae3eaf3.jpg'
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/215321002010d7c9e18b61494a6896fc1d245d0180cd.jpg',
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/215321002010f0b4a930d8e4470a9cce5986bb8d80b1.jpg',
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/21532100201065d1fb2bc8c744358bc0f3f75845939f.jpg',
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/215321002010bc94f92ca0a44c17b3617bf3fb416a1c.jpg'
                    ],
                    setList:[{
                        picurl:  'http://imgcdn.only.cn/product/jackjones/215132013950/215132013950623fffb83d864444a56af9f6066d7aa6.jpg',
                        goodsName:"前卫夹克",
                        colorCode:"123456789012",//颜色层代号。
                        originalPrice : '298',
                        discount : '0.5',
                        price : '108.5'
                    },{
                        picurl:  'http://imgcdn.only.cn/product/jackjones/215132013950/215132013950623fffb83d864444a56af9f6066d7aa6.jpg',
                        goodsName:"前卫夹克",
                        colorCode:"123456789012",//颜色层代号。
                        originalPrice : '298',
                        discount : '0.5',
                        price : '108.5'
                    }],
                    originalPrice: '300',//吊牌价
                    price: '150',//实际售卖价格
                    discount: '5折',
                    sizes:[//尺码变量层
                        {
                            SKU: "123456789012345",//15位SKU
                            size: "M",//尺码
                            sizeAlias: "XXL",//尺码别称
                            stock: "20", //库存
                            status:"InShelf"
                        },
                        {
                            SKU: "123456789012345",//15位SKU
                            size: "XL",//尺码
                            sizeAlias: "XXL",//尺码别称
                            stock: "50",//库存
                            status:"InShelf"
                        }
                    ]
                },
                {
                    colorCode: '123456789013',//12位颜色号
                    color: '白色',//颜色
                    colorAlias:"红棕色",
                    goodsType: "SELL",//预售/销售
                    picurls:[ //商品配图
                        'http://imgcdn.only.cn/product/jackjones/215305048023/215305048023d913b4f6e04b4cbda54b564b3255c49a.jpg',
                        'http://imgcdn.only.cn/product/jackjones/215305048023/21530504802307f58033622e4152a420e132544c7571.jpg',
                        'http://imgcdn.only.cn/product/jackjones/215305048023/21530504802368fe5a818f8a4878aa46d09d9c02b1de.jpg',
                        'http://imgcdn.only.cn/product/jackjones/215305048023/21530504802302831e9e8bfd4a65a0f5a2f4fae3eaf3.jpg'
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/215321002010d7c9e18b61494a6896fc1d245d0180cd.jpg',
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/215321002010f0b4a930d8e4470a9cce5986bb8d80b1.jpg',
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/21532100201065d1fb2bc8c744358bc0f3f75845939f.jpg',
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/215321002010bc94f92ca0a44c17b3617bf3fb416a1c.jpg'
                    ],
                    setList:[{
                        picurl:  'http://imgcdn.only.cn/product/jackjones/215132013950/215132013950623fffb83d864444a56af9f6066d7aa6.jpg',
                        goodsName:"前卫夹克",
                        colorCode:"123456789012",//颜色层代号。
                        originalPrice : '298',
                        discount : '0.5',
                        price : '108.5'
                    },{
                        picurl:  'http://imgcdn.only.cn/product/jackjones/215132013950/215132013950623fffb83d864444a56af9f6066d7aa6.jpg',
                        goodsName:"前卫夹克",
                        colorCode:"123456789012",//颜色层代号。
                        originalPrice : '298',
                        discount : '0.5',
                        price : '108.5'
                    }],
                    originalPrice: '300',//吊牌价
                    price: '150',//实际售卖价格
                    discount: '5折',
                    sizes:[//尺码变量层
                        {
                            SKU: "123456789012345",//15位SKU
                            size: "M",//尺码
                            sizeAlias: "XXL",//尺码别称
                            stock: "20",//库存
                            status:"InShelf"
                        },
                        {
                            SKU: "123456789012345",//15位SKU
                            size: "XL",//尺码
                            sizeAlias: "XXL",//尺码别称
                            stock: "50",//库存
                            status:"InShelf"
                        }
                    ]
                }
            ]
    }
}
 */

/**
 * @desc:商品详情接口(H5)
 * @iName: goodsDetailQueryH5
 * @param;
 *  in:
 *      goodsid
 *  out:
 *      status
 *      msg
 *      data
 {
            brand:'商品品牌',
            goodsName:'裙子',//商品名称
            projectCode: '123456789',//9位款号
            describe: '商品描述',
            goodsInfo: '商品信息',
            color:[//颜色变量层
                {
                    colorCode: '123456789012',//12位颜色号
                    color: '红色',//颜色
                    colorAlias:"红棕色",
                    goodsType: "SELL",//预售/销售
                    picurls:[ //商品配图
                        'http://imgcdn.only.cn/product/jackjones/215305048023/215305048023d913b4f6e04b4cbda54b564b3255c49a.jpg',
                        'http://imgcdn.only.cn/product/jackjones/215305048023/21530504802307f58033622e4152a420e132544c7571.jpg',
                        'http://imgcdn.only.cn/product/jackjones/215305048023/21530504802368fe5a818f8a4878aa46d09d9c02b1de.jpg',
                        'http://imgcdn.only.cn/product/jackjones/215305048023/21530504802302831e9e8bfd4a65a0f5a2f4fae3eaf3.jpg'
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/215321002010d7c9e18b61494a6896fc1d245d0180cd.jpg',
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/215321002010f0b4a930d8e4470a9cce5986bb8d80b1.jpg',
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/21532100201065d1fb2bc8c744358bc0f3f75845939f.jpg',
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/215321002010bc94f92ca0a44c17b3617bf3fb416a1c.jpg'
                    ],
                    setList:[{
                        picurl:  'http://imgcdn.only.cn/product/jackjones/215132013950/215132013950623fffb83d864444a56af9f6066d7aa6.jpg',
                        goodsName:"前卫夹克",
                        colorCode:"123456789012",//颜色层代号。
                        originalPrice : '298',
                        discount : '0.5',
                        price : '108.5'
                    },{
                        picurl:  'http://imgcdn.only.cn/product/jackjones/215132013950/215132013950623fffb83d864444a56af9f6066d7aa6.jpg',
                        goodsName:"前卫夹克",
                        colorCode:"123456789012",//颜色层代号。
                        originalPrice : '298',
                        discount : '0.5',
                        price : '108.5'
                    }],
                    originalPrice: '300',//吊牌价
                    price: '150',//实际售卖价格
                    discount: '5折',
                    sizes:[//尺码变量层
                        {
                            SKU: "123456789012345",//15位SKU
                            size: "M",//尺码
                            sizeAlias: "XXL",//尺码别称
                            stock: "20", //库存
                            status:"InShelf"
                        },
                        {
                            SKU: "123456789012345",//15位SKU
                            size: "XL",//尺码
                            sizeAlias: "XXL",//尺码别称
                            stock: "50",//库存
                            status:"InShelf"
                        }
                    ]
                },
                {
                    colorCode: '123456789013',//12位颜色号
                    color: '白色',//颜色
                    colorAlias:"红棕色",
                    goodsType: "SELL",//预售/销售
                    picurls:[ //商品配图
                        'http://imgcdn.only.cn/product/jackjones/215305048023/215305048023d913b4f6e04b4cbda54b564b3255c49a.jpg',
                        'http://imgcdn.only.cn/product/jackjones/215305048023/21530504802307f58033622e4152a420e132544c7571.jpg',
                        'http://imgcdn.only.cn/product/jackjones/215305048023/21530504802368fe5a818f8a4878aa46d09d9c02b1de.jpg',
                        'http://imgcdn.only.cn/product/jackjones/215305048023/21530504802302831e9e8bfd4a65a0f5a2f4fae3eaf3.jpg'
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/215321002010d7c9e18b61494a6896fc1d245d0180cd.jpg',
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/215321002010f0b4a930d8e4470a9cce5986bb8d80b1.jpg',
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/21532100201065d1fb2bc8c744358bc0f3f75845939f.jpg',
                        //'http://imgcdn.only.cn/product/jackjones/215321002010/215321002010bc94f92ca0a44c17b3617bf3fb416a1c.jpg'
                    ],
                    setList:[{
                        picurl:  'http://imgcdn.only.cn/product/jackjones/215132013950/215132013950623fffb83d864444a56af9f6066d7aa6.jpg',
                        goodsName:"前卫夹克",
                        colorCode:"123456789012",//颜色层代号。
                        originalPrice : '298',
                        discount : '0.5',
                        price : '108.5'
                    },{
                        picurl:  'http://imgcdn.only.cn/product/jackjones/215132013950/215132013950623fffb83d864444a56af9f6066d7aa6.jpg',
                        goodsName:"前卫夹克",
                        colorCode:"123456789012",//颜色层代号。
                        originalPrice : '298',
                        discount : '0.5',
                        price : '108.5'
                    }],
                    originalPrice: '300',//吊牌价
                    price: '150',//实际售卖价格
                    discount: '5折',
                    sizes:[//尺码变量层
                        {
                            SKU: "123456789012345",//15位SKU
                            size: "M",//尺码
                            sizeAlias: "XXL",//尺码别称
                            stock: "20",//库存
                            status:"InShelf"
                        },
                        {
                            SKU: "123456789012345",//15位SKU
                            size: "XL",//尺码
                            sizeAlias: "XXL",//尺码别称
                            stock: "50",//库存
                            status:"InShelf"
                        }
                    ]
                }
            ]
    }
}
 */

/**
 * @desc:同步商品管理(分类)接口（DGB同步H5）
 * @iName: syncH5Classify
 * @param;
 *  in:
 *      goodsids
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:导购自定义商品类型查询接口（DGB）
 * @iName: DGBclassifyQuery
 * @param;
 *  in:
 *
 *  out:
 *      status
 *      msg
 *      data[
 *          {
 *              DGBclassifyId:
 *              DGBclassifyName
 *              DGBclassifyStatus
 *          }
 *      ]
 */

/**
 * @desc:导购自定义分类增加接口（DGB）
 * @iName: DGBclassifyAdd
 * @param;
 *  in
 *      DGBclassifyName
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:导购自定义分类删除接口（DGB）
 * @iName: DGBclassifyDel
 * @param;
 *  in
 *      DGBclassifyId
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:导购自定义分类修改接口（DGB）
 * @iName: DGBclassifyEdit
 * @param;
 *  in
 *      DGBclassifyId
 *      DGBclassifyName
 		DGBclassifyStatus
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:商品分类添加（H5）
 * @iName: classifyAddH5
 * @param;
 *  in
 *      classifyName
 *      classifyStatus
 *      classifyIMG
 *      parentId             //上级分类id
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:商品分类添加（DGB）
 * @iName: classifyAddDGB
 * @param;
 *  in
 *      classifyId
 *      classifyName
 *      classifyStatus
 *      classifyIMG
 *      classifyBigImg
 *      parentId             //上级分类id
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:商品分类删除（DGB）
 * @iName: classifyDelDGB
 * @param;
 *  in
 *      classifyId
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:商品分类删除（H5）
 * @iName: classifyDelH5
 * @param;
 *  in
 *      classifyId
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:商品分类编辑（H5）
 * @iName: classifyEditH5
 * @param;
 *  in
 *      classifyId
 *      classifyName
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:商品分类编辑（DGB）
 * @iName: classifyEditDGB
 * @param;
 *  in
 *      classifyId
 *      classifyName
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:分类首页推荐接口（DGB）
 * @iName: classifyPushDGB
 * @param;
 *  in
 *      classifyId
 *      classifyStatus
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:分类首页推荐接口（H5）
 * @iName: classifyPushH5
 * @param;
 *  in
 *      classifyId
 *      classifyStatus
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:分类信息批量导入接口（H5）
 * @iName: classifyExportH5
 * @param;
 *  in
 *      excel
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:分类信息批量导入接口（DGB）
 * @iName: classifyExportDGB
 * @param;
 *  in
 *      excel
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:上架状态信息批量上传接口（DGB）
 * @iName: goodsStatusExportDGB
 * @param;
 *  in
 *      excel
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:上架状态信息批量上传接口（H5）
 * @iName: goodsStatusExportH5
 * @param;
 *  in
 *      excel
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:下架信息批量上传接口(DGB)
 * @iName: unShelveExportDGB
 * @param;
 *  in
 *      excel
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:下架信息批量上传接口(H5)
 * @iName: unShelveExportH5
 * @param;
 *  in
 *      excel
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:折扣信息批量上传接口(H5)
 * @iName: discountExportH5
 * @param;
 *  in
 *      excel
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:折扣信息批量上传接口(DGB)
 * @iName: discountExportDGB
 * @param;
 *  in
 *      excel
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:用户信息列表查询接口(DGB)
 * @iName: userInfoListDGB
 * @param;
 *  in
 *      page
 *      userName
 *  out:
 *      status
 *      msg
 *      data[
        {
            userId: '1',
            userName: 'xiaohong@bestseller.com',
            realName: 'realName',
            phone: '13894793310',
            permissions:{
                type1:'1,23,4,5',
                type2:'2,3,6,7'
            }
        }
    ],
    totalCount: '10'
 */

/**
 * @desc:用户信息列表查询接口(H5)
 * @iName: userInfoListH5
 * @param;
 *  in
 *      page
 *      userName
 *  out:
 *      status
 *      msg
 *      data[
 *      {
 *          userId
 *          userName
 *          realName
 *          phone
 *          permissions:{
                type1:'1,23,4,5',
                type2:'2,3,6,7'
            }
 *
 *
 *      }
 *      totalCount
 *      ]
 */

/**
 * @desc:用户信息导出接口(H5)
 * @iName: userExcelH5
 * @param;
 *  in:
 *      page
 *      userName
 *  out:
 *      status
 *      msg
 *      data
 */

/**
 * @desc:用户信息导出接口(DGB)
 * @iName: userExcelDGB
 * @param;
 *  in:
 *  out:
 *      status
 *      msg
 *      data
 */

/**
 * @desc:用户信息添加接口(DGB)
 * @iName: userAddDGB
 * @param;
 *  in:
 *      username
 *      realName
 *      phone
 *      PermissionsIds
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:用户信息添加接口(H5)
 * @iName: userAddH5
 * @param;
 *  in:
 *      username
 *      realName
 *      phone
 *      permissions:{
            type1:'1,23,4,5',
            type2:'2,3,6,7'
        }
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:用户信息查询接口(H5)
 * @iName: userInfoH5
 * @param;
 *  in:
 *      username
 *  out:
 *      status
 *      msg
 *      data:{
 *          userName
 *          realName
 *          phone
 *          permissions:{
                type1:'1,23,4,5',
                type2:'2,3,6,7'
            }
 *      }
 */

/**
 * @desc:用户信息查询接口(DGB)
 * @iName: userInfoDGB
 * @param;
 *  in:
 *      username
 *  out:
 *      status
 *      msg
 *      data:{
 *          username
 *          realName
 *          phone
 *          PermissionsIds
 *      }
 */
//-------todo
/**
 * @desc:用户信息删除接口(DGB)
 * @iName: userDelDGB
 * @param;
 *  in:
 *      userid
 *  out:
 *      status
 *      msg
 *      data
 */

/**
 * @desc:用户信息删除接口(H5)
 * @iName: userDelH5
 * @param;
 *  in:
 *      userid
 *  out:
 *      status
 *      msg
 *      data
 */

/**
 * @desc:权限列表查询接口(DGB)
 * @iName: permissionsListDGB
 * @param;
 *  in:
 *  out:
 *      status
 *      msg
 *      data
 *          [
 *              {
 *                  permissionsId:
 *                  permissionsName
 *                  parentId
 *              }
 *          ]
 */

/**
 * @desc:权限列表查询接口(H5)
 * @iName: permissionsListH5
 * @param;
 *  in:
 *  out:
 *      status
 *      msg
 *      data
 *          [
 *              {
 *                  permissionsId:
 *                  permissionsName
 *                  parentId
 *              }
 *          ]
 */

/**
 * @desc:品牌查询接口查询接口(H5)
 * @iName: brandListH5
 * @param;
 *  in:
 *  out:
 *      status
 *      msg
 *      data
 *           [
				{
					brandId
					brandName
				}
 			]
 */

/**
 * @desc:品牌查询接口查询接口(DGB)
 * @iName: brandListDGB
 * @param;
 *  in:
 		type 'ACTIVITY' //ACTIVITY 活动 CATEGORY 类别
 *  out:
 *      status
 *      msg
 *      data
 			[
				{
					brandId
					brandName
				}
 			]
 */

/**
 * @desc:用户名密码重置默认接口(DGB)
 * @iName: passwordResetDGB
 * @param;
 *  in:
 *      userid
 *  out:
 *      status
 *      msg
 *
 */

/**
 * @desc:用户名密码重置默认接口(H5)
 * @iName: passwordResetH5
 * @param;
 *  in:
 *      userid
 *  out:
 *      status
 *      msg
 *      data
 *
 */

/**
 * @desc:banner列表查询接口(H5)
 * @iName: bannerListH5
 * @param;
 *  in:
 		type 'ACTIVITY' //ACTIVITY 活动 CATEGORY 类别
 *  out:
 *      status
 *      msg
 *      data
 [
        {
            url: '',//活动页
            picUrl: 'http://imgcdn.only.cn/category/jackjones/cb7d56c82bd548dcbf20a41593371a74.jpg',
            classifyName: '2月26日上新',
        }, [
            {
                classifyId: '26',
                picUrl: 'http://imgcdn.only.cn/category/jackjones/47255edfbdc941809f4bd280ef800faa.jpg',
                classifyName: '上衣'
            },
            {
                classifyId: '27',
                picUrl: 'http://imgcdn.only.cn/category/jackjones/dcb6af7f020e4ecd9fdf1e80d0bb42e2.jpg',
                classifyName: '上衣'
            }
        ],
        {
            url: '',//活动页
            picUrl: 'http://imgcdn.only.cn/category/jackjones/99a7c6e45d5448b9b0ac07699dae7fe1.jpg',
            classifyName: '2月26日上新',
        },
        [
            {
                classifyId: '26',
                picUrl: 'http://imgcdn.only.cn/category/jackjones/47255edfbdc941809f4bd280ef800faa.jpg',
                classifyName: '上衣'
            },
            {
                classifyId: '27',
                picUrl: 'http://imgcdn.only.cn/category/jackjones/cb7d56c82bd548dcbf20a41593371a74.jpg',
                classifyName: '上衣'
            }
        ]
    ]
 *
 */

/**
 * @desc:banner列表查询接口(DGB)
 * @iName: bannerListDGB
 * @param;
 *  in:
 		type 'ACTIVITY' //ACTIVITY 活动 CATEGORY 类别
 *  out:
 *      status
 *      msg
 *      data
 [
        {
            url: '',//活动页
            picUrl: 'http://imgcdn.only.cn/category/jackjones/cb7d56c82bd548dcbf20a41593371a74.jpg',
            classifyName: '2月26日上新',
        }, [
            {
                classifyId: '26',
                picUrl: 'http://imgcdn.only.cn/category/jackjones/47255edfbdc941809f4bd280ef800faa.jpg',
                classifyName: '上衣'
            },
            {
                classifyId: '27',
                picUrl: 'http://imgcdn.only.cn/category/jackjones/dcb6af7f020e4ecd9fdf1e80d0bb42e2.jpg',
                classifyName: '上衣'
            }
        ],
        {
            url: '',//活动页
            picUrl: 'http://imgcdn.only.cn/category/jackjones/99a7c6e45d5448b9b0ac07699dae7fe1.jpg',
            classifyName: '2月26日上新',
        },
        [
            {
                classifyId: '26',
                picUrl: 'http://imgcdn.only.cn/category/jackjones/47255edfbdc941809f4bd280ef800faa.jpg',
                classifyName: '上衣'
            },
            {
                classifyId: '27',
                picUrl: 'http://imgcdn.only.cn/category/jackjones/cb7d56c82bd548dcbf20a41593371a74.jpg',
                classifyName: '上衣'
            }
        ]
    ]
 *
 */

/**
 * @desc:banner添加接口(DGB)
 * @iName: bannerAddDGB
 * @param;
 *  in:
 *              bannerImg
 *              bannerURL
 *              bannerName
 *              bannerType
				classId(可选)
 *  out:
 *      status
 *      msg
 *      data
 *
 */

/**
 * @desc:banner添加接口(H5)
 * @iName: bannerAddH5
 * @param;
 *  in:
 *              bannerImg
 *              bannerURL
 *              bannerName
 *              bannerType
 				classId(可选)
 *  out:
 *      status
 *      msg
 *      data
 *
 */

/**
 * @desc:banner排序接口(H5)
 * @iName: bannerSortH5
 * @param;
 *  in:
		{
			type 'ACTIVITY', //ACTIVITY 活动 CATEGORY 类别
			bannerList:[
				{
					bannerId
					classifyName
					picUrl
				},{
					bannerId
					picUrl
					classifyId //CATEGORY 如果是类别banner列表,带有classifyId
					classifyName
				}
			]
		}

 *  out:
 *      status
 *      msg
 *      data [
        {
            url: '',//活动页
            picUrl: 'http://imgcdn.only.cn/category/jackjones/cb7d56c82bd548dcbf20a41593371a74.jpg',
            classifyName: '2月26日上新',
        }, [
            {
                classifyId: '26',
                picUrl: 'http://imgcdn.only.cn/category/jackjones/47255edfbdc941809f4bd280ef800faa.jpg',
                classifyName: '上衣'
            },
            {
                classifyId: '27',
                picUrl: 'http://imgcdn.only.cn/category/jackjones/dcb6af7f020e4ecd9fdf1e80d0bb42e2.jpg',
                classifyName: '上衣'
            }
        ]]
 *
 */

/**
 * @desc:banner排序接口(DGB)
 * @iName: bannerSortDGB
 * @param;
 *  in:
 		{
			type 'ACTIVITY', //ACTIVITY 活动 CATEGORY 类别
			bannerList:[
				{
					bannerId
					classifyName
					picUrl
				},{
					bannerId
					picUrl
					classifyId //CATEGORY 如果是类别banner列表,带有classifyId
					classifyName
				}
			]
		}
 *  out:
 *      status
 *      msg
 *      data[
        {
            url: '',//活动页
            picUrl: 'http://imgcdn.only.cn/category/jackjones/cb7d56c82bd548dcbf20a41593371a74.jpg',
            classifyName: '2月26日上新',
        }, [
            {
                classifyId: '26',
                picUrl: 'http://imgcdn.only.cn/category/jackjones/47255edfbdc941809f4bd280ef800faa.jpg',
                classifyName: '上衣'
            },
            {
                classifyId: '27',
                picUrl: 'http://imgcdn.only.cn/category/jackjones/dcb6af7f020e4ecd9fdf1e80d0bb42e2.jpg',
                classifyName: '上衣'
            }
        ]]
 *
 */

/**
 * @desc:banner删除接口(DGB)
 * @iName: bannerDelDGB
 * @param;
 *  in:
 *      bannerId
 *  out:
 *      status
 *      msg
 *      data
 *
 */

/**
 * @desc:banner删除接口(H5)
 * @iName: bannerDelH5
 * @param;
 *  in:
 *      bannerId
 *  out:
 *      status
 *      msg
 *      data
 *
 */

/**
 * @desc:自定义页面列表接口(H5)
 * @iName: customPageListH5
 * @param;
 *  in:
 *  out:
 *      pageName
 *      pageType
 *      pageURL
 *      uploadDate
 */

/**
 * @desc:自定义页面列表接口(DGB)
 * @iName: customPageListDGB
 * @param;
 *  in:
 *  out:
 *      data{
 *          pageName
 *          pageType
 *          pageURL
 *          uploadDate
 *      }
 */

/**
 * @desc:自定义页面添加接口(DGB)
 * @iName: customPageAddDGB
 * @param;
 *  in:
 *      pageName
 *      pageType
 *      pageURL
 *  out:
 *      data
 */

/**
 * @desc:自定义页面添加接口(H5)
 * @iName: customPageAddH5
 * @param;
 *  in:
 *      pageName
 *      pageType
 *      pageURL
 *  out:
 *      data
 */

/**
 * @desc:自定义页面删除接口(H5)
 * @iName: customPageDelH5
 * @param;
 *  in:
 *      pageId

 *  out:
 *      status
 *      msg
 */

/**
 * @desc:自定义页面删除接口(DGB)
 * @iName: customPageDelDGB
 * @param;
 *  in:
 *      pageId

 *  out:
 *      status
 *      msg
 */

/**
 * @desc:关于我们信息添加接口(H5)
 * @iName: aboutUsAddH5
 * @param;
 *  in:
 *      aboutUsImg
 *      aboutUsDesc
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:关于我们信息添加接口(DGB)
 * @iName: aboutUsAddDGB
 * @param;
 *  in:
 *      aboutUsImg
 *      aboutUsDesc
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:关于我们信息编辑接口(DGB)
 * @iName: aboutUsEditDGB
 * @param;
 *  in:
 *      aboutUsId
 *      aboutUsImg
 *      aboutUsDesc
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:关于我们信息编辑接口(H5)
 * @iName: aboutUsEditH5
 * @param;
 *  in:
 *      aboutUsId
 *      aboutUsImg
 *      aboutUsDesc
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:关于我们信息删除接口(H5)
 * @iName: aboutUsDelH5
 * @param;
 *  in:
 *      aboutUsId
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:关于我们信息删除接口(DGB)
 * @iName: aboutUsDelDGB
 * @param;
 *  in:
 *      aboutUsId
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:联系我们添加接口(h5)
 * @iName: contactUsAddH5
 * @param;
 *  in:
 *      preSalePhone //售前电话
 *      servicePhone //售后电话
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:联系我们查询接口(h5)
 * @iName: contactUsInfoH5
 * @param;
 *  in:
 *  out:
 *      status
 *      msg
 *      data
 *          [
 *              {
 *                  id
 *                  preSalePhone
 *                  servicePhone
 *              }
 *          ]
 */

/**
 * @desc:联系我们编辑接口(h5)
 * @iName: contactUsEditH5
 * @param;
 *  in:
 *      id
 *      preSalePhone
 *      servicePhone
 *  out:
 *      status
 *      msg
 *      data
 *
 */

/**
 * @desc:数据字典添加接口(h5)
 * @iName: dictAddH5
 * @param;
 *  in:
 *      dictType
 *      dictName
 *      dictKey
 *  out:
 *      status
 *      msg
 *      data
 *
 */

/**
 * @desc:数据字典添加接口(DGB)
 * @iName: dictAddDGB
 * @param;
 *  in:
 *      dictType
 *      dictName
 *      dictKey
 *  out:
 *      status
 *      msg
 *      data
 *
 */

/**
 * @desc:数据字典列表查询接口(DGB)
 * @iName: dictListDGB
 * @param;
 *  in:
 *      dictType
 *  out:
 *      status
 *      msg
 *      data
 *      [
 *          {
 *            id
  *           dictName
  *           dictKey
 *          }
 *      ]
 *
 */

/**
 * @desc:数据字典列表查询接口(H5)
 * @iName: dictListH5
 * @param;
 *  in:
 *      dictType
 *  out:
 *      status
 *      msg
 *      data
 *      [
 *          {
 *            id
  *           dictName
  *           dictKey
 *          }
 *      ]
 *
 */

/**
 * @desc:数据字典删除接口(H5)
 * @iName: dictDelH5
 * @param;
 *  in:
 *      dictId
 *      //or
 *      dictType
 *  out:
 *      status
 *      msg
 *      data
 *
 */

/**
 * @desc:数据字典删除接口(DGB)
 * @iName: dictDelDGB
 * @param;
 *  in:
 *      dictId
 *      //or
 *      dictType
 *  out:
 *      status
 *      msg
 *      data
 *
 */

/**
 * @desc:数据字典编辑接口(DGB)
 * @iName: dictEditDGB
 * @param;
 *  in:
 *      dictId
 *      dictName
 *      dictKey
 *  out:
 *      status
 *      msg
 *      data
 *
 */

/**
 * @desc:数据字典编辑接口(H5)
 * @iName: dictEditH5
 * @param;
 *  in:
 *      dictId
 *      dictName
 *      dictKey
 *  out:
 *      status
 *      msg
 *      data
 *
 */

/**
 * @desc:意见反馈列表查询 (DGB)
 * @iName: feedbackListDGB
 * @param;
 *  in:
 *      page
 *  out:
 *      status
 *      msg
 *      data[
 *      {
 *          id
 *          name
 *          content
 *      }
 *      totalCount
 *      ]
 *
 */

/**
 * @desc:意见反馈添加 (DGB)
 * @iName: feedbackAddDGB
 * @param;
 *  in:
 *      name
 *      count
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:意见反馈删除 (DGB)
 * @iName: feedbackDelDGB
 * @param;
 *  in:
 *      id
 *  out:
 *      status
 *      msg
 */

/**
 * @desc:订单查询列表接口 (DGB)
 * @iName: orderListDGB
 * @param;
 *  in:
 *      orderStatus
 *      phone
 *      memberAccount
 *      orderNo
 *      cnee
 *      timeType
 *      timeSection 2015/5/2-201/5/3
 *      page
 *      pageCount
 *  out:
 *      status
 *      msg
 *      data
 *      [
        {
            orderNo:'12334235577',//订单编号
            goods:[
                {
                    SKU:'26544',
                    goodsStatus:'',//已取消
                    count:'5'
                }
            ],
            orderCreateTime:'2015-5-2/15:35:22',
            payTime:'2015-5-2/15:35:22',
            sendTime: '2015-5-2/15:35:22',
            orderStatus:'waitPay',
            cnee:'张三',
            cneeAddress:'北京市海淀区海淀中街',
            phone:'1467899',
            price:'150',
            freight:'0',
            payMoney:'150',
            payType:'wx',
            expressCom:'sf',//快递公司
            expressNo:'1320'//物流单号
        }
    ],
    totalCount:'15'
}
 */

/**
 * @desc:订单查询列表接口 (H5)
 * @iName: orderListH5
 * @param;
 *  in:
 *      orderStatus
 *      phone
 *      memberAccount
 *      orderNo
 *      cnee
 *      timeType
 *      timeSection 2015/5/2-201/5/3
 *      page
 *      pageCount
 *  out:
 *      status
 *      msg
 *      data
 *      [
        {
            orderNo:'12334235577',//订单编号
            goods:[
                {
                    SKU:'26544',
                    goodsStatus:'',//已取消
                    count:'5'
                }
            ],
            orderCreateTime:'2015-5-2/15:35:22',
            payTime:'2015-5-2/15:35:22',
            sendTime: '2015-5-2/15:35:22',
            orderStatus:'waitPay',
            cnee:'张三',
            cneeAddress:'北京市海淀区海淀中街',
            phone:'1467899',
            price:'150',
            freight:'0',
            payMoney:'150',
            payType:'wx',
            expressCom:'sf',//快递公司
            expressNo:'1320'//物流单号
        }
    ],
    totalCount:'15'
}
 */

/**
 * @desc:订单详情接口 (H5)
 * @iName: orderDetialH5
 * @param;
 *  in:
 *      orderNo
 *  out:
 *      status
 *      msg
 *      data
 *      [
 *          orderNo
 *          OMSNo
 *          orderStatus
 *          source
 *          shopNo
 *          orderCreateTime
 *          payTime
 *          freight 运费
 *          payMoney 实付金额
 *          payScores 实付积分
 *          payType
 *          payStatus
 *          preScores  预估积分
 *          bindSKU
 *          bindCount
 *          bindReason 捆绑原因
 *          goods:[
 *              goodsNo
 *              goodsImg
 *              goodsName
 *              goodsStatus
 *              goodsType
 *              goodsSpgg 商品规格
 *              goodsWeight
 *              originalPrice  //吊牌价
 *              price          //销售价
 *              scoresValue    //积分价值
 *              size
 *              color
 *              sendTime       //出库时间
 *              expressCom 快递公司
 *              expressNo  物流单号
 *              isNormalPay  是否正价
 *              shareAmount  分摊金额
 *              goodsCount   商品数量
 *              cancelCount  取消数量
 *              applyCount   申请退货数量
 *              returnCount  已经退货数量
 *          ],
 *          buyerInfo:{
 *              buyerId
 *              address
 *              provinces  省
 *              cities
 *              area
 *          },
 *          shoppingGuide:{
 *              shopId
 *              guideId
 *              guideWeChat
 *          }
 *      ]
 *      totalCount
 */

/**
 * @desc:订单详情接口 (DGB)
 * @iName: orderDetialDGB
 * @param;
 *  in:
 *      orderNo
 *  out:
 *      status
 *      msg
 *      data
 *      [
 *          orderNo
 *          goodsNo
 *          OMSNo
 *          orderStatus
 *          source
 *          shopNo
 *          orderCreateTime
 *          payTime
 *          freight 运费
 *          payMoney 实付金额
 *          payScores 实付积分
 *          payType
 *          payStatus
 *          preScores  预估积分
 *          bindSKU
 *          bindCount
 *          bindReason 捆绑原因
 *          goods:[
 *              goodsNo
 *              goodsImg
 *              goodsName
 *              goodsStatus
 *              goodsType
 *              goodsSpgg 商品规格
 *              goodsWeight
 *              originalPrice  //吊牌价
 *              price          //销售价
 *              scoresValue    //积分价值
 *              size
 *              color
 *              sendTime       //出库时间
 *              expressCom 快递公司
 *              expressNo  物流单号
 *              isNormalPay  是否正价
 *              shareAmount  分摊金额
 *              goodsCount   商品数量
 *              cancelCount  取消数量
 *              applyCount   申请退货数量
 *              returnCount  已经退货数量
 *          ],
 *          buyerInfo:{
 *              buyerId
 *              address
 *              provinces  省
 *              cities
 *              area
 *          },
 *          shoppingGuide:{
 *              shopId
 *              guideId
 *              guideWeChat
 *          }
 *      ]
 *      totalCount
 */

//----------------------------------

/**
 * @desc:退款订单列表查询接口 (H5)
 * @iName: returnOrderListH5
 * @param;
 *  in:
 *      phone
 *      memberAccount
 *      returnOrderorderNo
 *      cnee
 *      timeType
 *      timeSection 2015/5/2-201/5/3
 *      page
 *      pageCount
 *      returnOrderStatus 退单状态
 *      returnOrderType   退单类型
 *  out:
 *      status
 *      msg
 *      data 待确定
 */

/**
 * @desc:退款订单列表查询接口 (DGB)
 * @iName: returnOrderListDGB
 * @param;
 *  in:
 *      phone
 *      memberAccount
 *      returnOrderorderNo
 *      cnee
 *      timeType
 *      timeSection 2015/5/2-201/5/3
 *      page
 *      pageCount
 *      returnOrderStatus
 *      returnOrderType
 *  out:
 *      status
 *      msg
 *      data 待确定
 */

/**
 * @desc:退单数量查询接口 (DGB)
 * @iName: returnOrderCountDGB
 * @param;
 *  in:
 *      returnOrderType
 *  out:
 *      status
 *      msg
 *      data
 *          count
 */

/**
 * @desc:退单数量查询接口 (H5)
 * @iName: returnOrderCountH5
 * @param;
 *  in:
 *  returnOrderType
 *  out:
 *      status
 *      msg
 *      data
 *          count
 */

/**
 * @desc:退单状态列表接口 (H5)
 * @iName: returnOrderStatusH5
 * @param;
 *  in:
 *  out:
 *      status
 *      msg
 *      data
 *          [
 *              {
 *                  key
 *                  value
 *              }
 *          ]
 */


/**
 * @desc:订单导出接口 (H5)
 * @iName: exportOrderByDateH5
 * @param;
 *  in:
		
 *  out:
 *      status
 *      msg
 *      data
 *          	excel
 */

/**
 * @desc:订单导出接口 (DGB)
 * @iName: exportOrderByDateDGB
 * @param;
 *  in:

 *  out:
 *      status
 *      msg
 *      data
 *          excel
 */

//异常单查询待定

/**
 * @desc:添加普通教程接口 (DGB)
 * @iName: addNorCourseDGB
 * @param;
 *  in:
		name
		picUrl
		content
		classifyId
 *  out:
 *      status
 *      msg
 *          
 */

/**
 * @desc:添加组图教程接口 (DGB)
 * @iName: addPicCourseDGB
 * @param;
 *  in:
		name
		picUrls :[]
		classifyId
 *  out:
 *      status
 *      msg
 *          
 */

/**
 * @desc:教程分类查询 (DGB)
 * @iName: courseClassifyListDGB
 * @param;
 *  in:
 *  out:
 *      status
 *      msg
 		data:[
			{
	classifyId
	classifyName
			}
 		]
 *          
 */

/**
 * @desc:教程列表查询 (DGB)
 * @iName: courseListDGB
 * @param;
 *  in:
		name
		classifyId
		classifyType
		courseStatus //显示 隐藏
		updateTime:'2015/01/02-2016/01/03'
 *  out:
 *      status
 *      msg
 		data:[
			{
	id
	name
	classifyId
	classifyName
	createTime
	updateTime
	courseStatus
			}
 		]
 *          
 */

/**
 * @desc:教程信息删除接口 (DGB)
 * @iName: courseDelDGB
 * @param;
 *  in:
			id
 *  out:
 *      status
 *      msg
 	
 *          
 */

/**
  * @desc:教程信息显示接口 (DGB)
 * @iName: courseDetailDGB
 * @param;
 *  in:
			id
 *  out:
 *      status
 *      msg
 	data:{
	id
	name
	classifyId
	classifyName
	createTime
	updateTime
	courseStatus
			}
 *          
 */

/**
 * @desc:教程信息隐藏接口 (DGB)
 * @iName: courseStatusEditDGB
 * @param;
 *  in:
			id
			courseStatus
 *  out:
 *      status
 *      msg
 *          
 */

/**
 * @desc:教程分类添加接口 (DGB)
 * @iName: courseClassifyAddDGB
 * @param;
 *  in:
			classifyName
 *  out:
 *      status
 *      msg
 *          
 */

/**
 * @desc:教程分类删除接口(DGB)
 * @iName: courseClassifyDelDGB
 * @param;
 *  in:
			classifyId
 *  out:
 *      status
 *      msg
 *          
 */

/**
 * @desc:教程分类编辑接口(DGB)
 * @iName: courseClassifyEditDGB
 * @param;
 *  in:
			classifyId
 *  out:
 *      status
 *      msg
 *          
 */

/**
 * @desc:试衣墙列表查询接口(DGB)
 * @iName: fittingWallListDGB
 * @param;
 *  in:
 		status
 		createDate
 		SKU
 *  out:
 *      status
 *      msg
 		data:[
	
 		]
 *          
 */

/**
 * @desc:试衣墙审核接口(DGB)
 * @iName: fittingWallAuditDGB
 * @param;
 *  in:
			id
 *  out:
 *      status
 *      msg
 *          
 */

/**
 * @desc:试衣墙删除接口(DGB)
 * @iName: fittingWallDelDGB
 * @param;
 *  in:
			id
 *  out:
 *      status
 *      msg
 *          
 */



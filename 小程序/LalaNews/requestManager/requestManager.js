var baseObj = require("./base.js");
const urlObj = baseObj.urlObj;
// 测试数据
const dataObj = {

  // 前段测试接口数据
  newsList:
  {
    code: 200,
    status: "ok",
    msg: {
      data: [
        {
          newsId: 100001,
          type: 1,
          newsData: {
            images: [
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3508432782,2370062306&fm=26&gp=0.jpg",
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=612732923,1531736981&fm=26&gp=0.jpg",
              "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=467248415,3177130934&fm=26&gp=0.jpg"
            ],
            author: "宝儿姐",
            description: "宝儿姐是《一人之下》动漫里面的女主角，对过去的事情没印象，一口四川话，一直在追寻自己的身世。"
          }
        },
        {
          newsId: 100002,
          type: 2,
          newsData: {
            videoUrl: "http://f.us.sinaimg.cn/003PlgWigx07mbt9Iekg01040200PpgN0k010.mp4?label=mp4_hd&template=848x480.28&Expires=1578908891&ssig=fVFUTJhGCQ&KID=unistore,video",
            author: "java视频",
          }
        },
        {
          newsId: 100003,
          type: 3,
          newsData: {
            images: [
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579515377&di=df67d21667c444bbb2320ed16ff88536&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F30%2F20180830121627_vkoli.thumb.700_0.jpg",
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578920718820&di=667db7da50119b23d9e084a5ccae20ca&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201801%2F02%2F20180102075450_jYG3K.jpeg",
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578920731416&di=5e842cfa0aaad82cef4825529876a65b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F11%2F20171111165037_CGmwe.thumb.700_0.jpeg",
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578920731414&di=a6c893414d614c7b1cbd6e6990971fbf&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F13%2F20180413140539_3VVfY.thumb.700_0.jpeg",
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578920795498&di=dd420a9f5b3e11468d12aaa4bf17da61&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20181220%2F5224588729114259be34915734206e79.gif",
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579515512&di=d4c2527dfce14ae979dce1ccfe9526b5&imgtype=jpg&er=1&src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-8097dff5b09fa09341b6f20ef17167f9_b.jpg",
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579515530&di=4ba73d29594b400129b822674297ebcf&imgtype=jpg&er=1&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F7c82b33bf607841ee98a04e5d8b8a9f0fb892d31.jpg",
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578920860988&di=e5159cf3c24be6aed03ddd5b3aa5282a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6a00f1dd773be89bc1615e42c72f9296975ce79f1e727-pi4b6h_fw236",
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578920860987&di=cd6c371ce2fe23d6e48599c40eef96da&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F04%2F20170304133907_8Kms4.thumb.700_0.jpeg",
            ],
            author: "图片社",
            description: "壁纸推荐,《一人之下》宝儿姐"
          }
        },
        {
          newsId: 100008,
          type: 1,
          newsData: {
            images: [
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3508432782,2370062306&fm=26&gp=0.jpg",
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=612732923,1531736981&fm=26&gp=0.jpg",
              "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=467248415,3177130934&fm=26&gp=0.jpg"
            ],
            author: "军事先锋",
            description: "乌克兰国际航空公司PS752航班坠毁之谜已经揭开，确系紧张过度的伊朗革命卫队防空导弹部队使用“道尔”M1防空导弹击落，伊朗革命卫队也已承认犯下过错并承担相应责任。大错已经铸成，再多辩解在176条逝去的鲜活生命面前都显得那么苍白无力，现在全世界最关心的到底是什么让伊朗革命卫队防空导弹部队如此紧张以至于擅自开火击落民航客机？"
          }
        }
      ]
    }
  }
}
// 获取tag列表 判断用户是否登录
function getTagList(isLoging) {
  let _url = null;
  if (isLoging) {

  } else {
    // 获取url
    _url = urlObj.getTagList + "normal";
  };

  const resultPromise = new Promise((res, rej) => {
    wx.request({
      url: _url,
      method: "GET",
      dataType: JSON,
      success(r) {
        let data = JSON.parse(r.data);
        res(data)
      },
      fail(e) {
        console.log(e);
        rej(e);
      }
    })
  })
  return resultPromise;
}
// 通过tagId获取新闻列表数据 num为获取数据数量
function getNewsListByTagId(tagId, start, end) {
  const _url = urlObj.getNewsListByTagIdTest + tagId + "/" + start + "/" + end;
  console.log(_url);
  const resultPromise = new Promise((res, rej) => {
    // 请求tagId
    wx.request({
      url: _url,
      method: "GET",
      dataType: JSON,
      success(r) {
        let _data = JSON.parse(r.data);
        // console.log(_data);
        res(_data)
      },
      fail(e) {
        console.log(e);
        rej(e);
      }
    })

    // res(data);
  })
  return resultPromise;
}
// 通过newsId获取新闻详情
function getNewsDetailById(newsId) {
  // 基本url
  const urlObj = baseObj.urlObj;
  const _url = urlObj.getNewsDetail + newsId;
  return new Promise((res, rej) => {
    // 请求newsDetail
    wx.request({
      url: _url,
      method: "GET",
      dataType: JSON,
      success(r) {
        let data = JSON.parse(r.data);
        // console.log(data);
        res(data)
      },
      fail(e) {
        console.log(e);
        rej(e);
      }
    })
    // let newsDatil = {
    //   status: "ok",
    //   msg: {
    //     data: {
    //       newsDetail: {
    //         author: "军事站",
    //         authorIcon: "http://img0.imgtn.bdimg.com/it/u=3573494950,1135963044&fm=26&gp=0.jpg",
    //         time: "2019 12 25",
    //         readNumber: 450,
    //         newsTitle: "巴铁原定采购的坦克大单 为何换成了236门中国火炮",
    //         description: [
    //           {
    //             type: "text",
    //             text: "这两天要论中国外贸武器的大单，那自然是莫过于印度媒体这两天大肆宣传的，巴基斯坦以5.12亿美元采购236门SH-15型155mm车载榴弹炮一事。作为我军自用PCL-181型的外贸型号，相比之前的SH-1更为高端的SH-15，确实较为适合巴陆军这种有一定追求的用户。如果这笔大单完全落实，也将成为我国历史上155mm自行火炮数量最大的一笔出口合同。 ",
    //           },
    //           {
    //             type: "image",
    //             imageUrl: "http://img5.imgtn.bdimg.com/it/u=1086167449,753389296&fm=26&gp=0.jpg"
    //           },
    //           {
    //             type: "text",
    //             text: "那么此时此刻，看似正被国内局势搞得手忙脚乱的莫迪，还会留给巴基斯坦羽翼丰满，再次形成新的平衡的机会吗？",
    //           },
    //         ],
    //         like: 300,
    //         comment: 68,
    //         // 评论列表
    //         commentList: [
    //           {
    //             newsId: "xxxx",
    //             userId: "xxx",
    //             commentId: 200001,
    //             name: "我是小可爱",
    //             icon: "http://img0.imgtn.bdimg.com/it/u=1013836434,2856026442&fm=26&gp=0.jpg",
    //             comment: "这篇文章真的好好看啊，我好喜欢啊。尤其是对于最近的点评，我认为一针见血，非常有见识。",
    //             parentId: null,
    //             date: "01-15 15:26",
    //             chirden: [
    //               {
    //                 newsId: "xxxx",
    //                 userId: "xxx",
    //                 commentId: 200002,
    //                 name: "我是大可爱",
    //                 icon: "http://img4.imgtn.bdimg.com/it/u=3324373648,3312850096&fm=26&gp=0.jpg",
    //                 comment: "我爱你啊！！！简直不要太准确",
    //                 parentId: 200001,
    //                 parentName: "我是小可爱",
    //                 date: "01-15 16:26",
    //               },
    //               {
    //                 newsId: "xxxx",
    //                 userId: "xxx",
    //                 commentId: 200003,
    //                 name: "宝儿姐",
    //                 icon: "http://img0.imgtn.bdimg.com/it/u=2453757916,3350221512&fm=26&gp=0.jpg",
    //                 comment: "qwq  qwq  qwq",
    //                 parentId: 200002,
    //                 parentName: "我是大可爱",
    //                 date: "01-16 16:26",
    //               },
    //               {
    //                 newsId: "xxxx",
    //                 userId: "xxx",
    //                 commentId: 200154,
    //                 name: "小粉丝",
    //                 icon: "http://img0.imgtn.bdimg.com/it/u=2453757916,3350221512&fm=26&gp=0.jpg",
    //                 comment: "爱你爱你么么哒 mua mua mua",
    //                 parentId: 200003,
    //                 parentName: "宝儿姐",
    //                 date: "01-16 16:26",
    //               },
    //             ]
    //           },
    //           {
    //             newsId: "xxxx",
    //             userId: "xxx",
    //             commentId: 200004,
    //             name: "小啦啦",
    //             icon: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2266619897,80295209&fm=26&gp=0.jpg",
    //             comment: "哦豁 ya ho",
    //             parentId: null,
    //             date: "01-17 09:00",
    //             chirden: [
    //               {
    //                 newsId: "xxxx",
    //                 userId: "xxx",
    //                 commentId: 200045,
    //                 name: "yes",
    //                 icon: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2186613436,1873319160&fm=26&gp=0.jpg",
    //                 comment: "？？？",
    //                 parentId: 200004,
    //                 parentName: "小啦啦",
    //                 date: "01-17 12:41",
    //               },
    //               {
    //                 newsId: "xxxx",
    //                 userId: "xxx",
    //                 commentId: 200078,
    //                 name: "宝儿姐",
    //                 icon: "http://img0.imgtn.bdimg.com/it/u=2453757916,3350221512&fm=26&gp=0.jpg",
    //                 comment: "qwq  qwq  qwq",
    //                 parentId: 200004,
    //                 parentName: "小啦啦",
    //                 date: "01-18 16:26",
    //               },
    //               {
    //                 newsId: "xxxx",
    //                 userId: "xxx",
    //                 commentId: 200079,
    //                 name: "沙发上",
    //                 icon: "http://img0.imgtn.bdimg.com/it/u=2453757916,3350221512&fm=26&gp=0.jpg",
    //                 comment: "大概几点国际饭店",
    //                 parentId: 200004,
    //                 parentName: "小啦啦",
    //                 date: "01-20 16:26",
    //               },
    //               {
    //                 newsId: "xxxx",
    //                 userId: "xxx",
    //                 commentId: 200080,
    //                 name: "按初步形成的时光",
    //                 icon: "http://img0.imgtn.bdimg.com/it/u=2453757916,3350221512&fm=26&gp=0.jpg",
    //                 comment: "我是我是萨菲科技奥斯卡积分换空间哈是否",
    //                 parentId: 200079,
    //                 parentName: "沙发上",
    //                 date: "01-21 16:26",
    //               },
    //               {
    //                 newsId: "xxxx",
    //                 userId: "xxx",
    //                 commentId: 200079,
    //                 name: "只需在楼下",
    //                 icon: "http://img0.imgtn.bdimg.com/it/u=2453757916,3350221512&fm=26&gp=0.jpg",
    //                 comment: "你是你是爱上了更加时间赶快拉上",
    //                 parentId: 200004,
    //                 parentName: "小啦啦",
    //                 date: "01-25 16:26",
    //               },
    //               {
    //                 newsId: "xxxx",
    //                 userId: "xxx",
    //                 commentId: 200080,
    //                 name: "就是爱你哦",
    //                 icon: "http://img0.imgtn.bdimg.com/it/u=2453757916,3350221512&fm=26&gp=0.jpg",
    //                 comment: "赶快过来爱发科就撒空间功能即可洒",
    //                 parentId: 200004,
    //                 parentName: "小啦啦",
    //                 date: "01-25 16:26",
    //               },
    //             ]
    //           },
    //           {
    //             newsId: "xxxx",
    //             userId: "xxx",
    //             commentId: 200001,
    //             name: "我是小可爱",
    //             icon: "http://img0.imgtn.bdimg.com/it/u=1013836434,2856026442&fm=26&gp=0.jpg",
    //             comment: "这篇文章真的好好看啊，我好喜欢啊。尤其是对于最近的点评，我认为一针见血，非常有见识。",
    //             parentId: null,
    //             date: "01-15 15:26",
    //             chirden: null
    //           },
    //         ]
    //       }
    //     }
    //   }
    // }
    // res(newsDatil);
  })
}
// 获取推荐标签列表
function getRecommendList() {
  // 基本url
  const urlObj = baseObj.urlObj;
  const _url = urlObj.recommendList;

  return new Promise((res, rej) => {
    // 请求newsDetail
    // wx.request({
    //     url: _url,
    //     method: "GET",
    //     dataType: JSON,
    //     success(r) {
    //         let data = JSON.parse(r.data);
    //         res(data)
    //     },
    //     fail(e) {
    //         console.log(e);
    //         rej(e);
    //     }
    // })
    let recommendList = {
      status: "ok",
      msg: {
        data: {
          recommendList: [
            {
              tagId: 500004,
              name: "教育"
            },
            {
              tagId: 500005,
              name: "房产"
            },
            {
              tagId: 500006,
              name: "儿童"
            },
            {
              tagId: 500007,
              name: "漫画"
            },
            {
              tagId: 500008,
              name: "足球"
            },
            {
              tagId: 500009,
              name: "科学"
            },
            {
              tagId: 500010,
              name: "动漫"
            },
            {
              tagId: 500011,
              name: "图片"
            },
            {
              tagId: 500012,
              name: "游戏"
            },
            {
              tagId: 500013,
              name: "国际"
            },
            {
              tagId: 500014,
              name: "颜色"
            },
            {
              tagId: 500015,
              name: "时尚"
            },
          ]
        }
      }
    }
    res(recommendList);
  })


}
module.exports = {
  getNewsListByTagId,
  getNewsDetailById,
  getRecommendList,
  getTagList
}
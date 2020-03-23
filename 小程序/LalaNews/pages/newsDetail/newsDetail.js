// pages/newsDetail/newsDetail.js
var toolsObj = require("../../utils/tools.js").toolsObj;
var requestManager = require("../../requestManager/requestManager.js"),
  toolsObj = require("../../utils/tools.js").toolsObj,
  getGlobalData = toolsObj.getGlobalData;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 图片列表
    imgArr: {
      like: "https://allall01.baidupcs.com/file/46d2e0197o91bda4f981bed0215619e0?bkt=en-9917cc7abd88e3cbf42d5cde61ebf98d4a87df3eebcfa5fd6cfb50902b42bbaa14f781bb98d4f27b1c1cf697385f07f9e3634df01d1ebfb9244cc14fc5c2021e&fid=2520579851-250528-900654028234057&time=1584769596&sign=FDTAXGERLQlBHSKfW-DCb740ccc5511e5e8fedcff06b081203-TOUBwnDT9E24JDS5Oo6xbLWzHo8%3D&to=79&size=6238&sta_dx=6238&sta_cs=0&sta_ft=png&sta_ct=0&sta_mt=0&fm2=MH%2CQingdao%2CAnywhere%2C%2Cchongqing%2Cpbs&ctime=1584769297&mtime=1584769297&resv0=-1&resv1=0&resv2=rlim&resv3=5&resv4=6238&vuk=2520579851&iv=0&htype=&randtype=&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=en-fb3cdab8603d43b6e6ce43609003a9c707cf7b31b8fc445a71a098ec7bec244405ae8636c06f87c6374071706585047289b8316feccbf407305a5e1275657320&sl=68616270&expires=8h&rt=pr&r=842840066&vbdid=2297401724&fin=%E5%96%9C%E6%AC%A2.png&fn=%E5%96%9C%E6%AC%A2.png&rtype=1&dp-logid=1868739185252834223&dp-callid=0.1&hps=1&tsl=200&csl=200&fsl=-1&csign=Q8GLXaLW5jg96POqvgnVtikHPPY%3D&so=0&ut=6&uter=4&serv=0&uc=2970450506&ti=12146e4ffd7df3c9cd82684a7a2e51cbb64cabf790151033305a5e1275657320&reqlabel=250528_f_a72782ca42bdadb680a2d03302f49c52_-1_50a000a426f104dcd1d2af8487a21d52&by=themis",
      likeSelect: "https://allall01.baidupcs.com/file/483951b6ai0639bf625f0c3dc63f2af8?bkt=en-6f7dc9883530f8c96a74cf7de323b43ef3f37fe8df72b5d5abc8af127e459ea50f696e7e75717761dc4328bfb097c0358fe446f200b226cfbbd9b5a25fe08b91&fid=2520579851-250528-373902056427951&time=1584770258&sign=FDTAXGERLQlBHSKfW-DCb740ccc5511e5e8fedcff06b081203-qBC%2BSn0ycNz7gdXbPAzNfIiRjqY%3D&to=79&size=8244&sta_dx=8244&sta_cs=0&sta_ft=png&sta_ct=0&sta_mt=0&fm2=MH%2CYangquan%2CAnywhere%2C%2Cchongqing%2Cpbs&ctime=1584770252&mtime=1584770252&resv0=-1&resv1=0&resv2=rlim&resv3=5&resv4=8244&vuk=2520579851&iv=0&htype=&randtype=&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=en-dfed871737d475e445879e2505841f968c1c9c08d45d19f918565afee8a9a51f1e82d72d6a40c44ec1355f5fd699f4d62cbb5d7fb4e751b8305a5e1275657320&sl=68616270&expires=8h&rt=pr&r=138007415&vbdid=2297401724&fin=%E5%96%9C%E6%AC%A2+%282%29.png&fn=%E5%96%9C%E6%AC%A2+%282%29.png&rtype=1&dp-logid=1868916707539662898&dp-callid=0.1&hps=1&tsl=200&csl=200&fsl=-1&csign=Q8GLXaLW5jg96POqvgnVtikHPPY%3D&so=0&ut=6&uter=4&serv=0&uc=2970450506&ti=50dc2888c529211bc3b63e1150ceedb9c4b435f8f4fde81c&reqlabel=250528_f_a72782ca42bdadb680a2d03302f49c52_-1_50a000a426f104dcd1d2af8487a21d52&by=themis",
      comment: "https://allall01.baidupcs.com/file/8dd04ce3bk13913fe543d322b4ad0837?bkt=en-2d9e6f81f9f5bca03907504fd31549316ee97fbd6a768042ba667ce222e1b3139f2641146909758d14c7db6d52fb1b82cfb0104cefc4c67c1649c00f627727df&fid=2520579851-250528-862326622838356&time=1584769661&sign=FDTAXGERLQlBHSKfW-DCb740ccc5511e5e8fedcff06b081203-A%2BI5H15xtUE84P5K05EMY8fSX2c%3D&to=79&size=3753&sta_dx=3753&sta_cs=0&sta_ft=png&sta_ct=0&sta_mt=0&fm2=MH%2CQingdao%2CAnywhere%2C%2Cchongqing%2Cpbs&ctime=1584769312&mtime=1584769312&resv0=-1&resv1=0&resv2=rlim&resv3=5&resv4=3753&vuk=2520579851&iv=0&htype=&randtype=&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=en-49d271eafc2d05bb4d151adef391a608bcf8a782ef57393f033f51ebbbef0b85154daf2d7a4479cfbecc6104bbe03a0b1af24f44899bb2f2305a5e1275657320&sl=68616270&expires=8h&rt=pr&r=681627629&vbdid=2297401724&fin=%E6%B6%88%E6%81%AF.png&fn=%E6%B6%88%E6%81%AF.png&rtype=1&dp-logid=1868756399277394094&dp-callid=0.1&hps=1&tsl=200&csl=200&fsl=-1&csign=Q8GLXaLW5jg96POqvgnVtikHPPY%3D&so=0&ut=6&uter=4&serv=0&uc=2970450506&ti=54c943154d862903e563312c9297a9dc51a81113f88da444&reqlabel=250528_f_a72782ca42bdadb680a2d03302f49c52_-1_50a000a426f104dcd1d2af8487a21d52&by=themis"
    },
    review: "yes",
    isReview: false,
    isCollect: false,
    // 标记用户回复评论，是针对文章还是用户进行评论。 -1表示文章
    parentId: -1,
    newsId: null,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const newsId = toolsObj.getGlobalData("newsId");
    this.setData({
      newsId: newsId
    })
    // 通过新闻id获取新闻详情
    let resultPromise = requestManager.getNewsDetailById(newsId);
    resultPromise.then((data) => {
      if (data.status == "ok") {
        this.setData({
          newsDetail: data.msg.data
        })
      }
    })

  },
  // 显示回复的输入框
  showReview(msg) {
    let commetnId = msg.detail.detail.commentId,
      userName = msg.detail.detail.userName;
    this.setData({
      review: userName,
      isReview: true,
      parentId: commetnId
    })
  },
  // 点击了发送后
  bindconfirm(e) {
    // 得到对谁评论，和评论信息。
    let parentId = this.data.parentId,
      context = e.detail.value,
      newsId = this.data.newsId,
      openId = toolsObj.getGlobalData("openId"),
      self = this;
    // 隐藏输入框
    this.setData({
      isReview: false
    })
    // 如果用户已经登录才可以进行评论
    if (openId) {
      // 发送请求
      requestManager.addComment(openId, newsId, context, parentId).then((e) => {
        // 如果为1表示插入成功
        if (1) {
          self.showInfo("评论成功", "success")
          // 重新设置，重新获取评论
          self.reflashComment();
        }
      });
    } else {
      self.showInfo("你还没有登录呢")
    }

  },
  // 获取本新闻是否被用户收藏
  isCollect() {
    // 从全局上获取openId 和 newsId
    let openId = getGlobalData("openId"),
      newsId = getGlobalData("newsId");
    let promise = requestManager.getNewsIsCollect(openId, newsId),
      self = this;
    promise.then((res) => {
      self.setData({
        isCollect: res.msg.data
      })
    })
  },
  // 评论按钮点击
  comment() {
    this.setData({
      review: "",
      isReview: true,
      parentId: -1
    })
  },
  // 提示信息
  showInfo(info, _icon = "none") {
    wx.showToast({
      title: info,
      icon: _icon
    })
  },
  // 刷新评论
  reflashComment() {
    let self = this;
    requestManager.getNewsCommentsByNewsId(this.data.newsId).then((e) => {
      console.log(e);
      let _newsDetail = this.data.newsDetail;
      _newsDetail.comments = e;
      self.setData({
        newsDetail: _newsDetail
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 判断是用户是否收藏本新闻
    this.isCollect();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
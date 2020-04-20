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
      like: "http://ww1.sinaimg.cn/large/4c09a5b4gy1gdz2blwzyrj205k05k3ye.jpg",
      likeSelect: "http://ww1.sinaimg.cn/large/4c09a5b4gy1gdz2blwud6j205k05k0so.jpg",
      comment: "http://ww1.sinaimg.cn/large/4c09a5b4gy1gdz2blxjvfj205k05kmwz.jpg"
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
    // 显示分享按钮
    wx.showShareMenu({

    })
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
      userName = msg.detail.detail.userName,
      ancestorId = msg.detail.detail.ancestorId;
    this.setData({
      review: userName,
      isReview: true,
      parentId: commetnId,
      ancestorId: ancestorId
    })
  },
  // 点击了发送后
  bindconfirm(e) {
    // 得到对谁评论，和评论信息。
    let parentId = this.data.parentId,
      context = e.detail.value,
      newsId = this.data.newsId,
      ancestorId = this.data.ancestorId,
      openId = toolsObj.getGlobalData("openId"),
      self = this;
    // 隐藏输入框
    this.setData({
      isReview: false
    })
    // 如果用户已经登录才可以进行评论
    if (openId) {
      // 发送请求
      requestManager.addComment(openId, newsId, context, parentId, ancestorId).then((e) => {
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
    // 重新请求获取评论
    requestManager.getNewsCommentsByNewsId(this.data.newsId).then((e) => {
      console.log(e);
      let _newsDetail = this.data.newsDetail;
      _newsDetail.comments = e;
      self.setData({
        newsDetail: _newsDetail
      })
    })
    // 更新显示条数
  },
  // 分享方法
  onShareAppMessage() {
    let url = encodeURIComponent('/pages/newsDetail/newsDetail?newsId=' + this.data.newsId);
    return {
      title: "lala新闻",
      path: `/pages/index/index?url=${url}`
    }
  },
  // 收藏按钮取消方法
  clickCollect(){

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
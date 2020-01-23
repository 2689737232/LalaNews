// pages/newsDetail/newsDetail.js
var toolsObj = require("../../utils/tools.js").toolsObj;
var requestManager = require("../../requestManager/requestManager.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    review: "yes",
    isReview: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const newsId = toolsObj.getGlobalData("newsId");
    // 通过新闻id获取新闻详情
    let resultPromise = requestManager.getNewsDetailById(newsId);
    resultPromise.then((data) => {
      if (data.status == "ok") {
        this.setData({
          newsDetail: data.msg.data
        })
        console.log(data.msg.data,"465646");
      }
    })
  },
  // 显示回复的输入框
  showReview(msg) {
    let commetnId = msg.detail.detail.commetnId,
        userName = msg.detail.detail.userName;
        console.log(msg);
    this.setData({
      review: userName,
      isReview: true
    })
  },
  // 点击了发送后
  bindconfirm(){
    this.setData({
      isReview: false
    })
    // 发送请求
    /*
      ********* TODO 
     */
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
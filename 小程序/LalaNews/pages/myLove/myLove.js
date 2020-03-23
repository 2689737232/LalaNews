// pages/myLove/myLove.js
const getUserCollectByOpenId = require("../../requestManager/requestManager.js").getUserCollectByOpenId;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId: null,
    // 用户收藏列表
    collectList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("收藏页面重新加载");
    let openId = options.openId;
    this.setData({
      openId: openId
    })
    this.getUserCollect(openId, 0, 5);
  },
  // 获取用户收藏列表
  getUserCollect(openId, start, end) {
    let promise = getUserCollectByOpenId(openId, start, end);
    let self = this;
    promise.then((res) => {
      console.log(res);
      let collectList = res.msg.data;
      self.setData({
        collectList: collectList
      })
    })
  },
  // 获取用户的收藏新闻列表
  getUserLoveList() {

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
// pages/search/search.js
let getRecommendList = require("../../requestManager/requestManager.js").getRecommendList;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    alreadyAdd: [
      {
        tagId: 500001,
        name: "美食"
      },
      {
        tagId: 500002,
        name: "科技"
      },
      {
        tagId: 500003,
        name: "军事"
      },
    ],
    recommendList: [],
    touchIndex: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    let resultPromisse = getRecommendList();
    resultPromisse.then((res) => {
      let recommendList = res.msg.data.recommendList;
      self.setData({
        recommendList: recommendList
      })
    })
  },
  // 推荐列表每一项触摸开始
  itemTouchStart(msg) {
    let index = msg.currentTarget.dataset.index;
    this.setData({
      touchIndex: index
    })
  },
  // 触摸结束
  itemTouchEnd(msg) {
    this.setData({
      touchIndex: null
    })
  },
  // 推荐的项目点击事件
  itemTap(msg) {
    let index = msg.currentTarget.dataset.index,
      item = this.data.recommendList[index],
      result = false,
      _alreadyAdd = this.data.alreadyAdd;
    _alreadyAdd.forEach((p, i) => {
      if (p.tagId == item.tagId) {
        result = true
      }
    })
    // 如果这一项不在已经添加的列表中，那么就添加进列表
    result ? null : _alreadyAdd.push(item);
    this.setData({
      alreadyAdd: _alreadyAdd
    })
  },
  // 取消已经添加的标签
  cancelItem(msg) {
    let index = msg.currentTarget.dataset.index;
    let _alreadyAdd = this.data.alreadyAdd;
    _alreadyAdd.splice(index, 1);
    this.setData({
      alreadyAdd: _alreadyAdd
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selectIndex: 0
      })
    }
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
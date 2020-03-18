// pages/search/search.js
let getRecommendList = require("../../requestManager/requestManager.js").getRecommendList;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 搜索框是否聚焦，聚焦后显示清空按钮
    isFoucs: false,
    // 输入框的初始值
    value:"",
    // 已经添加的列表
    alreadyAdd: [
      {
        tagId: 500001,
        tagName: "美食"
      },
      {
        tagId: 500002,
        tagName: "科技"
      },
      {
        tagId: 500003,
        tagName: "军事"
      },
    ],
    // 推荐标签列表
    recommendList: [],
    // 触摸的标签index
    touchIndex: null,
    // 第一个推荐标签列表
    firstRecommendList: null,
    start: 0,
    end: 9
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    let resultPromisse = getRecommendList(0, 9);
    resultPromisse.then((res) => {
      console.log(res);
      let recommendList = res.msg.data;
      self.setData({
        recommendList: recommendList,
        firstRecommendList: recommendList
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
    });
    // 如果这一项不在已经添加的列表中，那么就添加进列表
    result ? null : _alreadyAdd.push(item);
    this.setData({
      alreadyAdd: _alreadyAdd
    });
  },
  // 取消已经添加的标签
  cancelItem(msg) {
    let index = msg.currentTarget.dataset.index;
    let _alreadyAdd = this.data.alreadyAdd;
    // 如果只剩一项了不进行取消
    _alreadyAdd.length == 1 ? null : _alreadyAdd.splice(index, 1);
    this.setData({
      alreadyAdd: _alreadyAdd
    })
  },
  // 换一批
  otherList() {
    let self = this,
      selfData = this.data;
    // 每点击一次，推荐列表跟换一次
    selfData.start += 10;
    selfData.end += 10;
    let resultPromisse = getRecommendList(selfData.start, selfData.end);
    resultPromisse.then((res) => {
      let recommendList = res.msg.data;
      // 判断是否为空
      if (!recommendList.length) {
        // 如果已经没有推荐的标签了，初始化页码
        selfData.start = 0;
        selfData.end = 9;
        // 并且设置为第一个推荐列表
        recommendList = self.data.firstRecommendList;
      }
      self.setData({
        recommendList: recommendList
      })
    })
  },
  // 搜索框聚焦
  focus(e) {
    this.setData({
      isFoucs: true
    })
  },
  // 搜索框失去焦点
  blur() {
    this.setData({
      isFoucs: false
    })
  },
  // 搜索框点击确认
  confirm() {
    console.log("确认");
  },
  // 点击清除按钮，清空搜索框
  clear(){
     this.setData({
       value: ""
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
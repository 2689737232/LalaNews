// pages/search/search.js
let requestManager = require("../../requestManager/requestManager.js"),
  getRecommendList = requestManager.getRecommendList,
  getUserTag = requestManager.getUserTag,
  toolsObj = require("../../utils/tools.js").toolsObj;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 搜索框是否聚焦，聚焦后显示清空按钮
    isFoucs: false,
    // 是否点击搜索
    isSearch: false,
    // 用于存放搜索结果的推荐下标
    searchListIndex: [],
    // 输入框的初始值
    value: "",
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
    // 获取底部9个推荐标签
    let resultPromisse = getRecommendList(0, 9);
    resultPromisse.then((res) => {
      // console.log(res, "********");
      let recommendList = res.msg.data;
      self.setData({
        recommendList: recommendList,
        firstRecommendList: recommendList
      })
    })


  },
  // 推荐列表，每一个标签触摸开始
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
      tagId = item.tagId,
      result = false,
      _alreadyAdd = this.data.alreadyAdd,
      openId = toolsObj.getGlobalData("openId"),
      self = this;

    // 循环遍历数组判断是否在其中，不在其中就添加进去
    _alreadyAdd.forEach((p, i) => {
      if (p.tagId == item.tagId) {
        result = true
      }
    });
    // 如果用户存在并且这一项不存在的话进行添加
    if (openId && !result) {
      // 提交到后端，根据数据。在页面上进行添加
      requestManager.insertUserTag(openId, tagId).then((e) => {
        console.log(e);
        e.msg.data ? _alreadyAdd.push(item) : null;
        self.setData({
          alreadyAdd: _alreadyAdd
        });
      })
    }
    if (!openId && !result) {
      // 如果这一项不在已经添加的列表中，那么就添加进列表
      result ? null : _alreadyAdd.push(item);
    }

    self.setData({
      alreadyAdd: _alreadyAdd
    });
  },
  // 取消已经添加的标签
  cancelItem(msg) {
    let index = msg.currentTarget.dataset.index,
      openId = toolsObj.getGlobalData("openId"),
      _alreadyAdd = this.data.alreadyAdd;

    // 并且如果只剩一项,就不能取消
    // 如果用户已经登录，连接后端。
    if (openId && _alreadyAdd.length != 1) {
      // console.log(index,this.data.alreadyAdd[index]);

      let tagId = this.data.alreadyAdd[index].tagId;
      // 根据后端返回数据清除指定项目
      requestManager.deleteUserTagByTagId(openId, tagId).then((e) => {
        // 判断是否是最后一个如果是最后一个不能删除
        e.msg.data ? _alreadyAdd.splice(index, 1) : null;
        // 重新设置数据驱动渲染
        this.setData({
          alreadyAdd: _alreadyAdd
        })
      })
    } else {
      // 清除指定项
      _alreadyAdd.length != 1 ? _alreadyAdd.splice(index, 1) : null;
    }
    // 重新设置数据驱动渲染
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
  confirm(e) {
    let searchListIndex = [],
      // 搜索关键字
      key = e.detail.value,
      recommendList = this.data.recommendList,
      self = this;
    // 循环标签列表，添加符合的索引
    recommendList.forEach(function (ele, index) {
      if (ele.tagName.indexOf(key) != -1) {
        searchListIndex.push(index)
        self.setData({
          searchListIndex: searchListIndex
        })
      }
    })
    console.log(searchListIndex);

    // 显示搜索框
    this.setData({
      isSearch: true
    })
  },
  // 点击清除按钮，清空搜索框
  clear() {
    this.setData({
      value: ""
    })
  },
  // 点击搜索结果
  searchItemClick(e) {
    let index = e.currentTarget.dataset.index,
      recommendList = this.data.recommendList,
      alreadyAdd = this.data.alreadyAdd,
      flag = true;

    // 判断列表里面是否有这一项
    alreadyAdd.forEach(function (ele, _index) {
      if (ele.tagName == recommendList[index].tagName) {
        flag = false
      }
    })
    flag ? alreadyAdd.push(this.data.recommendList[index]) : undefined;
    this.setData({
      alreadyAdd: alreadyAdd,
      isSearch: false
    })
  },
  // 获取已经登录的用户的喜欢的标签
  getUserTag() {
    let openId = toolsObj.getGlobalData("openId"),
      self = this;
    if (openId) {
      let promise = getUserTag(openId);
      promise.then((e) => {
        self.setData({
          alreadyAdd: e.msg.data.tagList
        })
      })
    }
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
    this.initTabBar();
    // 获取登录用户已经添加的标签
    this.getUserTag();
  },
  // 初始化tabBar
  initTabBar() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selectIndex: 0
      })
    }
  },
  // 获取
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
   * 页面上拉触
   * 底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
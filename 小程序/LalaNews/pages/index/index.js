//index.js
//获取应用实例
const app = getApp()
var tools = require("../../utils/tools.js");
// 拿取到获取新闻列表、标签列表方法
const getNewsListByTagId = require("../../requestManager/requestManager.js").getNewsListByTagId,
  getTagList = require("../../requestManager/requestManager.js").getTagList;


Page({
  data: {
    // 首页滚动数据  用户登录后更新用户的数据
    tagArr: null,
    newsList: null,
    selectIndex: 0,
    // 是否加载完毕
    isLoadOver : false
  },
  onLoad: function () {
    // 初始化标题栏
    this.initNavigationBar();
    // 获取index所有数据
    this.getIndexData();
    // 获取用户喜欢的标签列表
  },
  onShow() {
    this.getIndexData();
  },
  // 初始化小程序页面顶部的颜色文字
  initNavigationBar() {
    // 设置界面标题
    tools.proxySetNavigationBar("lala新闻");
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#0572CD',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  // 获取index页面的所有数据
  getIndexData() {
    // 获取openId
    let openId = tools.toolsObj.getGlobalData("openId"),
      index = this.data.selectIndex,
      self = this;
    // 用户没有登录，就获取指定的tag。用户登录后，根据openId获取对应列表
    const tagListPromise = getTagList(openId);
    tagListPromise.then((r) => {
      let _tagArr = r.msg.data.tagList;
      // 设置tag列表
      self.setData({
        tagArr: _tagArr
      })
      // 成功获取tag标签后，再通过被选中的tagId获取新闻列表的的promise对象默认获取3条
      return getNewsListByTagId(_tagArr[index].tagId, 0, 3);
    }, (e) => {
      console.log(e, "获取失败");
    }).then((r) => {
      if (r.status == "ok") {
        // 设置每一个tag种类的新闻列表
        this.setData({
          newsList: r.msg.data
        })
      }
    })
  },
  // indexScroll触发自定义事件后，这里获取到index跟换tag
  itemClick(e) {
    let index = e.detail.index,
      tagArr = this.data.tagArr,
      self = this;
    // 重新获取对应页面的新闻
    getNewsListByTagId(tagArr[index].tagId, 0, 3).then((e) => {
      let newsList = e.msg.data;
      // 判断是否加载完毕,加载完毕取消遮罩层
      self.setData({
        newsList: newsList
        // isLoadOver : true
      })
    })
  }
})

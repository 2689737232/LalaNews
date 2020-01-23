//index.js
//获取应用实例
const app = getApp()
var tools = require("../../utils/tools.js");
const getNewsListByTagId = require("../../requestManager/requestManager.js").getNewsListByTagId,
  getTagList = require("../../requestManager/requestManager.js").getTagList;

Page({
  data: {
    // 首页滚动数据  用户登录后更新用户的数据
    tagArr: null,
    newsList: null
  },
  onLoad: function () {
    let self = this;
    // 初始化标题栏
    this.initNavigationBar();
    // 获取标题栏的请求Promise对象
    const tagListPromise = getTagList(false);
    tagListPromise.then((r) => {
      let _tagArr = r.msg.data.tagList;
      // 设置tag列表
      self.setData({
        tagArr: _tagArr
      })
      // 成功获取tag标签后，再通过tagId获取新闻列表的的promise对象
      return getNewsListByTagId(100000001,0,3);
    },(e)=>{
      console.log(e);
    }).then((r) => {
      if (r.status == "ok") {
        // 设置每一个tag种类的新闻列表
        this.setData({
          newsList: r.msg.data
        })
      }
    })
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selectIndex: 1
      })
    }
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
  }
})

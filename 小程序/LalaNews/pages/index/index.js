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
    // 被选中的tagindex
    selectIndex: 0,
    // 是否加载完毕
    isLoadOver: false
  },
  onLoad: function () {
    console.log(tools.toolsObj.getGlobalData("openId"),"openid在这里******");
    
    // 初始化标题栏
    this.initNavigationBar();
    // 获取index所有数据
    this.getIndexData();
  },
  onShow() {
     // 重新获取点击的tag index
     let tagIndex = tools.toolsObj.getGlobalData("tagIndex") || this.data.selectIndex;
     this.setData({
       selectIndex: tagIndex
     })
    // 判断用户是否登录,如果登录后重新获取用户的数据
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
  // 再次得到tagIndex。以解决点击进入新闻详情页面后再退出来。回到index页面tagIndex显示不对的情况
  reGetTagIndex() {
    // 获取上一次的index
    let index = tools.toolsObj.getGlobalData("tagIndex") || 0;
    // 设置选中的index。
    this.setData({
      selectIndex: index
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
      let _tagArr = r.msg.data.tagList,
        currentTagId = _tagArr[index].tagId;
      // 设置tag列表
      self.setData({
        tagArr: _tagArr
      })
      // 初始化global的tagId
      tools.toolsObj.setGlobal2Data('tagId', currentTagId);
      // 成功获取tag标签后，再通过被选中的tagId获取新闻列表的的promise对象默认获取3条
      return getNewsListByTagId(currentTagId, 0, 3);
    }, (e) => {
      console.log(e, "获取失败");
    }).then((r) => {
      // 如果成功获取当前tag的新闻
      if (r.status == "ok") {
        // 设置每一个tag种类的新闻列表
        this.setData({
          newsList: r.msg.data
        })
        // 初始化global新闻列表
        tools.toolsObj.setGlobal2Data('newsList', r.msg.data);
      }
    })

  },
  // indexScroll组件触发自定义事件后，这里获取到index跟tag
  itemClick(e) {
    let index = e.detail.index,
      tagArr = this.data.tagArr,
      self = this;
    // 重新获取对应页面的新闻
    getNewsListByTagId(tagArr[index].tagId, 0, 3).then((e) => {
      let newsList = e.msg.data;
      // 每点击一个新的tag，重新初始化全局的新闻列表
      tools.toolsObj.setGlobal2Data("newsList", newsList);
      // 判断是否加载完毕,加载完毕取消遮罩层
      self.setData({
        newsList: newsList
        // isLoadOver : true
      })
    })
  },
  // 子组件，新闻触底后触发。加载更多
  reachBottom(e) {
    // 获取触底刷新得到的新列表,合并当前的列表
    let newsList = this.data.newsList.concat(e.detail.newList);
    console.log(newsList);

    this.setData({
      newsList: newsList
    })
  }
})

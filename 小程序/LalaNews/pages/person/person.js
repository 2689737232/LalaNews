// pages/person/person.js
const urlObj = require("../../requestManager/base.js").urlObj,
  toolsObj = require("../../utils/tools.js").toolsObj,
  setGlobal2Data = toolsObj.setGlobal2Data;    // 获取将登录信息设置到全局的方法
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoging: false,
    userIcon: null,
    userName: null,
    openId: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 登录按钮点击事件
  login() {
    let self = this;
    wx.getSetting({
      success(res) {
        // 如果用户有授权，登录获取用户信息
        if (res.authSetting["scope.userInfo"]) {
          self._getUserInfo();
          // 获取用户openID
          self.getUserOpenId();
        }
      }
    });
  },
  // 获取用户的openId
  getUserOpenId() {
    const self = this;
    wx.login({
      success(res) {
        // console.log(res);
        let code = res.code;
        // 获取用户id请求url
        const url = "https://api.weixin.qq.com/sns/jscode2session?appid=wx19ffc3b13177e5ef&secret=beb3167469169ebc73c8ca3ecf2a0c9e&js_code=" + code + "&grant_type=authorization_code";
        wx.request({
          url: url, //仅为示例，并非真实的接口地址
          success(res) {
            // console.log(res);
            // 设置openId
            let openId = res.data.openid;
            openId ? self.setUserIdToData(res.data.openid) : undefined;
          }
        })
      }
    })
  },
  // 提前发起提示，获取用户权限
  tipUserGetInfo(_scope) {
    wx.authorize({
      scope: _scope,
      success(res) {
        // console.log(res.userInfo.avatarUrl);
      }
    })
  },
  //获取用户信息
  _getUserInfo() {
    let self = this;
    wx.getUserInfo({
      success(res) {
        // 获取用户昵称和头像url
        let userIcon = res.userInfo.avatarUrl,
          userName = res.userInfo.nickName;
        // 设置登录状态
        self.setData({
          isLoging: true,
          userIcon: userIcon,
          userName: userName
        })

      }
    })
  },
  // 用户手动设置权限
  permissionSetting() {
    // 设置用户信息
    wx.openSetting({
      success(res) {
        console.log(res.authSetting)
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
    })
  },
  // 我的收藏
  myLove() {
    console.log(this.data.openId);
    // url需要添加参数： 用户的id
    let url = "/pages/myLove/myLove?openId=" + this.data.openId;
    wx.navigateTo({
      url: url,
    }),
      // 发送user的信息到后台判断是否是新用户
      this.sendUserInfo2Server();
  },
  //发送用户信息到后台，判断添加新用户
  sendUserInfo2Server() {
    let userName = this.data.userName,
      userIcon = this.data.userIcon,
      userOpenId = this.data.openId;
    console.log(userName, userIcon, userOpenId);
    const url = urlObj.addUser
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: {
        userName: userName,
        userIcon: userIcon,
        openId: userOpenId
      },
      success(res) {
        console.log("添加成功过");
      }
    })
  },
  // 设置用户的openId到app全局和页面中
  setUserIdToData(openId) {
    if (openId) {
      // 设置到页面
      this.setData({
        openId: openId
      })
      // 设置到全局
      setGlobal2Data('openId', openId);
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selectIndex: 2
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
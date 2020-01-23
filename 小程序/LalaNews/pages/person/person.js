// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoging: false,
    userIcon: null,
    userName: null
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
        }
      }
    });
  },
  // 提前发起提示，获取用户权限
  tipUserGetInfo(_scope) {
    wx.authorize({
      scope: _scope,
      success(res) {
        console.log(res);
      }
    })
  },
  //获取用户信息
  _getUserInfo() {
    let self = this;
    wx.getUserInfo({
      success(res) {
        console.log(res);
        let userIcon = res.userInfo.avatarUrl,
          userName = res.userInfo.nickName;
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
    // url需要添加参数： 用户的id
    let url = "/pages/myLove/myLove";
    wx.navigateTo({
      url: url,
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
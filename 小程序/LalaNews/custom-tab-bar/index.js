// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes: {

  },
  /**
   * 组件的初始数据
   */
  data: {
    // 用于存放tabbar的数组
    selectIndex: 1,
    tabArray: [
      {
        id: "1",
        name: "搜索",
        path: "/pages/search/search",
        icon: "/src/image/搜索.png",
        selectIcon: "/src/image/搜索 选中.png"
      },
      {
        id: "2",
        name: "主页",
        path: "/pages/index/index",
        icon: "/src/image/主页.png",
        selectIcon: "/src/image/主页 选中.png"
      },
      {
        id: "3",
        name: "我",
        path: "/pages/person/person",
        icon: "/src/image/我.png",
        selectIcon: "/src/image/我 选中.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabItemTap(e) {
      wx.hideTabBar()
      //获取点击的索引
      const data = e.currentTarget.dataset;
      const index = data.index,
        url = data.url;
      console.log(url);
      // 设置索引
      this.setData({
        selectIndex: index
      });
      // 切换tab
      wx.switchTab({ url })
    }
  }
})

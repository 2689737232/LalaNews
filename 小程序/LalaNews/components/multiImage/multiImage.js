// components/multiImage/multiImage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newsItem: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    isClick: false,
    selcetIndex: 0
  },
  observers: {
    "newsData": (e) => {
      console.log(e);
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 多图点击事件，进去图片查看页面
    imageItemClick(e) {
      console.log(e);
      let _url = "/pages/imageSwiper/imageSwiper?index=" + e.target.dataset.index;
      // 获取全局实例设置数据 在页面之间通行。
      const app =  getApp();
      app.globalData.imageArray = this.data.newsItem.images;
      wx.navigateTo({
        // 跳转到图片详细查看页面
        url: _url,
      });
    }
  }
})

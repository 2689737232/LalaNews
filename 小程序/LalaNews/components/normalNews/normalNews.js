// components/normalNews/normalNews.js
var toolsObj = require("../../utils/tools.js").toolsObj;
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toNewsDetail(e) {
      const newsId = e.currentTarget.dataset.newsid;
      // console.log(newsId,e);
      
      toolsObj.setGlobal2Data("newsId",newsId);
      wx.navigateTo({
        url:"/pages/newsDetail/newsDetail"
      })
    }
  }
})

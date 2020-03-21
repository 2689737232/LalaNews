// components/indexList/indexList.js
// 引入请求方法
const getTagNewsList = require("../../requestManager/requestManager.js").getTagNewsList;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newsList: Array
  },
  /**
   * 组件的初始数据
   */

  data: {

  },
  lifetimes: {
    // 在组件attached方法里面执行获取数据的方法
    attached() {
      
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // touchstart(){
    //   console.log("开始移动");
    // },
    refresherpulling(){
      console.log("被属性");
    }
  }
})

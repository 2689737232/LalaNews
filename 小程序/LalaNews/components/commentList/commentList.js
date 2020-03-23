// components/commentList/commentList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    commentList: Array
  },

  lifetimes: {
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  observers: {
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 触发自定义事件，将评论信息传到newsDetails页面
    showReview(msg) {
      this.triggerEvent("showReview", msg);
    }
  }
})

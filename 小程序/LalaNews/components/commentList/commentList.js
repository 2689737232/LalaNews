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
    commentList: (e) => {
      console.log(e);
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    showReview(msg) {
      this.triggerEvent("showReview", msg);
    }
  }
})

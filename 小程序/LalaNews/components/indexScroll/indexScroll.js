// components/indexScroll/indexScroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tagArr: Array
  },
  /**
   * 组件的初始数据
   */
  data: {
    selectTagIndex: 0,
    scrollLeft: 0
    // tagArr: ["最热", "最新", "附近"]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scollItemClick(e) {
      const index = e.currentTarget.dataset.index;
      // console.log(e,index);
      this.setData({
        selectTagIndex: index,
      })
    }
  }
})

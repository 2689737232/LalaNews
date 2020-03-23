// components/indexScroll/indexScroll.js
const toolsObj = require("../../utils/tools.js").toolsObj;
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
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scollItemClick(e) {
      // 获取点击的tag index和tagId
      const index = e.currentTarget.dataset.index,
      tagId = this.data.tagArr[index].tagId;
      // 更改选中的index
      this.setData({
        selectTagIndex: index,
      })
      // 将index存到全局上去。在index界面中使用到
      toolsObj.setGlobal2Data('tagIndex',index);
      // 将tagId设置到全局上去
      toolsObj.setGlobal2Data('tagId',tagId)
      // 触发index页面上的自定事件，通知更改tag项，以显示不同的新闻
      this.triggerEvent('customevent',{index});
    }
  }
})

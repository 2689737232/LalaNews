// components/indexList/indexList.js
// 引入请求方法
const getNewsListByTagId = require("../../requestManager/requestManager.js").getNewsListByTagId,
  toolsObj = require("../../utils/tools.js").toolsObj;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newsList: Array,
    isOver: Boolean
  },
  /**
   * 组件的初始数据
   */

  data: {
    // 是否开启加载动画
    isLoading: false,
    // 是否本tag下数据加载完毕
    loadOver: false
  },
  lifetimes: {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // touchstart(){
    //   console.log("开始移动");
    // },
    refresherpulling() {
      console.log("被属性");
    },
    setLoadingAnimate(isLoading) {
      this.setData({
        isLoading: isLoading
      })
    },
    // 触底事件，判断是否加载完毕，如果加载完毕就不请求
    onReachBottom() {
      // 如果加载完毕后不开启下拉触底事件
        // 开启加载动画
        this.setLoadingAnimate(true);
        // 获取当前选中的tagId
        let tagId = toolsObj.getGlobalData("tagId");
        // 获取全局的newsList
        let globaleNewsList = toolsObj.getGlobalData("newsList")


        // 触底，发起请求,获取比当前列表多三条
        getNewsListByTagId(tagId, globaleNewsList.length, globaleNewsList.length + 3).then((e) => {
          // 如果没有数据了，当前的tag下的新闻就加载完毕。关闭加载动画
          if (e.msg.data.length == 0) {
            this.setLoadingAnimate(false)
          }
          // 同步更新全局
          globaleNewsList = globaleNewsList.concat(e.msg.data);
          toolsObj.setGlobal2Data("newsList", globaleNewsList);
          // 触发事件
          this.triggerEvent("customevent", { newList: e.msg.data });
        });
    },
    // 设置加载动画
    setLoadingAnimate(_isLoading) {
      this.setData({
        isLoading: _isLoading
      })
    }
  },

})

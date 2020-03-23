// components/commentItem/commentItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    commentItem: Object,
  },

  lifetimes: {
    attached() {

    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    isShowMore: false,
    moreComment: [],
    moreText: "显示剩余",
    moreSymbol: " +"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 显示更多
    showMore(e) {
      let morechirden = [];
      if (!this.data.isShowMore) {
        // 获取剩余的评论列表
        morechirden = e.currentTarget.dataset.morechirden;
        morechirden = morechirden.slice(3, morechirden.length);
      }
      this.setData({
        isShowMore: !this.data.isShowMore,
        moreComment: morechirden,
        moreText: this.data.isShowMore ? "展开剩余" : "收起剩余",
        moreSymbol: this.data.isShowMore ? " +" : " -"
      })
    },
    // 回复某一个评论
    review(msg) {
      // console.log(msg);
      
      let commentId = msg.currentTarget.dataset.commentid,
        userName = msg.currentTarget.dataset.username,
        ancestorId=msg.currentTarget.dataset.ancestorid;
      this.triggerEvent("showReview", { commentId: commentId, userName, userName ,ancestorId:ancestorId});
    }
  }
})

// components/videoNews/videoNews.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newsItem: Object
  },
  observers: {
    "newsItem": (r) => {
      console.log(r.videoUrl);
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    isPlay: false,
    playIcon: "/src/image/播放.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // // 图标点击事件
    // playIconClick(e) {
    //   console.log(this.setPlayIcon());
    // },
    // // 设置图标展示
    // setPlayIcon(){
    //   if (this.data.isPlay) {
    //     this.setData({
    //       playIcon: "/src/image/播放.png"
    //     })
    //   } else {
    //     console.log(this);
    //     this.setData({
    //       playIcon: "/src/image/暂停.png"
    //     })
    //   }
    //   let _isPlay = !this.data.isPlay;
    //   this.setData({
    //     isPlay: _isPlay
    //   })
    // }
  }
})

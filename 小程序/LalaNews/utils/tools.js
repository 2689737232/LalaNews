// 代理设置NavigationBar
module.exports.proxySetNavigationBar = (title, success, fail, complete) => {
    wx.setNavigationBarTitle({
        title,
        success,
        fail,
        complete
    })
}
module.exports.toolsObj = {
    // 设置全局变量到app的globalData属性上
    setGlobal2Data(name, value) {
        const app = getApp();
        if (app.globalData) {
            app.globalData[name] = value;
        } else {
            app.globalData = {}
        }
    },
    // 从app的globalData上获取数据
    getGlobalData(name) {
        const app = getApp();
        let result = undefined;
        if (app.globalData) {
            result = app.globalData[name];
        }
        return result;
    },
    // 获取用户信息
    getInfoPromise(e = "") {
        wx.getUserInfo({
            success(msg) {
                let userImage = msg.userInfo.avatarUrl;
                console.log(userImage,e);
            }
        })
    }
}
// https://easy-mock.com/mock/5e1ab388edb71e73148360e8/lalaNews/getNewsList/tagId/0
// mock地址
const baseURL = "https://easy-mock.com/mock/5e1ab388edb71e73148360e8/lalaNews";
const tagNewsList = baseURL + "/getNewsList/tagId/";
const detailNews = baseURL + "/getNewsDetail/newsId/";
const recommendList = baseURL + "/getrecommendList";
// 开发地址
const devURL = "http://	192.168.56.1:8888/";
const getTagList = devURL + "tag/getTag/";
const getNewsListByTagIdTest = "http://	192.168.56.1:8050/news-server/news/getNewsListByTagId/";
const getNewsDetail = "http://192.168.56.1:8050/news-server/newsDetail/getNewsDetail/";
// 获取搜索区域推荐的标签列表
const getSearchTagList = "http://192.168.56.1:8050/search-server/search/getSearchTagList/";
// 添加用户
const addUser = "http://192.168.56.1:8050/user-server/user/getUserByOpenId/";
const urlObj = {
    baseURL,
    tagNewsList,
    detailNews,
    recommendList,
    devURL,
    getTagList,
    getNewsListByTagIdTest,
    getNewsDetail,
    getSearchTagList,
    addUser
}

module.exports = {
    urlObj
}      

// https://easy-mock.com/mock/5e1ab388edb71e73148360e8/lalaNews/getNewsList/tagId/0
// mock地址
const baseURL = "https://easy-mock.com/mock/5e1ab388edb71e73148360e8/lalaNews";
const tagNewsList = baseURL + "/getNewsList/tagId/";
const detailNews = baseURL + "/getNewsDetail/newsId/";
const recommendList = baseURL + "/getrecommendList";


// 开发地址
const devURL = "http://192.168.59.3:8050/";
const getTagList = devURL + "tag-server/tag/getTag/";
const getNewsListByTagIdTest = devURL + "news-server/news/getNewsListByTagId/";
const getNewsDetail = devURL + "news-server/newsDetail/getNewsDetail/";
// 获取搜索区域推荐的标签列表
const getSearchTagList = devURL + "search-server/search/getSearchTagList/";
// 添加用户
const addUser = devURL + "user-server/user/getUserByOpenId/";
// 获取用户收藏列表 (暂时采用本地地址)
const userCollect = "http://192.168.56.1:8050/user-server/userCollect/getUserCollectByOpenId/"

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
    addUser,
    userCollect
}

module.exports = {
    urlObj
}      

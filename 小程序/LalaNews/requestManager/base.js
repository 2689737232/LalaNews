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
const urlObj = {
    baseURL,
    tagNewsList,
    detailNews,
    recommendList,
    devURL,
    getTagList,
    getNewsListByTagIdTest,
    getNewsDetail
}

module.exports = {
    urlObj
}      

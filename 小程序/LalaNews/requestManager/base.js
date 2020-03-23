// https://easy-mock.com/mock/5e1ab388edb71e73148360e8/lalaNews/getNewsList/tagId/0
// mock地址
// const baseURL = "https://easy-mock.com/mock/5e1ab388edb71e73148360e8/lalaNews";
// const tagNewsList = baseURL + "/getNewsList/tagId/";
// const detailNews = baseURL + "/getNewsDetail/newsId/";
// const recommendList = baseURL + "/getrecommendList";


// 开发地址
const devURL = "http://192.168.59.3:8050/",
    getTagList = devURL + "tag-server/tag/getTag/",
    getNewsListByTagIdTest = devURL + "news-server/news/getNewsListByTagId/",
    getNewsDetail = devURL + "news-server/newsDetail/getNewsDetail/",
    // 获取搜索区域推荐的标签列表
    getSearchTagList = devURL + "search-server/search/getSearchTagList/",
    // 添加用户
    addUser = devURL + "user-server/user/getUserByOpenId/",
    // 获取用户收藏列表 (暂时采用本地地址)
    userCollect = devURL + "user-server/userCollect/getUserCollectByOpenId/",
    // 获取新闻是否本用户收藏
    newsIsCollect = devURL + "user-server/userCollect/getNewsIsCollect/",
    // 用户收藏列表点击
    clickCollect = devURL + "user-server/userCollect/collectClick/",
    // 获取用户已经喜欢的tag标签
    userTag = devURL + "user-server/userCollect/getUserTags/",
    // 删除用户指定的tag
    deleteTag = devURL + "user-server/userCollect/deleteUserTag/",
    // 用户添加喜欢的tag
    insertUserTag = devURL + "user-server/userCollect/insertUserTag/",
    // 添加评论
    addComment = devURL + "/comment-server/comment/addComment/",
    // 通过newsId获取评论列表
    getNewsCommentsByNewsId = devURL + "/comment-server/comment/getCommentsByNewsId/"
const urlObj = {
    // devURL,
    // tagNewsList,
    // detailNews,
    // recommendList,
    devURL,
    getTagList,
    getNewsListByTagIdTest,
    getNewsDetail,
    getSearchTagList,
    addUser,
    userCollect,
    newsIsCollect,
    clickCollect,
    userTag,
    deleteTag,
    insertUserTag,
    addComment,
    getNewsCommentsByNewsId
}

module.exports = {
    urlObj
}      

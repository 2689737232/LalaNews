package cn.edu.cqcet.teamlala.controller;


import cn.edu.cqcet.teamlala.JsonFormat;
import cn.edu.cqcet.teamlala.MyJson;
import cn.edu.cqcet.teamlala.po.Comment;
import cn.edu.cqcet.teamlala.po.NewsDetail;
import cn.edu.cqcet.teamlala.po.User;
import cn.edu.cqcet.teamlala.po.Paragraph;
import cn.edu.cqcet.teamlala.service.NewsDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/newsDetail")
public class NewsDetailController {
    @Autowired
    private NewsDetailService newsDetailService;
    @Autowired
    private RestTemplate restTemplate;

    //    返回自定义JSON的新闻详细
    @RequestMapping("/getNewsDetail/{newsId}")
    MyJson getNewsDetailByNewsId(@PathVariable("newsId") Integer newsId) {
        NewsDetail newsDetail = this._getNewsDetailByNewsId(newsId);
        return JsonFormat.ok(newsDetail);
    }
    // getNewsDetailByNewsId 通过newsId获取新闻
    @RequestMapping("/_getNewsDetail/{newsId}")
    NewsDetail _getNewsDetailByNewsId(@PathVariable("newsId") Integer newsId){
        // 通过newsId获取新闻详情和新闻的文章内容。
        NewsDetail newsDetail = this.newsDetailService.getNewsDetailByNewsId(newsId);
        //
        List<Paragraph> paragraphList = this.newsDetailService.getContentByNewsId(newsId);
        // 把新闻的文章内容设置到新闻详情里面去
        newsDetail.setDescription(paragraphList);
        // 设置新闻详情的评论列表
        List<Comment> commentList = restTemplate.getForObject("http://192.168.59.3:8050/comment-server/comment/getCommentsByNewsId/" + newsId,List.class);
        // 添加本条新闻的所有评论到新闻详情里
        newsDetail.setComments(commentList);
        // 获取本条新闻的评论数量
        newsDetail.setCommentNumber(commentList.size());
        return newsDetail;
    }
    // 通过newsid获取文章内容
    @RequestMapping("/getNewsContent/{newsId}")
    public List<Paragraph> getContentByNewsId(@PathVariable("newsId") Integer newsId) {
        List<Paragraph> paragraphList = new ArrayList<>();
        paragraphList = this.newsDetailService.getContentByNewsId(newsId);
        return paragraphList;
    }
    // 添加评论
    @RequestMapping("/addComment/{openId}/{newsId}/{context}/{parentId}/")
    public Integer addComment(@PathVariable String openId,
                              @PathVariable Integer newsId,
                              @PathVariable String context,
                              @PathVariable Integer parentId){
        User user = restTemplate.getForObject("http://192.168.59.3:8050/comment-server/comment/getCommentsByNewsId/" + newsId, User.class);
        return 1;
    }

}

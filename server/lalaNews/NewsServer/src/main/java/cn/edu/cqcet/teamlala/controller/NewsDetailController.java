package cn.edu.cqcet.teamlala.controller;

import cn.edu.cqcet.teamlala.JsonFormat;
import cn.edu.cqcet.teamlala.MyJson;
import cn.edu.cqcet.teamlala.po.Comment;
import cn.edu.cqcet.teamlala.po.NewsDetail;
import cn.edu.cqcet.teamlala.po.Paragraph;
import cn.edu.cqcet.teamlala.service.NewsDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.awt.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/newsDetail")
public class NewsDetailController {
    @Autowired
    private NewsDetailService newsDetailService;
    @Autowired
    private RestTemplate restTemplate;

    @RequestMapping("/getNewsDetail/{newsId}")
    MyJson getNewsDetailByNewsId(@PathVariable("newsId") Integer newsId) {
        NewsDetail newsDetail = this.newsDetailService.getNewsDetailByNewsId(newsId);
        List<Paragraph> paragraphList = this.newsDetailService.getContentByNewsId(newsId);
        // 排序数组将段落位置重小到大的排序
        for (int i = 1; i < paragraphList.size(); i++) {
            for (int j = 0; j < paragraphList.size() - i; j++) {
                if (paragraphList.get(j).getPosition() > paragraphList.get(j + 1).getPosition()) {
                    Paragraph temp = new Paragraph();
                    temp = paragraphList.get(j + 1);
                    paragraphList.set(j + 1, paragraphList.get(j));
                    paragraphList.set(j, temp);
                }
            }
        }
        newsDetail.setDescription(paragraphList);
        List<Comment> commentList = restTemplate.getForObject("http://192.168.56.1:8050/comment-server/comment/getCommentsByNewsId/2010000001",List.class);
        newsDetail.setComments(commentList);
        return JsonFormat.ok(newsDetail);
    }

    @RequestMapping("/getNewsContent/{newsId}")
    public List<Paragraph> getContentByNewsId(@PathVariable("newsId") Integer newsId) {
        List<Paragraph> paragraphList = new ArrayList<>();
        paragraphList = this.newsDetailService.getContentByNewsId(newsId);
        return paragraphList;
    }


}

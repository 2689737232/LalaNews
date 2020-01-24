package cn.edu.cqcet.teamlala.controller;

import cn.edu.cqcet.teamlala.JsonFormat;
import cn.edu.cqcet.teamlala.MyJson;
import cn.edu.cqcet.teamlala.po.News;
import cn.edu.cqcet.teamlala.po.NewsImage;
import cn.edu.cqcet.teamlala.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/news")
public class NewsController {
    @Autowired
    NewsService newsService;
    List<Integer> newsIds = new ArrayList<>();

    // 通过tagId获取相应的newsId列表
    @RequestMapping("/getNewsIdListByTagId/{tagId}/{start}/{end}")
    public List<Integer> getNewsIdListByTagId(@PathVariable("tagId") Integer tagId,@PathVariable("start") int start,@PathVariable("end") int end) {
        newsIds = this.newsService.getNewsIdListByTagId(tagId, start,end);
        return newsIds;
    }

    // 通过newsId获取新闻列表
    @RequestMapping("/getNewsByNewsId/{newsId}")
    public News getNewsByNewsId(@PathVariable("newsId") Integer newsId) {
        return this.newsService.getNewsByNewsId(newsId);
    }
    // 通过tagId获取对应的newsList
    @RequestMapping("/getNewsListByTagId/{tagId}/{start}/{end}")
    public MyJson getNewsListByTagId(@PathVariable("tagId") Integer tagId, @PathVariable("start") int start,@PathVariable("end") int end) {
        if (end - start > 10){
            end = start + 10;
        }
        List<Integer> idList = this.newsService.getNewsIdListByTagId(tagId, start,end);
        List<News> newsList = new ArrayList<>();
        // 循环id列表获取新闻
        for (Integer id : idList) {
            System.out.println(id);
            News news = this.getNewsByNewsId(id);
            // 初始化images列表
            news.setImages(new ArrayList<>());
            // 储存每一个新闻的图片列表
            List<NewsImage> newsImageList = new ArrayList<>();
            newsImageList = this.newsService.getImagesByNewsId(id);
            // 循环添加图片链接到每一项新闻对象的images中
            for(NewsImage newsImage : newsImageList){
                news.getImages().add(newsImage.getImageUrl());
            }
            newsList.add(news);
        }
        // 返回自定义json
        return JsonFormat.ok(newsList);
    }
}

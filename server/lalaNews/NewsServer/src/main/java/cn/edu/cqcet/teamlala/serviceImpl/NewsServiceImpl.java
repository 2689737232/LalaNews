package cn.edu.cqcet.teamlala.serviceImpl;

import cn.edu.cqcet.teamlala.NewServer;
import cn.edu.cqcet.teamlala.mapper.NewsMapper;
import cn.edu.cqcet.teamlala.po.News;
import cn.edu.cqcet.teamlala.po.NewsImage;
import cn.edu.cqcet.teamlala.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.List;

@Service
public class NewsServiceImpl implements NewsService {
    @Autowired
    private NewsMapper newsMapper;
    // 根据tagId获取新闻列表
    @Override
    public List<Integer> getNewsIdListByTagId(Integer tagId,int start,int end) {
        return newsMapper.getNewsIdListByTagId(tagId,start,end);
    }
    // 根据newsId获取新闻
    @Override
    public News getNewsByNewsId(Integer newsId) {
        return this.newsMapper.getNewsByNewsId(newsId);
    }
    // 根据newsId获取新闻的图片
    @Override
    public List<NewsImage> getImagesByNewsId(Integer newsId) {
        return this.newsMapper.getImagesByNewsId(newsId);
    }
}

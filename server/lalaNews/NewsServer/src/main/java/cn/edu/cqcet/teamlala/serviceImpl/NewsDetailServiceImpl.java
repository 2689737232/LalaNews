package cn.edu.cqcet.teamlala.serviceImpl;

import cn.edu.cqcet.teamlala.mapper.NewsDetailMapper;
import cn.edu.cqcet.teamlala.po.NewsDetail;
import cn.edu.cqcet.teamlala.po.Paragraph;
import cn.edu.cqcet.teamlala.service.NewsDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsDetailServiceImpl implements NewsDetailService {
    @Autowired
    private NewsDetailMapper newsDetailMapper;
    @Override
    public NewsDetail getNewsDetailByNewsId(Integer newsId) {
        return  this.newsDetailMapper.getNewsDetailByNewsId(newsId);
    }

    @Override
    public List<Paragraph> getContentByNewsId(Integer newsId) {
        return this.newsDetailMapper.getContentByNewsId(newsId);
    }

    @Override
    public int getCommentNumber(Integer newsId) {
        return this.newsDetailMapper.getCommentNumber(newsId);
    }
}

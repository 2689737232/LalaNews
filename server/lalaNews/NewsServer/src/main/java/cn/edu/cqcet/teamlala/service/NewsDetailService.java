package cn.edu.cqcet.teamlala.service;

import cn.edu.cqcet.teamlala.po.NewsDetail;
import cn.edu.cqcet.teamlala.po.Paragraph;

import java.util.List;

public interface NewsDetailService {
    NewsDetail getNewsDetailByNewsId(Integer newsId);
    List<Paragraph> getContentByNewsId(Integer newsId);
    int getCommentNumber(Integer newsId);
}

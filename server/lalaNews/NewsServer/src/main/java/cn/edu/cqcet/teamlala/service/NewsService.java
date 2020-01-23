package cn.edu.cqcet.teamlala.service;

import cn.edu.cqcet.teamlala.po.NewsImage;
import cn.edu.cqcet.teamlala.po.News;

import java.lang.reflect.Array;
import java.util.List;

public interface NewsService {
    // 根据tagid获取相应数量的新闻id列表
    List<Integer> getNewsIdListByTagId(Integer tagId, int start,int end);
    // 根据newsId获取新闻，不包括新闻的图片列表
    News getNewsByNewsId(Integer NewsId);
    // 根据newsId获取相应的图片列表
    List<NewsImage> getImagesByNewsId(Integer newsId);
}

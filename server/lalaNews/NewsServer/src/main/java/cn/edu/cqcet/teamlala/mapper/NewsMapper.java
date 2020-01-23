package cn.edu.cqcet.teamlala.mapper;

import cn.edu.cqcet.teamlala.po.News;
import cn.edu.cqcet.teamlala.po.NewsImage;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import javax.swing.*;
import java.awt.*;
import java.lang.reflect.Array;
import java.util.List;

@Mapper
public interface NewsMapper {
     // 通过tagId获取对应数量的新闻id列表 起始数量的新闻列表
     @Select("select news.news_id from tag_news,news,tag where  tag.tag_id = #{arg0} and tag_news.tag_id = tag.tag_id and news.news_id = tag_news.news_id limit #{arg1},#{arg2}")
     List<Integer> getNewsIdListByTagId(Integer tagId,int start,int end);
     // 通过newsId查询新闻
     @Select("select n.news_id,n.title,a.author_name,a.author_id,n.video_url,n.type,n.create_time,n.update_time from news as n,author as a where n.author_id = a.author_id and n.news_id = #{newsId}")
     News getNewsByNewsId(Integer newsId);
     // 通过newsid获取imagelist
     @Select("select\n" +
             "       i.image_id,\n" +
             "       i.image_url,\n" +
             "       i.create_time,\n" +
             "       i.update_time\n" +
             "from news_images\n" +
             "    as ni,image as i\n" +
             "where  ni.news_id = #{newsId} and ni.image_id = i.image_id;")
     List<NewsImage> getImagesByNewsId(Integer newsId);
}
